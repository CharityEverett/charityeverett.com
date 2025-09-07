import React, { useState } from 'react';
import { Paperclip } from 'lucide-react';
import { supabase } from '../lib/supabase';

const HomePage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subscribe: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });
      
      if (!error && data?.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          message: '',
          subscribe: false
        });
      } else {
        setSubmitStatus('error');
        console.error('Email sending error:', error);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-start justify-center px-6 pt-24 pb-12 bg-cover bg-center bg-no-repeat relative"
        style={{ 
          backgroundImage: 'url(/Mercator_Deception_Full.png)',
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left max-w-3xl relative z-10 pt-8">
            <h1 className="text-2xl md:text-3xl font-cinzel font-light tracking-[0.3em] text-white mb-8 lg:mb-12">
              CHARITY EVERETT
            </h1>
            
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-cinzel font-light text-white mb-8 lg:mb-12 leading-tight text-left">
              CARTOGRAPHIC<br />
              PRESTIDIGATION: GOLD-MENDED<br />
              ATLAS
            </h2>
            
            <p className="text-lg md:text-xl text-black mb-8 lg:mb-12 font-light leading-relaxed max-w-2xl text-left">
            </p>
            
            <p className="text-lg md:text-xl text-white mb-8 lg:mb-12 font-light leading-relaxed max-w-2xl text-left">
              Remapping perception: gold-mended wood, lived craft, future vision.
            </p>
            
            <button 
              onClick={scrollToContact}
              className="bg-white text-gray-900 px-10 py-4 rounded-full text-sm tracking-[0.2em] font-medium hover:bg-gray-50 transition-colors duration-300 shadow-lg cursor-pointer"
            >
              ENTER THE SPACE OF REPAIR
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* Content */}
          <div className="flex-1 max-w-3xl">
            <h3 className="text-3xl md:text-4xl font-light mb-8 text-center lg:text-left">
              Gold-Mended Perception: Repair as Function
            </h3>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Every element of my practice is an argument for repair; not just of objects, but of habits of seeing. I build functional sculpture at the intersection of woodcraft, kintsugi, and immersive design: physical works that serve, assemble, and provoke as much as they adorn. My methods are rooted in studio furniture and high craft, but I intentionally fracture, mend, and overlay these forms to confront inherited distortions; be those in a map's projection or in collective memory.
              </p>
              
              <p>
                My art is not passive. Wall-mounted reliefs, charging stations, and wearable components are crafted for touch, activation, and sustained public use. The act of repair, inspired by kintsugi, is literal and conceptual. Gold seams map not just broken wood but a strategy for confronting privilege, rewriting history, and reflecting on what collective restoration means today. I design these works as environments: participants use their hands, don elements, and inhabit spatial overlays; always encountering both rupture and restoration in real time.
              </p>
            </div>
          </div>
          
          {/* Portrait */}
          <div className="flex-shrink-0 order-first lg:order-last">
            <div className="w-80 h-96 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="/CharityPhoto.jpg" 
                alt="Charity Everett" 
                className="w-full h-full object-cover transform rotate-180"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ACC Membership Section */}
      <section className="bg-white text-gray-900 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex-1 max-w-4xl mx-auto text-center">
            {/* ACC Logo */}
            <div className="mb-12">
              <img 
                src="/ACC Logo.png" 
                alt="American Craft Council Logo" 
                className="w-full max-w-md mx-auto object-contain"
              />
            </div>
            
            {/* Content */}
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed text-center">
              <p>
                As part of my commitment to advancing the field of contemporary craft, I am a member of the American Craft Council (ACC). The ACC is a nationally recognized organization dedicated to supporting artists who demonstrate excellence in material innovation, technique, and conceptual development across diverse media. Membership provides access to a network of leading makers, curators, and collectors and reflects a professional engagement with the broader craft and fine art community.
              </p>
              
              <p>
                This affiliation situates my studio practice; combining artisan woodworking, kintsugi restoration, and XR technology within a dynamic context of makers and thinkers shaping the future of collectible craft. Being part of the ACC supports my participation in juried exhibitions, professional opportunities, and critical discourse essential for artists seeking an international presence and the highest standards of craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="bg-black text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex-1 max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <img 
                src="/ODL Logo.png" 
                alt="MIT ODL Logo" 
                className="w-full max-w-md mx-auto object-contain"
              />
            </div>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Recipient of a prestigious Fellowship at MIT, where I advanced research and innovation at the intersection of fine craft, artisan woodwork, and extended reality (XR). This experience deepened my exploration of material transformation and technology integration, positioning my studio practice within a global context of creative leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Presentations & Achievements Ticker */}
      <section className="bg-white text-gray-900 py-16 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light text-center mb-12 tracking-[0.2em] text-gray-900">SELECTED PRESENTATIONS & ACHIEVEMENTS</h2>
          
          {/* Scrolling Ticker */}
          <div className="relative">
            <div className="flex animate-scroll space-x-8">
              {/* First set of items */}
              <div className="flex-shrink-0 text-center">
                <div className="w-48 h-32 bg-gray-100 rounded-lg overflow-hidden mb-3 shadow-lg">
                  <img 
                    src="/HA Pic Edited.jpg" 
                    alt="Harvard Semitic Museum" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-sm font-medium mb-1">MIT Hacking Arts</h3>
                <p className="text-xs text-gray-600">Wood Craft Art Showing</p>
              </div>
              
              <div className="flex-shrink-0 text-center">
                <div className="w-48 h-32 bg-gray-100 rounded-lg overflow-hidden mb-3 shadow-lg">
                  <img 
                    src="/PicsArt_02-04-06.00.06 (2).jpg" 
                    alt="Game Developer's Conference" 
                    className="w-full h-full object-cover transform rotate-180"
                  />
                </div>
                <h3 className="text-sm font-medium mb-1">Harvard Semitic Museum</h3>
                <p className="text-xs text-gray-600">Consulted on Augmentation of Bas Reliefs</p>
              </div>
              
              <div className="flex-shrink-0 text-center">
                <div className="w-48 h-32 bg-gray-100 rounded-lg overflow-hidden mb-3 shadow-lg">
                  <img 
                    src="/Announcement with Times.png" 
                    alt="MIT Hacking Arts" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-sm font-medium mb-1">Institute of Contemporary Art</h3>
                <p className="text-xs text-gray-600">Pop Up</p>
              </div>
              
              <div className="flex-shrink-0 text-center">
                <div className="w-48 h-32 bg-gray-100 rounded-lg overflow-hidden mb-3 shadow-lg">
                  <img 
                    src="/Who Am I.jpg" 
                    alt="IDEA New Rochelle" 
                    className="w-full h-full object-cover transform rotate-180"
                  />
                </div>
                <h3 className="text-sm font-medium mb-1">Institute of Contemporary Art</h3>
                <p className="text-xs text-gray-600">Artist Talk</p>
              </div>
              
              <div className="flex-shrink-0 text-center">
                <div className="w-48 h-32 bg-gray-100 rounded-lg overflow-hidden mb-3 shadow-lg">
                  <img 
                    src="/Screenshot_20181026-235001_Instagram.jpg" 
                    alt="AR in Action @MIT Media Lab" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-sm font-medium mb-1">AR in Action @MIT Media Lab</h3>
                <p className="text-xs text-gray-600">Panel on Art and Design</p>
              </div>
              
              <div className="flex-shrink-0 text-center">
                <div className="w-48 h-32 bg-gray-100 rounded-lg overflow-hidden mb-3 shadow-lg">
                  <img 
                    src="/IDEA_WINGER-BEARSKIN.003.jpeg" 
                    alt="Futurist in Residence" 
                    className="w-full h-full object-cover transform rotate-180"
                  />
                </div>
                <h3 className="text-sm font-medium mb-1">Futurist in Residence</h3>
                <p className="text-xs text-gray-600">Innovation Program</p>
              </div>
              
              <div className="flex-shrink-0 text-center">
                <div className="w-48 h-32 bg-gray-100 rounded-lg overflow-hidden mb-3 shadow-lg">
                  <img 
                    src="/Rising Star Prize.png" 
                    alt="Rising Star Prize Winner" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-sm font-medium mb-1">Rising Star Prize Winner</h3>
                <p className="text-xs text-gray-600">Virtual World Society</p>
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex-shrink-0 text-center">
                <div className="w-48 h-32 bg-gray-100 rounded-lg overflow-hidden mb-3 shadow-lg">
                  <img 
                    src="/HA Pic Edited.jpg" 
                    alt="Harvard Semitic Museum" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-sm font-medium mb-1">MIT Hacking Arts</h3>
                <p className="text-xs text-gray-600">Wood Craft Art Showing</p>
              </div>
              
              <div className="flex-shrink-0 text-center">
                <div className="w-48 h-32 bg-gray-100 rounded-lg overflow-hidden mb-3 shadow-lg">
                  <img 
                    src="/PicsArt_02-04-06.00.06 (2).jpg" 
                    alt="Game Developer's Conference" 
                    className="w-full h-full object-cover transform rotate-180"
                  />
                </div>
                <h3 className="text-sm font-medium mb-1">Harvard Semitic Museum</h3>
                <p className="text-xs text-gray-600">Consulted on Augmentation of Bas Reliefs</p>
              </div>
              
              <div className="flex-shrink-0 text-center">
                <div className="w-48 h-32 bg-gray-100 rounded-lg overflow-hidden mb-3 shadow-lg">
                  <img 
                    src="/Announcement with Times.png" 
                    alt="MIT Hacking Arts" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-sm font-medium mb-1">Institute of Contemporary Art</h3>
                <p className="text-xs text-gray-600">Pop Up</p>
              </div>
              
              <div className="flex-shrink-0 text-center">
                <div className="w-48 h-32 bg-gray-100 rounded-lg overflow-hidden mb-3 shadow-lg">
                  <img 
                    src="/Who Am I.jpg" 
                    alt="IDEA New Rochelle" 
                    className="w-full h-full object-cover transform rotate-180"
                  />
                </div>
                <h3 className="text-sm font-medium mb-1">Institute of Contemporary Art</h3>
                <p className="text-xs text-gray-600">Artist Talk</p>
              </div>
              
              <div className="flex-shrink-0 text-center">
                <div className="w-48 h-32 bg-gray-100 rounded-lg overflow-hidden mb-3 shadow-lg">
                  <img 
                    src="/Screenshot_20181026-235001_Instagram.jpg" 
                    alt="AR in Action @MIT Media Lab" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-sm font-medium mb-1">AR in Action @MIT Media Lab</h3>
                <p className="text-xs text-gray-600">Panel on Art and Design</p>
              </div>
              
              <div className="flex-shrink-0 text-center">
                <div className="w-48 h-32 bg-gray-100 rounded-lg overflow-hidden mb-3 shadow-lg">
                  <img 
                    src="/IDEA_WINGER-BEARSKIN.003.jpeg" 
                    alt="Futurist in Residence" 
                    className="w-full h-full object-cover transform rotate-180"
                  />
                </div>
                <h3 className="text-sm font-medium mb-1">Futurist in Residence</h3>
                <p className="text-xs text-gray-600">Innovation Program</p>
              </div>
              
              <div className="flex-shrink-0 text-center">
                <div className="w-48 h-32 bg-gray-100 rounded-lg overflow-hidden mb-3 shadow-lg">
                  <img 
                    src="/Rising Star Prize.png" 
                    alt="Rising Star Prize Winner" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-sm font-medium mb-1">Rising Star Prize Winner - Virtual World Society</h3>
                <p className="text-xs text-gray-600"></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;