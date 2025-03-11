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
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-col sm:flex-row items-stretch gap-2 w-full">
        <input
          type="email"
          placeholder="Enter your email for early access"
          className="flex-1 min-w-[300px] px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-[#FF3BFF]/50"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="px-6 py-2.5 bg-gradient-to-r from-[#FF3BFF] to-[#5C24FF] rounded-lg text-white font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
        >
          Join the Waitlist
        </button>
      </div>
      <p className="text-sm text-white/40">
        Join <span className="text-white font-medium">{waitlistCount.toLocaleString()}</span> others already signed up!
      </p>
    </div>
  );
}; 