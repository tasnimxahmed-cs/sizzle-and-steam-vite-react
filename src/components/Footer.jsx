import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter, faTiktok } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-dark text-white border-t border-brand">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
        <section aria-label="Follow us on social media">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <nav className="flex justify-center space-x-6 text-xl">
            <a href="#" className="hover:text-brand transition" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="hover:text-brand transition" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="hover:text-brand transition" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="hover:text-brand transition" aria-label="TikTok">
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </nav>
        </section>
        <section aria-label="Business hours">
          <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
          <ul className="text-sm space-y-2">
            <li>Mon–Fri: 11:00 AM – 9:00 PM</li>
            <li>Sat: 12:00 PM – 10:00 PM</li>
            <li>Sun: 12:00 PM – 8:00 PM</li>
          </ul>
        </section>
      </div>
      <div className="text-center text-xs text-gray-500 mt-6 pb-6">
        &copy; 2025 Sizzle & Steam. All rights reserved.
      </div>
    </footer>
  );
}
