import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { businessListingSchema } from "@/lib/validations";
import { toast } from "sonner";
import { BusinessCard, Business } from "@/components/BusinessCard";
import { ExternalLink } from "lucide-react";

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
    image: ""
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
      image: formData.image || "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      description: formData.description,
      rating: 4.0
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
      image: ""
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
            <Input
              placeholder="Category (e.g., Restaurant, Health, Retail)"
              required
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            />
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
            <Input
              type="url"
              placeholder="Image URL (optional)"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
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