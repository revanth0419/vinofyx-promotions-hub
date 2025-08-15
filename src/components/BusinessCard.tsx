import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export type Business = {
  id: string;
  name: string;
  category: string;
  location: string;
  rating?: number;
  image: string;
};

export const BusinessCard = ({ id, name, category, location, rating, image }: Business) => {
  return (
    <Link to={`/business/${id}`} className="group">
      <Card className="overflow-hidden transition-transform group-hover:-translate-y-0.5">
        <img 
          src={image} 
          alt={`${name} ${category} in ${location}`} 
          className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-110" 
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = "https://via.placeholder.com/400x300?text=Image+Not+Available";
          }}
        />
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">{name}</h3>
            {rating ? <span className="text-sm text-muted-foreground">{rating.toFixed(1)}★</span> : null}
          </div>
          <div className="mt-2 flex items-center gap-2">
            <Badge variant="secondary">{category}</Badge>
            <span className="text-sm text-muted-foreground">{location}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
