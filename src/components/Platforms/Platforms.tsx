import React from 'react';
import { Smartphone, Monitor, Download } from 'lucide-react';

const Platforms = () => {
  return (
    <section id="platforms" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Available Everywhere</h2>
          <p className="text-xl text-gray-600">Learn on your favorite devices</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <Smartphone className="w-8 h-8 text-indigo-600 mr-3" />
              <h3 className="text-2xl font-semibold">Mobile App</h3>
            </div>
            <p className="text-gray-600 mb-6">Learn on the go with our mobile app for iOS and Android</p>
            <button className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center">
              <Download className="w-5 h-5 mr-2" />
              Download App
            </button>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <Monitor className="w-8 h-8 text-indigo-600 mr-3" />
              <h3 className="text-2xl font-semibold">Web Player</h3>
            </div>
            <p className="text-gray-600 mb-6">Access your podcasts directly from any web browser</p>
            <button className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
              Launch Web Player
            </button>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow lg:col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-6">
              <Download className="w-8 h-8 text-indigo-600 mr-3" />
              <h3 className="text-2xl font-semibold">Desktop App</h3>
            </div>
            <p className="text-gray-600 mb-6">Enhanced features with our native desktop application</p>
            <button className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
              Download for Desktop
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platforms;