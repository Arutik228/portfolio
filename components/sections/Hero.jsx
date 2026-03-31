'use client';

import { useState, useEffect } from 'react';
import { FaGithub, FaTelegram, FaVk, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  const roles = ['Frontend Developer', 'React Specialist', 'Next.js Expert', 'Three.js Enthusiast'];
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [bgLoaded, setBgLoaded] = useState(false);
  const [avatarLoaded, setAvatarLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const currentFullText = roles[currentRole];
    
    const handleTyping = () => {
      if (isDeleting) {
        setDisplayText(prev => prev.slice(0, -1));
        setTypingSpeed(50);
      } else {
        setDisplayText(prev => currentFullText.slice(0, prev.length + 1));
        setTypingSpeed(100);
      }
    };

    if (!isDeleting && displayText === currentFullText) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentRole(prev => (prev + 1) % roles.length);
      setTypingSpeed(150);
    }

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole, roles, typingSpeed, mounted]);

  if (!mounted) {
    return (
      <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-dark"></div>
        <div className="container-custom py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="h-8 w-32 bg-gray-700 rounded animate-pulse mb-4"></div>
              <div className="h-16 w-3/4 bg-gray-700 rounded animate-pulse mb-6"></div>
              <div className="h-12 w-2/3 bg-gray-700 rounded animate-pulse mb-8"></div>
              <div className="h-20 w-full bg-gray-700 rounded animate-pulse"></div>
            </div>
            <div className="w-64 h-64 bg-gray-700 rounded-full animate-pulse mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Фон с реальным изображением */}
      <div className="absolute inset-0 z-0">
        {!bgLoaded && (
          <div className="absolute inset-0 bg-dark flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <img 
          src="https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Background"
          className={`w-full h-full object-cover transition-opacity duration-500 ${bgLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setBgLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/85 to-dark/70"></div>
      </div>
      
      <div className="container-custom py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary text-lg mb-4">Привет, я</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Алексей <span className="text-primary">Смирнов</span>
            </h1>
            <div className="text-2xl md:text-3xl text-gray-400 mb-6">
              <span className="border-r-2 border-primary pr-1">{displayText}</span>
              <span className="animate-pulse">|</span>
            </div>
            <p className="text-gray-300 mb-8 text-lg">
              Создаю современные веб-приложения с отличным пользовательским опытом.
              Специализируюсь на React, Next.js и 3D графике.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#contact" className="btn-primary">
                Связаться со мной
              </a>
              <a href="#projects" className="btn-outline">
                Посмотреть проекты
              </a>
            </div>
            
            <div className="flex space-x-4">
              <a href="https://github.com/alexdev" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-primary transition-colors"><FaGithub /></a>
              <a href="https://t.me/alexdev" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-primary transition-colors"><FaTelegram /></a>
              <a href="https://vk.com/alexdev" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-primary transition-colors"><FaVk /></a>
              <a href="mailto:alex@example.com" className="text-2xl text-gray-400 hover:text-primary transition-colors"><FaEnvelope /></a>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-full blur-2xl opacity-50 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                {!avatarLoaded && (
                  <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                <img 
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                  alt="Алексей Смирнов"
                  className={`w-full h-full object-cover transition-opacity duration-500 ${avatarLoaded ? 'opacity-100' : 'opacity-0'}`}
                  onLoad={() => setAvatarLoaded(true)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
