import React from 'react';

const MercatorGallery: React.FC = () => {
  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Header Section */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-cinzel font-light tracking-[0.2em] text-white mb-8">
            MERCATOR DECEPTION GALLERY
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
            An immersive exploration of cartographic perception and the hidden biases within our understanding of global geography.
          </p>
        </div>
      </section>

      {/* 3D Gallery Section */}
      <section className="flex-1 min-h-screen bg-black">
        <div className="w-full h-screen">
          <iframe 
            src="https://my.spline.design/untitled-RTenObg6sBObco2phkTM2Yp7/" 
            frameBorder="0" 
            width="100%" 
            height="100%"
            title="Mercator Deception 3D Gallery"
            className="w-full h-full"
          />
        </div>
      </section>

      {/* Description Section */}
      <section className="bg-white text-gray-900 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 text-lg leading-relaxed">
            <p>
              The Mercator projection, while revolutionary for navigation, fundamentally distorts our perception of the world. 
              This interactive gallery reveals how cartographic choices shape our understanding of scale, importance, and global relationships.
            </p>
            
            <p>
              Through immersive 3D visualization, we explore the hidden biases embedded in the maps we've grown to accept as truth, 
              challenging viewers to reconsider their spatial understanding of our planet.
            </p>
            
            <p className="text-gray-600 italic">
              Navigate through the 3D space above to discover how different projections reveal different truths about our world.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MercatorGallery;