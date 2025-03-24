
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card py-12 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <span className="text-2xl font-display font-bold text-finance-primary">Ken HaTor</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Innovative financing solutions tailored to your specific needs.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Linkedin size={18} />} />
              <SocialLink href="#" icon={<Twitter size={18} />} />
              <SocialLink href="#" icon={<Facebook size={18} />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="#dashboard">Dashboard</FooterLink>
              <FooterLink href="#financing-paths">Financing Paths</FooterLink>
              <FooterLink href="#analysis">Analysis</FooterLink>
              <FooterLink href="#about">About Us</FooterLink>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <FooterLink href="#">Financial Analysis</FooterLink>
              <FooterLink href="#">Investment Planning</FooterLink>
              <FooterLink href="#">Mortgage Solutions</FooterLink>
              <FooterLink href="#">Business Loans</FooterLink>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin size={18} className="mr-2 text-finance-primary" />
                <span className="text-muted-foreground">123 Finance St, Business District</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-finance-primary" />
                <a href="mailto:info@kenhator.com" className="text-muted-foreground hover:text-finance-primary transition-colors">
                  info@kenhator.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-finance-primary" />
                <a href="tel:+11234567890" className="text-muted-foreground hover:text-finance-primary transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {currentYear} Ken HaTor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => {
  return (
    <li>
      <a 
        href={href}
        className="text-muted-foreground hover:text-finance-primary transition-colors"
      >
        {children}
      </a>
    </li>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => {
  return (
    <a 
      href={href}
      className="h-8 w-8 flex items-center justify-center rounded-full bg-secondary hover:bg-finance-primary text-muted-foreground hover:text-white transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
};

export default Footer;
