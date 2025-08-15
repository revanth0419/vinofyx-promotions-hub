// Local business images
import karachiBakeryImg from "@/assets/images/karachi-bakery.jpg";
import shilparamImg from "@/assets/images/shilparamam.jpg";
import itcKohenurImg from "@/assets/images/itc-kohenur.jpg";
import placeholderImg from "@/assets/images/placeholder.jpg";

export const categories = ["Restaurant", "Real Estate", "Shopping", "Hotel", "Other"];
export const locations = ["Hyderabad, India"];

export const businesses = [
  { id: "b1", name: "Karachi Bakery", category: "Restaurant", location: "Hyderabad, India", rating: 4.7, image: karachiBakeryImg, address: "Banjara Hills, Hyderabad, Telangana", phone: "+91 98765-43210", email: "info@karachibakery.com", website: "https://karachibakery.example.com", socials: {}, description: "Famous bakery in Hyderabad known for authentic biscuits and sweets" },
  { id: "b2", name: "Shilparamam", category: "Shopping", location: "Hyderabad, India", rating: 4.6, image: shilparamImg, address: "HITEC City, Hyderabad, Telangana", phone: "+91 91234-56789", email: "info@shilparamam.com", website: "https://shilparamam.example.com", socials: {}, description: "Cultural and crafts village showcasing traditional Indian art and handicrafts" },
  { id: "b3", name: "ITC Kohenur", category: "Hotel", location: "Hyderabad, India", rating: 4.8, image: itcKohenurImg, address: "Kondapur, Hyderabad, Telangana", phone: "+91 99887-66554", email: "info@itckohenur.com", website: "https://itckohenur.example.com", socials: {}, description: "Luxury hotel in Hyderabad with world-class amenities and services" },
];

// Export placeholder for use in components
export { placeholderImg };

export const promotions = [
  { id: "p1", businessId: "b1", title: "2-for-1 Happy Hour", description: "Enjoy buy-one-get-one cocktails from 5-7pm.", category: "Restaurant", expiresAt: new Date(Date.now() + 1000*60*60*24*10).toISOString(), image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
  { id: "p2", businessId: "b3", title: "Spring Sale 30% Off", description: "Save 30% on selected items.", category: "Retail", expiresAt: new Date(Date.now() + 1000*60*60*24*3).toISOString(), image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
  { id: "p3", businessId: "b2", title: "Free Trial Week", description: "Try our gym free for 7 days.", category: "Health", expiresAt: new Date(Date.now() + 1000*60*60*24*20).toISOString(), image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
  { id: "p4", businessId: "b4", title: "New Patient Special", description: "Get a cleaning + X-rays at a discounted rate.", category: "Health", expiresAt: new Date(Date.now() - 1000*60*60*24*2).toISOString(), image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
];
