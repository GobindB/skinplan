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
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          type="email"
          placeholder="Enter your email for early access"
          className="px-4 py-3 rounded-lg border border-slate-200 flex-grow focus:outline-none focus:ring-2 focus:ring-teal-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="px-6 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors"
        >
          Join the Waitlist
        </button>
      </form>
      <p className="text-sm text-slate-500">
        Join {waitlistCount} others already signed up!
      </p>
    </>
  );
}; 