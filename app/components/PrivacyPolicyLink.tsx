import Link from 'next/link';

interface PrivacyPolicyLinkProps {
  className?: string;
}

export const PrivacyPolicyLink: React.FC<PrivacyPolicyLinkProps> = ({ className = '' }) => {
  return (
    <Link 
      href="/privacy-policy" 
      className={`text-xs text-white/40 hover:text-white/60 hover:underline transition-colors ${className}`}
    >
      Privacy Policy
    </Link>
  );
}; 