import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="relative bg-[#FFF1E6] text-[#2C1810] overflow-hidden">
      {/* Gradient Orb */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] rounded-full bg-gradient-to-r from-[#E8C5B0] to-[#FFD6C4] opacity-[0.15] blur-[120px]" />
      </div>

      {/* Main Content */}
      <div className="relative max-w-[1200px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#E68A6C] to-[#B86B4C] flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>
              <span className="text-xl font-semibold tracking-tight text-[#2C1810]">SkinPlan</span>
            </div>
            <p className="text-[#86604A] mb-6">
              Your personalized skincare journey powered by AI. Get a tailored routine that evolves with your skin.
            </p>
            <div className="flex gap-4">
              <SocialLink
                href="#"
                icon={<TwitterIcon />}
                label="Follow us on Twitter"
              />
              <SocialLink
                href="#"
                icon={<InstagramIcon />}
                label="Follow us on Instagram"
              />
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-sm font-medium text-[#5C3D2E] mb-4">Product</h4>
              <ul className="space-y-3">
                <FooterLink href="#">Features</FooterLink>
                <FooterLink href="#">How it Works</FooterLink>
                <FooterLink href="#">Pricing</FooterLink>
                <FooterLink href="#">FAQ</FooterLink>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-[#5C3D2E] mb-4">Company</h4>
              <ul className="space-y-3">
                <FooterLink href="#">About</FooterLink>
                <FooterLink href="#">Blog</FooterLink>
                <FooterLink href="#">Careers</FooterLink>
                <FooterLink href="#">Contact</FooterLink>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-[#5C3D2E] mb-4">Legal</h4>
              <ul className="space-y-3">
                <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
                <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
                <FooterLink href="#">Security</FooterLink>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#E8C5B0]/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
              <p className="text-sm text-[#86604A]">
                © 2024 SkinPlan. All rights reserved.
              </p>
              <p className="text-sm text-[#86604A]">
                Reach us at{' '}
                <a href="mailto:support@skinplan.app" className="text-[#5C3D2E] hover:text-[#2C1810] transition-colors">
                  support@skinplan.app
                </a>
              </p>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/privacy-policy" className="text-sm text-[#86604A] hover:text-[#5C3D2E] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-sm text-[#86604A] hover:text-[#5C3D2E] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => (
  <a
    href={href}
    className="w-10 h-10 rounded-xl bg-[#E8D5C8]/30 hover:bg-[#E8D5C8]/50 border border-[#E8C5B0] flex items-center justify-center text-[#5C3D2E] hover:text-[#2C1810] transition-all"
    aria-label={label}
  >
    {icon}
  </a>
);

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <li>
    {href.startsWith('/') ? (
      <Link
        href={href}
        className="text-sm text-[#86604A] hover:text-[#5C3D2E] transition-colors"
      >
        {children}
      </Link>
    ) : (
      <a
        href={href}
        className="text-sm text-[#86604A] hover:text-[#5C3D2E] transition-colors"
      >
        {children}
      </a>
    )}
  </li>
);

const TwitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
); 