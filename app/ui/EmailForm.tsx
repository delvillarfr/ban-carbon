'use client';

import { createEmail } from './actions';
import { useState } from 'react';

export default function EmailForm({ className }: { className?: string }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function handleSubmit(formData: FormData) {
    await createEmail(formData);
    setIsSubmitted(true);
  }

  return (
    <form action={handleSubmit} className={`email ${className || ''}`}>
      <input
        type="email" placeholder="your@email.com"
        name="email" required
        className="email-field"
      />
      <button type="submit" className="email-cta">
        {isSubmitted ? '✓' : 'Get launch alert'}
      </button>
    </form>
  );
}