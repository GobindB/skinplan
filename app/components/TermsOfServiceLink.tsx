import Link from 'next/link';

interface TermsOfServiceLinkProps {
  className?: string;
}

export const TermsOfServiceLink: React.FC<TermsOfServiceLinkProps> = ({ className = '' }) => {
  return (
    <Link 
      href="/terms-of-service" 
      className={`text-xs text-white/40 hover:text-white/60 hover:underline transition-colors ${className}`}
    >
      Terms of Service
    </Link>
  );
}; 