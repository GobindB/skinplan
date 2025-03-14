import Link from 'next/link';

interface TermsOfServiceLinkProps {
  className?: string;
}

export const TermsOfServiceLink: React.FC<TermsOfServiceLinkProps> = ({ className = '' }) => {
  return (
    <Link 
      href="/terms-of-service" 
      className={`text-xs text-[#86604A]/60 hover:text-[#5C3D2E] hover:underline transition-colors ${className}`}
    >
      Terms of Service
    </Link>
  );
}; 