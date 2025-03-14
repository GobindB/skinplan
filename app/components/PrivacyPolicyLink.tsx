import Link from 'next/link';

interface PrivacyPolicyLinkProps {
  className?: string;
}

export const PrivacyPolicyLink: React.FC<PrivacyPolicyLinkProps> = ({ className = '' }) => {
  return (
    <Link 
      href="/privacy-policy" 
      className={`text-xs text-[#86604A]/60 hover:text-[#5C3D2E] hover:underline transition-colors ${className}`}
    >
      Privacy Policy
    </Link>
  );
}; 