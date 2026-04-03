'use client';

import { useState, useEffect } from 'react';
import { FaGithub, FaTelegram, FaVk, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const roles = ['Frontend Developer', 'React Specialist', 'Next.js Expert', 'Three.js Enthusiast'];
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const currentFullText = roles[currentRole];
    const handleTyping = () => {
      if (isDeleting) {
        setDisplayText(prev => prev.slice(0, -1));
      } else {
        setDisplayText(prev => currentFullText.slice(0, prev.length + 1));
      }
    };
    if (!isDeleting && displayText === currentFullText) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentRole(prev => (prev + 1) % roles.length);
    }
    const timer = setTimeout(handleTyping, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole, roles, mounted]);

  if (!mounted) {
    return <div className="min-h-screen bg-dark flex items-center justify-center"><div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>;
  }

  return (
    <div className="min-h-screen bg-dark text-light">
      {/* Hero секция */}
      <section id="hero" className="min-h-screen flex items-center justify-center">
        <div className="container-custom py-20 text-center">
          <p className="text-primary text-lg mb-4">Привет, я</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Арутюн <span className="text-primary">Маркосян</span>
          </h1>
          <div className="text-2xl md:text-3xl text-gray-400 mb-6">
            <span className="border-r-2 border-primary pr-1">{displayText}</span>
            <span className="animate-pulse">|</span>
          </div>
          <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
            Создаю современные веб-приложения с отличным пользовательским опытом.
            Специализируюсь на React, Next.js и 3D графике.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <a href="#contact" className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition">Связаться со мной</a>
            <a href="#projects" className="px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition">Посмотреть проекты</a>
          </div>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/Arutik228" target="_blank" className="text-2xl text-gray-400 hover:text-primary"><FaGithub /></a>
            <a href="https://t.me/Arutik52" target="_blank" className="text-2xl text-gray-400 hover:text-primary"><FaTelegram /></a>
            <a href="mailto:arutiktopcik@gmail.com" className="text-2xl text-gray-400 hover:text-primary"><FaEnvelope /></a>
          </div>
        </div>
      </section>
    </div>
  );
}