import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Bath, Square } from "lucide-react";
import type { Property } from "@shared/schema";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const formatPrice = (price: string) => {
    const numPrice = parseFloat(price);
    if (property.propertyType === "commercial") {
      return `$${numPrice.toLocaleString()}/mo`;
    }
    return `$${numPrice.toLocaleString()}`;
  };

  return (
    <Card className="property-card overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="relative">
        <img 
          src={property.imageUrl} 
          alt={property.title}
          className="w-full h-48 object-cover"
        />
        <Badge 
          className="absolute top-3 right-3 bg-primary text-white"
          variant="secondary"
        >
          {property.propertyType}
        </Badge>
      </div>
      
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-neutral-800">{property.title}</h3>
          <span className="text-2xl font-bold text-primary">{formatPrice(property.price)}</span>
        </div>
        
        <div className="flex items-center text-neutral-600 mb-4 space-x-4">
          {property.bedrooms > 0 && (
            <div className="flex items-center">
              <Bed className="w-4 h-4 mr-1" />
              <span>{property.bedrooms} bed</span>
            </div>
          )}
          <div className="flex items-center">
            <Bath className="w-4 h-4 mr-1" />
            <span>{property.bathrooms} bath</span>
          </div>
          <div className="flex items-center">
            <Square className="w-4 h-4 mr-1" />
            <span>{property.squareFeet.toLocaleString()} sq ft</span>
          </div>
        </div>
        
        <p className="text-neutral-700 mb-4 line-clamp-3">{property.description}</p>
        
        <div className="flex items-center text-neutral-600 mb-4">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{property.location}</span>
        </div>
        
        <Button className="w-full bg-primary hover:bg-primary/90 text-white">
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}
