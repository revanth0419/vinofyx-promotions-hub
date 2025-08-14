// Default placeholder image for businesses
const placeholder = "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60";

export const categories = ["Restaurant", "Real Estate", "Shopping", "Other"];
export const locations = ["Hyderabad, India"];

export const businesses = [
  { id: "b1", name: "Vasavi Signature", category: "Real Estate", location: "Hyderabad, India", rating: 4.8, image: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Hyderabad_Flat_Building.jpg", address: "Kukatpally, Hyderabad, Telangana", phone: "+91 98765-43210", email: "info@vasavisignature.com", website: "https://vasavisignature.example.com", socials: {}, description: "3BHK Flats in Kukatpally with modern amenities, price ₹1.2 Cr" },
  { id: "b2", name: "Paradise Biryani", category: "Restaurant", location: "Hyderabad, India", rating: 4.9, image: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Paradise_Biryani_Hyderabad.jpg", address: "Secunderabad, Hyderabad, Telangana", phone: "+91 91234-56789", email: "info@paradisebiryani.com", website: "https://paradisebiryani.example.com", socials: {}, description: "Famous Hyderabadi biryani restaurant in Secunderabad" },
  { id: "b3", name: "GVK One Mall", category: "Shopping", location: "Hyderabad, India", rating: 4.6, image: "https://upload.wikimedia.org/wikipedia/commons/3/39/GVK_One_Hyderabad.jpg", address: "Banjara Hills, Hyderabad, Telangana", phone: "+91 99887-66554", email: "info@gvkonemall.com", website: "https://gvkonemall.example.com", socials: {}, description: "Premium shopping mall in Banjara Hills" },
];

export const promotions = [
  { id: "p1", businessId: "b1", title: "2-for-1 Happy Hour", description: "Enjoy buy-one-get-one cocktails from 5-7pm.", category: "Restaurant", expiresAt: new Date(Date.now() + 1000*60*60*24*10).toISOString(), image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
  { id: "p2", businessId: "b3", title: "Spring Sale 30% Off", description: "Save 30% on selected items.", category: "Retail", expiresAt: new Date(Date.now() + 1000*60*60*24*3).toISOString(), image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
  { id: "p3", businessId: "b2", title: "Free Trial Week", description: "Try our gym free for 7 days.", category: "Health", expiresAt: new Date(Date.now() + 1000*60*60*24*20).toISOString(), image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
  { id: "p4", businessId: "b4", title: "New Patient Special", description: "Get a cleaning + X-rays at a discounted rate.", category: "Health", expiresAt: new Date(Date.now() - 1000*60*60*24*2).toISOString(), image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
];
