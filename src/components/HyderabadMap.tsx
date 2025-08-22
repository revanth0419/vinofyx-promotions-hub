export const HyderabadMap = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Our Location - Hyderabad</h2>
      <div className="aspect-video rounded-lg overflow-hidden border">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.1550252142597!2d78.50877721487793!3d17.517408688011112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a57eaf46bb5%3A0x6b0d43b2e3f0a32a!2sVenkateshwara%20Colony%2C%20Macha%20Bolarum%2C%20Secunderabad%2C%20Telangana%20500010!5e0!3m2!1sen!2sin!4v1692700000000!5m2!1sen!2sin"
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Hyderabad Location"
        />
      </div>
      <p className="text-muted-foreground">
        Hyderabad, the City of Pearls, is a vibrant business hub in Telangana, India. 
        Our platform connects local businesses with customers across the city.
      </p>
    </div>
  );
};