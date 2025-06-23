import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/Linkedin';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';


export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Elevation Global Property </h3>
            <p className="text-neutral-300 mb-4">
              Your trusted partner in real estate . We're committed to helping you find your dream home or sell your property with confidence.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1LQ8RP6YyY/?mibextid=wwXIfr"
                 className="text-neutral-400 hover:text-primary transition-colors duration-200">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="https://x.com/larrycypha01?s=11" className="text-neutral-400 hover:text-primary transition-colors duration-200">
                <XIcon className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/elevation_global_property_?igsh=dHQ2b2NkYnU4Z21z&utm_source=qr"
                className="text-neutral-400 hover:text-primary transition-colors duration-200">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/michael-akinsehinde-1b258b359?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                 className="text-neutral-400 hover:text-primary transition-colors duration-200">
                <LinkedInIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <span className="text-neutral-300 hover:text-white transition-colors duration-200 cursor-pointer">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="text-neutral-300 hover:text-white transition-colors duration-200 cursor-pointer">
                    About
                  </span>
                </Link>
              </li>
              <li>
                <a href="#properties" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  Properties
                </a>
              </li>
              <li>
                <a href="#services" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors duration-200">Property Sales</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors duration-200">Property Rentals</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors duration-200">Market Analysis</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors duration-200">Investment Consulting</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors duration-200">Property Management</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-neutral-300">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>16 Browning Estate Elephant and Castle <br />London, England SE17 1DE </span>

              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                <span> +44 (739) 205-6881</span>

              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>Elevationglobalproperty@gmail.com </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-700 mt-8 pt-8 text-center text-neutral-400">
          <p>&copy; 2025 Elevation Global Property. All rights reserved. | Privacy Policy | Terms of Service  | Built by  <a href="https://opeyemipauldev.webflow.io"> Opeyemi Paul </a></p>
        </div>
      </div>
    </footer>
  );
}
