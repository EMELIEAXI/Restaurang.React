import React from "react";

const Footer = () => {
  return (
    <footer className="Footer1">
      <div className="Footer2">
        
        {/* Kontakt */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Kontakt</h3>
          <p>🍣 Sushi Haven</p>
          <p>Storgatan 12, 111 22 Stockholm</p>
          <p>Tel: 08-123 456 78</p>
          <p>Email: info@sushihaven.se</p>
        </div>

        {/* Öppettider */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Öppettider</h3>
          <p>Mån-Fre: 11:00 - 21:00</p>
          <p>Lör-Sön: 12:00 - 22:00</p>
          <p>Takeaway & Dine-in</p>
        </div>

        {/* Sociala medier */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Följ oss</h3>
          <div className="flex flex-col gap-2">
            <a href="https://www.facebook.com/sushihaven" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href="https://www.instagram.com/sushihaven" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="https://www.twitter.com/sushihaven" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </div>
        </div>

      </div>

      <div className="mt-8 text-center text-gray-400 text-sm">
        &copy; 2025 Sushi Haven. Alla rättigheter förbehållna.
      </div>
    </footer>
  );
};

export default Footer;