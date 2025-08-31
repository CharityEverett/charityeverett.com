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
        <div className="w-full h-screen relative">
          <iframe 
            src="https://my.spline.design/untitled-RTenObg6sBObco2phkTM2Yp7/" 
            frameBorder="0"
            allowFullScreen
            loading="lazy"
            width="100%" 
            height="100%"
            title="Mercator Deception 3D Gallery"
            className="w-full h-full border-0"
            sandbox="allow-scripts allow-same-origin allow-forms"
          />
          
          {/* Fallback content in case iframe doesn't load */}
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="text-center">
              <p className="text-lg mb-4">Having trouble loading the 3D gallery?</p>
              <a 
                href="https://my.spline.design/untitled-RTenObg6sBObco2phkTM2Yp7/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline pointer-events-auto"
              >
                Open in new tab
              </a>
            </div>
          </div>
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