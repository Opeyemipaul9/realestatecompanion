import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <Card className="bg-white hover:shadow-xl transition-shadow duration-300 text-center">
      <CardContent className="p-8">
        <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon className="text-primary w-8 h-8" />
        </div>
        <h3 className="text-xl font-semibold text-neutral-800 mb-4">{title}</h3>
        <p className="text-neutral-600">{description}</p>
      </CardContent>
    </Card>
  );
}
