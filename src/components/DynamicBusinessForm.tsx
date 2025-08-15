import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { businessListingSchema } from "@/lib/validations";
import { toast } from "sonner";
import { BusinessCard, Business } from "@/components/BusinessCard";
import { ExternalLink } from "lucide-react";
import { categories, placeholderImg } from "@/data/data";

type LocalBusiness = {
  id: string;
  name: string;
  category: string;
  location: string;
  contact: string;
  image: string;
  description: string;
  rating?: number;
};

export const DynamicBusinessForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    contact: "",
    image: "",
    rating: 4.0
  });
  const [localBusinesses, setLocalBusinesses] = useState<LocalBusiness[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("local_businesses");
    if (saved) {
      setLocalBusinesses(JSON.parse(saved));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form data
    const businessData = {
      ...formData,
      location: "Hyderabad, India",
      website: ""
    };

    const validationResult = businessListingSchema.safeParse(businessData);
    if (!validationResult.success) {
      toast.error("Please check your input and try again");
      return;
    }

    const newBusiness: LocalBusiness = {
      id: `local_${Date.now()}`,
      name: formData.name,
      category: formData.category,
      location: "Hyderabad, India",
      contact: formData.contact,
      image: formData.image || placeholderImg,
      description: formData.description,
      rating: formData.rating
    };

    const updatedBusinesses = [...localBusinesses, newBusiness];
    setLocalBusinesses(updatedBusinesses);
    localStorage.setItem("local_businesses", JSON.stringify(updatedBusinesses));

    // Reset form
    setFormData({
      name: "",
      category: "",
      description: "",
      contact: "",
      image: "",
      rating: 4.0
    });

    toast.success("Business added successfully!");
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Add Your Business
            <Button asChild variant="outline" size="sm">
              <a 
                href="https://forms.gle/4UXJPG7JTzauKrDE8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                Fill Out the Form <ExternalLink className="h-3 w-3" />
              </a>
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <Input
              placeholder="Business Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              placeholder="Location in Hyderabad"
              value="Hyderabad, India"
              disabled
            />
            <Input
              type="number"
              placeholder="Rating (1-5)"
              min="1"
              max="5"
              step="0.1"
              value={formData.rating}
              onChange={(e) => setFormData({ ...formData, rating: parseFloat(e.target.value) || 4.0 })}
            />
            <Input
              type="url"
              placeholder="Image URL (external hosting required)"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
            />
            <p className="text-xs text-muted-foreground">Note: Please provide a direct link to an image hosted externally. Local file uploads are not currently supported.</p>
            <Textarea
              placeholder="Business Description"
              required
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
            <Input
              placeholder="Contact Info (phone/email)"
              required
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
            />
            <Button type="submit" className="w-full">
              Add Business
            </Button>
          </form>
        </CardContent>
      </Card>

      {localBusinesses.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Recently Added Businesses</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {localBusinesses.map((business) => (
              <BusinessCard key={business.id} {...business} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};