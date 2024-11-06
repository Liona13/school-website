"use client";

import { motion } from 'framer-motion';

const LocationSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Location
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit our campus to experience our facilities firsthand. We're conveniently 
              located in the heart of Learning City, with easy access to public transportation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Map placeholder - Replace with actual map component */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden h-[400px]">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Map will be displayed here</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Getting Here
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">By Car</h4>
                    <p className="text-gray-600">
                      Located off Main Highway, take Exit 23 and follow Education Drive.
                      Free parking available on campus.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Public Transport</h4>
                    <p className="text-gray-600">
                      Bus routes 101, 102 stop directly outside. Metro station 'Learning Center' 
                      is a 5-minute walk away.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Visiting Hours
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-600">
                    <span className="font-medium">Monday - Friday:</span> 8:00 AM - 5:00 PM
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Saturday:</span> 9:00 AM - 1:00 PM
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Sunday:</span> Closed
                  </p>
                  <p className="text-gray-500 text-sm mt-4">
                    * Please note that some facilities may have different operating hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection; 