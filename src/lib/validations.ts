import { z } from "zod";

// Contact form validation schema
export const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name too long"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message too long"),
});

// Business listing validation schema
export const businessListingSchema = z.object({
  name: z.string().min(1, "Business name is required").max(100, "Business name too long"),
  category: z.string().min(1, "Category is required").max(50, "Category too long"),
  location: z.string().min(1, "Location is required").max(100, "Location too long"),
  contact: z.string().min(1, "Contact is required").max(100, "Contact too long"),
  website: z.string().url("Invalid URL").optional().or(z.literal("")),
  description: z.string().min(10, "Description must be at least 10 characters").max(500, "Description too long"),
});

// Google Analytics ID validation
export const googleAnalyticsIdSchema = z.string().regex(
  /^G-[A-Z0-9]{10}$/,
  "Invalid Google Analytics ID format"
);

export type ContactFormData = z.infer<typeof contactSchema>;
export type BusinessListingData = z.infer<typeof businessListingSchema>;