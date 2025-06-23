import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import PropertyCard from "@/components/property-card";
import TestimonialCard from "@/components/testimonial-card";
import ServiceCard from "@/components/service-card";
import ContactForm from "@/components/contact-form";
import { Home as HomeIcon, Key, TrendingUp, Handshake, Wrench, Calculator, MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import type { Property, Testimonial } from "@shared/schema";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SmartPhone from '@mui/icons-material/Smartphone';
import MailIcon from '@mui/icons-material/Mail';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function Home() {
  const { data: properties, isLoading: propertiesLoading } = useQuery<Property[]>({
    queryKey: ["/api/properties"],
  });

  const { data: testimonials, isLoading: testimonialsLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  const services = [
    {
      icon: HomeIcon,
      title: "Property Sales",
      description: "Expert guidance through the entire buying and selling process with market insights and negotiation expertise."
    },
    {
      icon: Key,
      title: "Property Rentals",
      description: "Find the perfect rental property or manage your investment properties with our comprehensive rental services."
    },
    {
      icon: TrendingUp,
      title: "Market Analysis",
      description: "Detailed market analysis and property valuations to help you make informed real estate investment decisions."
    },
    {
      icon: Handshake,
      title: "Investment Consulting",
      description: "Strategic investment advice and portfolio management for building wealth through real estate investments."
    },
    {
      icon: Wrench,
      title: "Property Management",
      description: "Full-service property management including maintenance, tenant screening, and rent collection services."
    },
    {
      icon: Calculator,
      title: "Financing Assistance",
      description: "Connect with trusted lenders and explore financing options to make your real estate dreams a reality."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-neutral-900 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&h=1200')"
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Find Your <span className="text-accent">Dream Home</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-neutral-200 max-w-3xl mx-auto">
              Elevation Global Property  services  helping families find their perfect home
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 px-8 py-4 text-lg font-semibold"
                onClick={() => document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Browse Properties
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-neutral-900 px-8 py-4 text-lg font-semibold"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section id="properties" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Featured Properties</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Discover our handpicked selection of premium properties in the most desirable locations
            </p>
          </div>

          {propertiesLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="h-48 w-full rounded-lg" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-20 w-full" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties?.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 px-8 py-3 text-lg font-semibold"
            >
              View All Properties
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Our Services</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Comprehensive real estate services tailored to meet all your property needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from satisfied clients who found their dream homes with us
            </p>
          </div>

          {testimonialsLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="space-y-4 p-8 bg-neutral-50 rounded-xl">
                  <div className="flex items-center space-x-4">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-3 w-16" />
                    </div>
                  </div>
                  <Skeleton className="h-20 w-full" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials?.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-neutral-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
              Ready to start your real estate journey? Contact our expert team today for personalized service
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary bg-opacity-20 w-12 h-12 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <LocationOnIcon className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Office Address</h4>
                    <p className="text-neutral-300">16 Browning Estate Elephant and Castle <br />London, England SE17 1DE </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary bg-opacity-20 w-12 h-12 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <SmartPhone className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Phone Number</h4>
                    <p className="text-neutral-300"> +44 (739) 205-6881</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary bg-opacity-20 w-12 h-12 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <MailIcon className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Email Address</h4>
                    <p className="text-neutral-300">Elevationglobalproperty@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary bg-opacity-20 w-12 h-12 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <AccessTimeIcon className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Business Hours</h4>
                    <p className="text-neutral-300">Mon - Fri: 9:00 AM - 6:00 PM<br />Sat - Sun: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/share/1LQ8RP6YyY/?mibextid=wwXIfr" className="bg-primary bg-opacity-20 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-200">
                    <Facebook className="text-white w-4 h-4" />
                  </a>
                  <a href="https://x.com/larrycypha01?s=11" className="bg-primary bg-opacity-20 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-200">
                    <Twitter className="text-white w-4 h-4" />
                  </a>
                  <a href="https://www.instagram.com/elevation_global_property_?igsh=dHQ2b2NkYnU4Z21z&utm_source=qr" className="bg-primary bg-opacity-20 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-200">
                    <Instagram className="text-white w-4 h-4" />
                  </a>
                  <a href="https://www.linkedin.com/in/michael-akinsehinde-1b258b359?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="bg-primary bg-opacity-20 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-200">
                    <Linkedin className="text-white w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
