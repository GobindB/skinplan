import { PrivacyPolicyLink } from './PrivacyPolicyLink';
import { TermsOfServiceLink } from './TermsOfServiceLink';

interface LegalLinksProps {
  className?: string;
}

export const LegalLinks: React.FC<LegalLinksProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <PrivacyPolicyLink />
      <span className="text-white/20">•</span>
      <TermsOfServiceLink />
    </div>
  );
}; 