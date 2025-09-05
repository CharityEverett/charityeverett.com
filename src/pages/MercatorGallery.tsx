import React, { useEffect, useState } from 'react';
import { ExternalLink, Compass } from 'lucide-react';

const MercatorGallery: React.FC = () => {
  const [showOverlay, setShowOverlay] = useState(true);
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    if (showOverlay && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      // Automatically open Spline in new tab
      window.open('https://my.spline.design/untitled-RTenObg6sBObco2phkTM2Yp7/', '_blank');
      setShowOverlay(false);
    }
  }, [showOverlay, countdown]);

  const handleManualOpen = () => {
    window.open('https://my.spline.design/untitled-RTenObg6sBObco2phkTM2Yp7/', '_blank');
    setShowOverlay(false);
  };

  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Header Section */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-12">
            <div className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl mb-8">
              <img 
                src="/Mercator_Deception_Full.png" 
                alt="Cartographic Prestidigation Preview" 
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-cinzel font-light tracking-[0.2em] text-white mb-8">
              MERCATOR DECEPTION GALLERY
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
              An immersive exploration of cartographic perception and the hidden biases within our understanding of global geography.
            </p>
            <p className="text-lg md:text-xl text-yellow-400 font-medium leading-relaxed max-w-3xl mx-auto mt-6 tracking-[0.1em]">
              TURN ON SPEAKERS, AND CLICK WITHIN THE SPACE FOR FULL IMMERSIVE EXPERIENCE
            </p>
          </div>
        </div>
      </section>

      {/* 3D Gallery Section */}
      <section className="flex-1 min-h-screen bg-black">
        <div className="w-full h-screen relative">
          {/* Preview Image Overlay - Always visible */}
          <div className="absolute inset-0 bg-black flex items-center justify-center z-20">
            <div className="w-full h-full relative">
              <img 
                src="/Mercator_Deception_Full.png" 
                alt="Cartographic Prestidigation - Click to enter 3D Gallery" 
                className="w-full h-full object-cover cursor-pointer"
                onClick={handleManualOpen}
              />
              
              {/* Overlay content on top of image */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white max-w-md mx-auto px-6">
                  <Compass className="w-16 h-16 mx-auto mb-6 text-yellow-500 animate-spin" style={{ animationDuration: '3s' }} />
                  
                  <h3 className="text-2xl font-cinzel font-light mb-4 tracking-[0.1em]">
                    ENTER IMMERSIVE GALLERY
                  </h3>
                  
                  <p className="text-gray-200 mb-8 leading-relaxed">
                    Click anywhere to experience the full interactive 3D environment
                  </p>
                  
                  <button
                    onClick={handleManualOpen}
                    className="bg-yellow-600 hover:bg-yellow-700 text-black px-8 py-3 rounded-full text-sm tracking-[0.1em] font-medium transition-colors duration-300 flex items-center gap-2 mx-auto"
                  >
                    <ExternalLink className="w-4 h-4" />
                    ENTER GALLERY
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Overlay */}
          {showOverlay && (
            <div className="absolute inset-0 bg-black bg-opacity-95 flex items-center justify-center z-10">
              <div className="text-center text-white max-w-md mx-auto px-6">
                <Compass className="w-16 h-16 mx-auto mb-6 text-yellow-500 animate-spin" style={{ animationDuration: '3s' }} />
                
                <h3 className="text-2xl font-cinzel font-light mb-4 tracking-[0.1em]">
                  ENTERING IMMERSIVE GALLERY
                </h3>
                
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Experience the full interactive 3D environment in a dedicated window for optimal viewing and navigation.
                </p>
                
                {countdown > 0 ? (
                  <div className="mb-6">
                    <p className="text-yellow-500 text-lg mb-2">
                      Opening in {countdown} second{countdown !== 1 ? 's' : ''}...
                    </p>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-yellow-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${((3 - countdown) / 3) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ) : (
                  <p className="text-green-400 text-lg mb-6">Opening gallery...</p>
                )}
                
                <button
                  onClick={handleManualOpen}
                  className="bg-yellow-600 hover:bg-yellow-700 text-black px-8 py-3 rounded-full text-sm tracking-[0.1em] font-medium transition-colors duration-300 flex items-center gap-2 mx-auto"
                >
                  <ExternalLink className="w-4 h-4" />
                  OPEN GALLERY NOW
                </button>
                
                <button
                  onClick={() => setShowOverlay(false)}
                  className="mt-4 text-gray-400 hover:text-white text-sm underline transition-colors"
                >
                  View embedded version instead
                </button>
              </div>
            </div>
          )}
          
          <iframe 
            src={`https://my.spline.design/untitled-RTenObg6sBObco2phkTM2Yp7/?v=${Date.now()}`}
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
            
            <p className="bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-600">
              <strong>Audio Experience:</strong> Audio elements are present within the digital gallery space; click anywhere inside the environment for the full experience.
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