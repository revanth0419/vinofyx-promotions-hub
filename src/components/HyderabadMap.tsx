export const HyderabadMap = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Our Location - Hyderabad</h2>
      <div className="aspect-video rounded-lg overflow-hidden border">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.458253939987!2d78.48291857598608!3d17.3850440835005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99c5a0f2e7f7%3A0x6c2edbba04b4c1e7!2sHyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
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