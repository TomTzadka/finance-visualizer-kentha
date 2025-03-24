
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, isRTL } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-display font-bold text-finance-primary">Ken HaTor</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="#dashboard">{t('Dashboard', 'לוח בקרה')}</NavLink>
          {/* <NavLink href="#financing-paths">{t('Financing Paths', 'מסלולי מימון')}</NavLink> */}
          <NavLink href="#financing-options">{t('Financing options', 'מסלולי מימון')}</NavLink>
          <NavLink href="#analysis">{t('Analysis', 'ניתוח')}</NavLink>
          <Button size="sm" className="ml-4">{t('Get Started', 'התחל')}</Button>
          <LanguageSwitcher />
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden glass px-4 py-5 absolute top-full left-0 right-0 animate-fade-down">
          <nav className="flex flex-col space-y-4">
            <MobileNavLink href="#dashboard" onClick={() => setIsMenuOpen(false)}>
              {t('Dashboard', 'לוח בקרה')}
            </MobileNavLink>
            <MobileNavLink href="#financing-paths" onClick={() => setIsMenuOpen(false)}>
              {t('Financing Paths', 'מסלולי מימון')}
            </MobileNavLink>
            <MobileNavLink href="#analysis" onClick={() => setIsMenuOpen(false)}>
              {t('Analysis', 'ניתוח')}
            </MobileNavLink>
            <Button size="sm" className="mt-4 w-full">{t('Get Started', 'התחל')}</Button>
            <div className="mt-2">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <a 
      href={href}
      className="font-medium text-foreground hover:text-finance-primary transition-colors link-underline"
    >
      {children}
    </a>
  );
};

interface MobileNavLinkProps extends NavLinkProps {
  onClick?: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ href, onClick, children }) => {
  return (
    <a 
      href={href}
      onClick={onClick}
      className="block py-2 font-medium text-foreground hover:text-finance-primary"
    >
      {children}
    </a>
  );
};

export default Header;
