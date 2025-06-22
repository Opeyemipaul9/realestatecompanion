import { properties, testimonials, contactMessages, type Property, type Testimonial, type ContactMessage, type InsertProperty, type InsertTestimonial, type InsertContactMessage } from "@shared/schema";
import {db} from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getProperties(): Promise<Property[]>;
  getProperty(id: number): Promise<Property | undefined>;
  createProperty(property: InsertProperty): Promise<Property>;
  getTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class MemStorage implements IStorage {
  private properties: Map<number, Property>;
  private testimonials: Map<number, Testimonial>;
  private contactMessages: Map<number, ContactMessage>;
  private currentPropertyId: number;
  private currentTestimonialId: number;
  private currentContactId: number;

  constructor() {
    this.properties = new Map();
    this.testimonials = new Map();
    this.contactMessages = new Map();
    this.currentPropertyId = 1;
    this.currentTestimonialId = 1;
    this.currentContactId = 1;

    // Initialize with sample data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Sample properties
    const sampleProperties: InsertProperty[] = [
      {
        title: "Modern Family Home",
        price: "750000",
        bedrooms: 4,
        bathrooms: 3,
        squareFeet: 2400,
        description: "Beautiful contemporary home in prestigious neighborhood with stunning city views and premium finishes.",
        location: "Beverly Hills, CA",
        imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        propertyType: "residential"
      },
      {
        title: "Downtown Condo",
        price: "525000",
        bedrooms: 2,
        bathrooms: 2,
        squareFeet: 1200,
        description: "Luxury high-rise living with panoramic city views, modern amenities, and prime downtown location.",
        location: "Downtown LA, CA",
        imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        propertyType: "residential"
      },
      {
        title: "Victorian Charmer",
        price: "895000",
        bedrooms: 5,
        bathrooms: 4,
        squareFeet: 3200,
        description: "Historic Victorian home beautifully restored with modern updates while preserving original character.",
        location: "Pasadena, CA",
        imageUrl: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        propertyType: "residential"
      },
      {
        title: "Waterfront Retreat",
        price: "1250000",
        bedrooms: 3,
        bathrooms: 3,
        squareFeet: 2800,
        description: "Stunning waterfront property with private dock, panoramic lake views, and luxury finishes throughout.",
        location: "Malibu, CA",
        imageUrl: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        propertyType: "residential"
      },
      {
        title: "Minimalist Modern",
        price: "680000",
        bedrooms: 3,
        bathrooms: 2,
        squareFeet: 1800,
        description: "Sleek modern design with clean lines, open floor plan, and smart home technology integration.",
        location: "Santa Monica, CA",
        imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        propertyType: "residential"
      },
      {
        title: "Executive Office",
        price: "2500",
        bedrooms: 0,
        bathrooms: 1,
        squareFeet: 1500,
        description: "Premium office space in prestigious business district with modern amenities and parking included.",
        location: "Century City, CA",
        imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        propertyType: "commercial"
      }
    ];

    sampleProperties.forEach(property => {
      const id = this.currentPropertyId++;
      this.properties.set(id, { ...property, id });
    });

    // Sample testimonials
    const sampleTestimonials: InsertTestimonial[] = [
      {
        name: "Sarah Johnson",
        location: "Beverly Hills",
        content: "Premier Real Estate made our home buying experience seamless. Their expertise and dedication helped us find the perfect family home within our budget. Highly recommended!",
        rating: 5,
        avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
      },
      {
        name: "Michael Chen",
        location: "Downtown LA",
        content: "Outstanding investment consulting services. They helped me build a profitable real estate portfolio and provided valuable market insights. Professional and knowledgeable team.",
        rating: 5,
        avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
      },
      {
        name: "Emily Rodriguez",
        location: "Santa Monica",
        content: "Sold our property quickly and at a great price. The marketing strategy was excellent and the communication throughout the process was fantastic. Couldn't be happier!",
        rating: 5,
        avatarUrl: "https://images.unsplash.com/photo-1494790108755-2616b2332d58?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
      },
      {
        name: "David Wilson",
        location: "Pasadena",
        content: "Their property management services are top-notch. They handle everything professionally and keep my rental properties running smoothly. Great peace of mind!",
        rating: 5,
        avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
      }
    ];

    sampleTestimonials.forEach(testimonial => {
      const id = this.currentTestimonialId++;
      this.testimonials.set(id, { ...testimonial, id });
    });
  }

  async getProperties(): Promise<Property[]> {
    return Array.from(this.properties.values());
  }

  async getProperty(id: number): Promise<Property | undefined> {
    return this.properties.get(id);
  }

  async createProperty(insertProperty: InsertProperty): Promise<Property> {
    const id = this.currentPropertyId++;
    const property: Property = { ...insertProperty, id };
    this.properties.set(id, property);
    return property;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.currentTestimonialId++;
    const testimonial: Testimonial = { ...insertTestimonial, id };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentContactId++;
    const message: ContactMessage = { 
      ...insertMessage, 
      id,
      phone: insertMessage.phone || null,
      service: insertMessage.service || null,
      createdAt: new Date()
    };
    this.contactMessages.set(id, message);
    return message;
  }
}

export class DatabaseStorage implements IStorage {
  async getProperties(): Promise<Property[]> {
    return await db.select().from(properties);
  }

  async getProperty(id: number): Promise<Property | undefined> {
    const [property] = await db.select().from(properties).where(eq(properties.id,id));
    return property || undefined;

  }

  async createProperty(insertProperty: InsertProperty): Promise<Property> {
    const [property] = await db
      .insert(properties)
      .values(insertProperty)
      .returning();
    return property;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return await db.select().from(testimonials);
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const [testimonial] = await db
      .insert(testimonials)
      .values(insertTestimonial)
      .returning();
    return testimonial;
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const [message] = await db
      .insert(contactMessages)
      .values(insertMessage)
      .returning();
    return message;
  }
}

export const storage =  new DatabaseStorage();
