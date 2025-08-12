import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export type Promotion = {
  id: string;
  businessId: string;
  title: string;
  description: string;
  category: string;
  expiresAt: string;
  image?: string;
};

export const PromotionCard = ({ id, businessId, title, description, category, expiresAt, image }: Promotion) => {
  const expired = new Date(expiresAt) < new Date();
  return (
    <Link to={`/business/${businessId}`} className="group">
      <Card className={`overflow-hidden ${expired ? "opacity-70" : ""}`}>
        {image && <img src={image} alt={`${title} promotion`} className="h-40 w-full object-cover" loading="lazy" />}
        <CardContent className="p-4">
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{description}</p>
          <div className="mt-2 flex items-center gap-2">
            <Badge>{category}</Badge>
            <span className={`text-xs ${expired ? "text-destructive" : "text-muted-foreground"}`}>
              {expired ? "Expired" : `Ends ${new Date(expiresAt).toLocaleDateString()}`}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
