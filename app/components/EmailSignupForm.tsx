import React, { useState } from 'react';

interface EmailSignupFormProps {
  waitlistCount: number;
}

export const EmailSignupForm: React.FC<EmailSignupFormProps> = ({ waitlistCount }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return alert("Please enter an email.");

    try {
      const response = await fetch("/api/submit-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (data.success) {
        alert("Thanks for joining our waitlist! We'll be in touch soon.");
        setEmail("");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit. Please check your connection.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-4 sm:mb-6">
        <input
          type="email"
          placeholder="Enter your email for early access"
          className="px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder-white/40 flex-grow focus:outline-none focus:ring-2 focus:ring-[#FF3BFF]/50 text-sm sm:text-base"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="group relative px-6 py-3 bg-white text-[#0A0A0E] rounded-lg font-medium hover:scale-[1.02] transition-all duration-200 active:scale-[0.98] text-sm sm:text-base whitespace-nowrap"
        >
          Join the Waitlist
          <div className="absolute inset-x-0 h-full -bottom-px rounded-lg bg-gradient-to-r from-[#FF3BFF] via-[#D94DFF] to-[#5C24FF] blur-md -z-10 opacity-75 group-hover:opacity-100 transition-opacity" />
        </button>
      </form>
      <div className="flex items-center gap-2 text-white/40">
        <span className="text-xs sm:text-sm">Join</span>
        <span className="font-semibold text-white">{waitlistCount.toLocaleString('en-US')}</span>
        <span className="text-xs sm:text-sm">others already signed up!</span>
      </div>
    </>
  );
}; 