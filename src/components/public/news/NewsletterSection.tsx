"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
      setEmail('');
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-blue-700 mb-8">
            Stay updated with the latest news, events, and announcements from our school.
          </p>

          {isSuccess ? (
            <motion.div
              className="bg-green-100 text-green-700 p-4 rounded-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <p className="font-medium">Thank you for subscribing!</p>
              <p className="text-sm mt-1">You will receive our next newsletter.</p>
            </motion.div>
          ) : (
            <motion.form
              role="form"
              onSubmit={handleSubmit}
              className="max-w-md mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => {
                    if (email && !validateEmail(email)) {
                      setError('Please enter a valid email');
                    } else {
                      setError('');
                    }
                  }}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    error ? 'border-red-300' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  disabled={isSubmitting}
                />
                {error && (
                  <p className="text-red-500 text-sm mt-1">{error}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-primary text-white py-3 rounded-lg font-medium
                  hover:bg-primary-dark transition-colors ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </motion.form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection; 