// Local business images
import karachiBakeryImg from "@/assets/images/karachi-bakery.jpg";
import shilparamImg from "@/assets/images/shilparamam.jpg";
import itcKohenurImg from "@/assets/images/itc-kohenur.jpg";
import realEstateOfficeImg from "@/assets/images/real-estate-office.jpg";
import wellnessSpaImg from "@/assets/images/wellness-spa.jpg";
import eventVenueImg from "@/assets/images/event-venue.jpg";
import fitnessGymImg from "@/assets/images/fitness-gym.jpg";
import placeholderImg from "@/assets/images/placeholder.jpg";

export const categories = ["Restaurant", "Real Estate", "Shopping", "Hotel", "Wellness", "Events", "Fitness", "Other"];
export const locations = ["Hyderabad, India"];

export const businesses = [
  { id: "b1", name: "Karachi Bakery", category: "Restaurant", location: "Hyderabad, India", rating: 4.7, image: karachiBakeryImg, address: "Banjara Hills, Hyderabad, Telangana", phone: "+91 98765-43210", email: "info@karachibakery.com", website: "https://karachibakery.example.com", socials: {}, description: "Famous bakery in Hyderabad known for authentic biscuits and sweets. Serving traditional Indian sweets and snacks since 1953." },
  { id: "b2", name: "Shilparamam", category: "Shopping", location: "Hyderabad, India", rating: 4.6, image: shilparamImg, address: "HITEC City, Hyderabad, Telangana", phone: "+91 91234-56789", email: "info@shilparamam.com", website: "https://shilparamam.example.com", socials: {}, description: "Cultural and crafts village showcasing traditional Indian art and handicrafts. Experience the rich heritage of Telangana through authentic crafts and cultural performances." },
  { id: "b3", name: "ITC Kohenur", category: "Hotel", location: "Hyderabad, India", rating: 4.8, image: itcKohenurImg, address: "Kondapur, Hyderabad, Telangana", phone: "+91 99887-66554", email: "info@itckohenur.com", website: "https://itckohenur.example.com", socials: {}, description: "Luxury hotel in Hyderabad with world-class amenities and services. Features premium dining, spa facilities, and state-of-the-art conference rooms." },
  { id: "b4", name: "Prime Properties", category: "Real Estate", location: "Hyderabad, India", rating: 4.5, image: realEstateOfficeImg, address: "Jubilee Hills, Hyderabad, Telangana", phone: "+91 98123-45678", email: "info@primeproperties.com", website: "https://primeproperties.example.com", socials: {}, description: "Leading real estate agency in Hyderabad specializing in premium residential and commercial properties. Trusted by thousands of families for their dream homes." },
  { id: "b5", name: "Serenity Wellness Spa", category: "Wellness", location: "Hyderabad, India", rating: 4.7, image: wellnessSpaImg, address: "Banjara Hills, Hyderabad, Telangana", phone: "+91 97654-32109", email: "info@serenityspa.com", website: "https://serenityspa.example.com", socials: {}, description: "Luxury wellness spa offering traditional Ayurvedic treatments and modern wellness therapies. Rejuvenate your mind, body, and soul in our serene environment." },
  { id: "b6", name: "Grand Celebrations", category: "Events", location: "Hyderabad, India", rating: 4.6, image: eventVenueImg, address: "Gachibowli, Hyderabad, Telangana", phone: "+91 98765-11223", email: "info@grandcelebrations.com", website: "https://grandcelebrations.example.com", socials: {}, description: "Premier event venue for weddings, corporate events, and celebrations. Elegant halls with modern amenities and professional event management services." },
  { id: "b7", name: "FitZone Gym", category: "Fitness", location: "Hyderabad, India", rating: 4.4, image: fitnessGymImg, address: "Madhapur, Hyderabad, Telangana", phone: "+91 96543-21098", email: "info@fitzonegym.com", website: "https://fitzonegym.example.com", socials: {}, description: "Modern fitness center with state-of-the-art equipment and certified trainers. Offering personalized workout plans, group classes, and nutrition guidance." },
];

// Export placeholder for use in components
export { placeholderImg };

export const promotions = [
  { id: "p1", businessId: "b1", title: "2-for-1 Happy Hour", description: "Enjoy buy-one-get-one cocktails from 5-7pm.", category: "Restaurant", expiresAt: new Date(Date.now() + 1000*60*60*24*10).toISOString(), image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
  { id: "p2", businessId: "b3", title: "Spring Sale 30% Off", description: "Save 30% on selected items.", category: "Retail", expiresAt: new Date(Date.now() + 1000*60*60*24*3).toISOString(), image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
  { id: "p3", businessId: "b2", title: "Free Trial Week", description: "Try our gym free for 7 days.", category: "Health", expiresAt: new Date(Date.now() + 1000*60*60*24*20).toISOString(), image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
  { id: "p4", businessId: "b4", title: "New Patient Special", description: "Get a cleaning + X-rays at a discounted rate.", category: "Health", expiresAt: new Date(Date.now() - 1000*60*60*24*2).toISOString(), image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
];
