// Default placeholder image for businesses
const placeholder = "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60";

export const categories = ["Restaurant", "Real Estate", "Shopping", "Other"];
export const locations = ["Hyderabad, India"];

export const businesses = [
  { id: "b1", name: "Minerva Coffee Shop", category: "Restaurant", location: "Hyderabad, India", rating: 4.6, image: "https://i.ibb.co/8KqGz7j/minerva-coffee-shop.jpg", address: "Banjara Hills, Hyderabad, Telangana", phone: "+91 98765-43210", email: "info@minervacoffee.com", website: "https://minervacoffee.example.com", socials: {}, description: "Premium coffee shop in Banjara Hills serving authentic South Indian filter coffee" },
  { id: "b2", name: "Inorbit Mall", category: "Shopping", location: "Hyderabad, India", rating: 4.5, image: "https://i.ibb.co/9qX8R2m/inorbit-mall.jpg", address: "HITEC City, Hyderabad, Telangana", phone: "+91 91234-56789", email: "info@inorbitmall.com", website: "https://inorbitmall.example.com", socials: {}, description: "Modern shopping mall in HITEC City with international brands" },
  { id: "b3", name: "Aparna Serene Park", category: "Real Estate", location: "Hyderabad, India", rating: 4.7, image: "https://i.ibb.co/7XtL9K4/aparna-serene-park.jpg", address: "Kondapur, Hyderabad, Telangana", phone: "+91 99887-66554", email: "info@aparnaserenepark.com", website: "https://aparnaserenepark.example.com", socials: {}, description: "Luxury residential apartments in Kondapur with world-class amenities" },
];

export const promotions = [
  { id: "p1", businessId: "b1", title: "2-for-1 Happy Hour", description: "Enjoy buy-one-get-one cocktails from 5-7pm.", category: "Restaurant", expiresAt: new Date(Date.now() + 1000*60*60*24*10).toISOString(), image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
  { id: "p2", businessId: "b3", title: "Spring Sale 30% Off", description: "Save 30% on selected items.", category: "Retail", expiresAt: new Date(Date.now() + 1000*60*60*24*3).toISOString(), image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
  { id: "p3", businessId: "b2", title: "Free Trial Week", description: "Try our gym free for 7 days.", category: "Health", expiresAt: new Date(Date.now() + 1000*60*60*24*20).toISOString(), image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
  { id: "p4", businessId: "b4", title: "New Patient Special", description: "Get a cleaning + X-rays at a discounted rate.", category: "Health", expiresAt: new Date(Date.now() - 1000*60*60*24*2).toISOString(), image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
];
