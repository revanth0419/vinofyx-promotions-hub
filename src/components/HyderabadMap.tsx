export const HyderabadMap = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Our Location - Hyderabad</h2>
      <div className="aspect-video rounded-lg overflow-hidden border">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160464795!2d78.24323170754395!3d17.41279267117763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
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