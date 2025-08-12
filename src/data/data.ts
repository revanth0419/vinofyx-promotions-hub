import placeholder from "/placeholder.svg";

export const categories = ["Restaurant", "Retail", "Services", "Health", "Entertainment"];
export const locations = ["New York", "San Francisco", "Chicago", "Austin", "Seattle"];

export const businesses = [
  { id: "b1", name: "Sunset Bistro", category: "Restaurant", location: "San Francisco", rating: 4.6, image: placeholder, address: "123 Market St, San Francisco, CA", phone: "+1 555-123-4567", email: "info@sunsetbistro.com", website: "https://sunsetbistro.example.com", socials: { instagram: "https://instagram.com/sunsetbistro" }, description: "Modern bistro offering seasonal cuisine and craft cocktails." },
  { id: "b2", name: "Peak Fitness", category: "Health", location: "Seattle", rating: 4.8, image: placeholder, address: "42 Pine Ave, Seattle, WA", phone: "+1 555-987-6543", email: "hello@peakfitness.com", website: "https://peakfitness.example.com", socials: { facebook: "https://facebook.com/peakfitness" }, description: "State-of-the-art gym with personal training and classes." },
  { id: "b3", name: "City Threads", category: "Retail", location: "New York", rating: 4.4, image: placeholder, address: "7th Ave, New York, NY", phone: "+1 555-222-3333", email: "shop@citythreads.com", website: "https://citythreads.example.com", socials: { twitter: "https://twitter.com/citythreads" }, description: "Trendy apparel and accessories for all." },
  { id: "b4", name: "Bright Smiles Dental", category: "Health", location: "Chicago", rating: 4.9, image: placeholder, address: "222 Lake Shore Dr, Chicago, IL", phone: "+1 555-300-1111", email: "care@brightsmiles.com", website: "https://brightsmiles.example.com", socials: {}, description: "Family dental care with a gentle touch." },
  { id: "b5", name: "FixIt Pros", category: "Services", location: "Austin", rating: 4.5, image: placeholder, address: "19 Congress Ave, Austin, TX", phone: "+1 555-445-6677", email: "support@fixitpros.com", website: "https://fixitpros.example.com", socials: {}, description: "Reliable home repairs and maintenance services." },
];

export const promotions = [
  { id: "p1", businessId: "b1", title: "2-for-1 Happy Hour", description: "Enjoy buy-one-get-one cocktails from 5-7pm.", category: "Restaurant", expiresAt: new Date(Date.now() + 1000*60*60*24*10).toISOString(), image: placeholder },
  { id: "p2", businessId: "b3", title: "Spring Sale 30% Off", description: "Save 30% on selected items.", category: "Retail", expiresAt: new Date(Date.now() + 1000*60*60*24*3).toISOString(), image: placeholder },
  { id: "p3", businessId: "b2", title: "Free Trial Week", description: "Try our gym free for 7 days.", category: "Health", expiresAt: new Date(Date.now() + 1000*60*60*24*20).toISOString(), image: placeholder },
  { id: "p4", businessId: "b4", title: "New Patient Special", description: "Get a cleaning + X-rays at a discounted rate.", category: "Health", expiresAt: new Date(Date.now() - 1000*60*60*24*2).toISOString(), image: placeholder },
];
