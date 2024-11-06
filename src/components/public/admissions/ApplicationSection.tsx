"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

const ApplicationSection = () => {
  return (
    <section className="py-16 bg-white" id="apply-now">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Apply?</h2>
          <p className="text-gray-600 mb-8">
            Start your journey with us today. Our application process is designed to be 
            straightforward and supportive.
          </p>

          <div className="bg-gray-50 p-8 rounded-xl shadow-sm mb-8">
            <h3 className="text-xl font-semibold mb-4">Application Deadlines</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-white rounded-lg">
                <h4 className="font-medium text-primary mb-2">Early Decision</h4>
                <p className="text-gray-600">November 15, 2024</p>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <h4 className="font-medium text-primary mb-2">Regular Decision</h4>
                <p className="text-gray-600">January 15, 2025</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Link
              href="/auth/register"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg 
                hover:bg-primary-dark transition-colors"
            >
              Start Application
            </Link>
            <p className="text-sm text-gray-500">
              Already started? <Link href="/auth/login" className="text-primary hover:underline">
                Log in to continue
              </Link>
            </p>
          </div>

          <div className="mt-12 p-6 bg-blue-50 rounded-lg">
            <h3 className="text-lg font-medium mb-4">Need Help?</h3>
            <p className="text-gray-600 mb-4">
              Our admissions team is here to assist you through the application process.
            </p>
            <div className="flex justify-center gap-4">
              <a 
                href="mailto:admissions@schoolms.edu"
                className="text-primary hover:underline"
              >
                admissions@schoolms.edu
              </a>
              <span className="text-gray-300">|</span>
              <a 
                href="tel:+15551234567"
                className="text-primary hover:underline"
              >
                (555) 123-4567
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ApplicationSection; 