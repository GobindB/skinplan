import React, { useState } from 'react';

interface EmailSignupFormProps {
  waitlistCount: number;
  onGetStarted: (email: string) => void;
}

export const EmailSignupForm: React.FC<EmailSignupFormProps> = ({ waitlistCount, onGetStarted }) => {
  const [email, setEmail] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');
    setErrorMessage('');

    // Trigger modal immediately with the email
    onGetStarted(email);

    // Handle submission in the background
    try {
      const response = await fetch('/api/submit-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to join waitlist');
      }

      setSubmitStatus('success');
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to join waitlist');
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 pr-32 focus:outline-none focus:ring-2 focus:ring-[#FF3BFF] focus:border-transparent transition-colors"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={submitStatus === 'loading' || submitStatus === 'success'}
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 rounded-lg bg-gradient-to-r from-[#FF3BFF] to-[#5C24FF] text-white text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
          disabled={submitStatus === 'loading' || submitStatus === 'success'}
        >
          {submitStatus === 'loading' ? (
            <div className="flex items-center gap-2">
              <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>...</span>
            </div>
          ) : submitStatus === 'success' ? (
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Done!</span>
            </div>
          ) : (
            'Join Now'
          )}
        </button>
      </form>
      {errorMessage && (
        <div className="mt-2 text-red-500 text-sm">{errorMessage}</div>
      )}
      <p className="mt-2 text-sm text-white/60">
        Join {waitlistCount.toLocaleString()} others on the waitlist
      </p>
    </div>
  );
}; 