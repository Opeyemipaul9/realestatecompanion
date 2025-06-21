import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import type { Testimonial } from "@shared/schema";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="bg-neutral-50 border border-neutral-200">
      <CardContent className="p-8">
        <div className="flex items-center mb-6">
          <img 
            src={testimonial.avatarUrl} 
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="font-semibold text-neutral-800">{testimonial.name}</h4>
            <p className="text-neutral-600 text-sm">{testimonial.location}</p>
          </div>
        </div>
        
        <div className="flex text-accent mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
        </div>
        
        <p className="text-neutral-700">"{testimonial.content}"</p>
      </CardContent>
    </Card>
  );
}
