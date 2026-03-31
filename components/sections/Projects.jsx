'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export const projects = [
  {
    id: 1,
    title: '3D Портфолио с анимацией',
    description: 'Интерактивное портфолио с 3D сценами и анимациями на Three.js и React Three Fiber.',
    longDescription: `
      <p>Проект демонстрирует возможности Three.js в React экосистеме. Используются React Three Fiber для рендеринга 3D сцен, Drei для готовых компонентов и Framer Motion для анимаций интерфейса.</p>
      <p class="mt-4">Реализовано:</p>
      <ul class="list-disc list-inside mt-2 space-y-1">
        <li>Анимированный 3D персонаж с движениями</li>
        <li>Летающие бабочки и парящие облака</li>
        <li>Динамическое освещение и тени</li>
        <li>Интерактивное управление камерой</li>
      </ul>
    `,
    technologies: ['React', 'Three.js', 'React Three Fiber', 'Tailwind CSS'],
    image: 'https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    github: 'https://github.com/alexdev/3d-portfolio',
    demo: 'https://3d-portfolio-demo.vercel.app',
    featured: true,
  },
  {
    id: 2,
    title: 'E-commerce платформа',
    description: 'Полноценный интернет-магазин с корзиной, фильтрацией товаров и интеграцией платежей Stripe.',
    longDescription: `
      <p>Полнофункциональная e-commerce платформа с системой аутентификации, корзиной покупок, оформлением заказов и интеграцией с Stripe для приёма платежей.</p>
      <p class="mt-4">Функционал:</p>
      <ul class="list-disc list-inside mt-2 space-y-1">
        <li>Регистрация и авторизация пользователей</li>
        <li>Каталог товаров с фильтрацией по категориям</li>
        <li>Корзина покупок и оформление заказа</li>
        <li>Интеграция с Stripe для оплаты</li>
        <li>История заказов и личный кабинет</li>
      </ul>
    `,
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Prisma', 'PostgreSQL', 'Tailwind'],
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    github: 'https://github.com/alexdev/ecommerce',
    demo: 'https://ecommerce-demo.vercel.app',
    featured: true,
  },
  {
    id: 3,
    title: 'Аналитическая панель',
    description: 'Дашборд для аналитики с интерактивными графиками, таблицами и экспортом данных.',
    longDescription: `
      <p>Мощный инструмент для бизнес-аналитики с возможностью визуализации данных в виде графиков, диаграмм и таблиц. Поддержка фильтрации по датам, категориям и экспорта в CSV/PDF.</p>
      <p class="mt-4">Возможности:</p>
      <ul class="list-disc list-inside mt-2 space-y-1">
        <li>Интерактивные графики и диаграммы</li>
        <li>Фильтрация данных по дате и категориям</li>
        <li>Экспорт в CSV и PDF форматы</li>
        <li>Сохранение настроек пользователя</li>
      </ul>
    `,
    technologies: ['React', 'Recharts', 'Redux Toolkit', 'Node.js', 'MongoDB', 'Tailwind'],
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    github: 'https://github.com/alexdev/dashboard',
    demo: 'https://dashboard-demo.vercel.app',
    featured: false,
  },
  {
    id: 4,
    title: 'Социальная сеть',
    description: 'Платформа для общения с возможностью публикации постов, лайков, комментариев и чата.',
    longDescription: `
      <p>Полноценная социальная сеть с возможностью создания профиля, публикации постов, добавления комментариев и лайков. Реализован чат в реальном времени с помощью Socket.io.</p>
      <p class="mt-4">Функции:</p>
      <ul class="list-disc list-inside mt-2 space-y-1">
        <li>Создание профиля и аватара</li>
        <li>Публикация постов с изображениями</li>
        <li>Лайки и комментарии к постам</li>
        <li>Чат в реальном времени</li>
        <li>Система друзей и подписок</li>
      </ul>
    `,
    technologies: ['Next.js', 'MongoDB', 'Socket.io', 'NextAuth', 'Tailwind'],
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    github: 'https://github.com/alexdev/social-network',
    demo: 'https://social-demo.vercel.app',
    featured: false,
  },
  {
    id: 5,
    title: 'Погодное приложение',
    description: 'Приложение для отслеживания погоды с интерактивной картой и прогнозом на 7 дней.',
    longDescription: `
      <p>Современное погодное приложение с интеграцией OpenWeather API. Показывает текущую погоду, прогноз на 7 дней, интерактивную карту осадков и графики изменения температуры.</p>
      <p class="mt-4">Особенности:</p>
      <ul class="list-disc list-inside mt-2 space-y-1">
        <li>Текущая погода и прогноз на 7 дней</li>
        <li>Интерактивная карта с осадками</li>
        <li>Графики температуры и давления</li>
        <li>Поиск городов по всему миру</li>
        <li>Сохранение избранных локаций</li>
      </ul>
    `,
    technologies: ['React', 'OpenWeather API', 'Leaflet', 'Chart.js', 'Tailwind'],
    image: 'https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    github: 'https://github.com/alexdev/weather-app',
    demo: 'https://weather-demo.vercel.app',
    featured: false,
  },
  {
    id: 6,
    title: 'Генератор резюме',
    description: 'Инструмент для создания и экспорта профессиональных резюме в PDF формате.',
    longDescription: `
      <p>Удобный конструктор резюме с несколькими шаблонами, предпросмотром в реальном времени и экспортом в PDF. Все данные сохраняются в localStorage, можно редактировать и экспортировать готовое резюме одним кликом.</p>
      <p class="mt-4">Возможности:</p>
      <ul class="list-disc list-inside mt-2 space-y-1">
        <li>Несколько шаблонов резюме</li>
        <li>Предпросмотр в реальном времени</li>
        <li>Экспорт в PDF формат</li>
        <li>Сохранение данных в браузере</li>
        <li>Автозаполнение полей</li>
      </ul>
    `,
    technologies: ['Next.js', 'react-pdf', 'Tailwind', 'React Hook Form', 'Zustand'],
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    github: 'https://github.com/alexdev/resume-builder',
    demo: 'https://resume-demo.vercel.app',
    featured: true,
  },
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState('all');
  const [imagesLoaded, setImagesLoaded] = useState({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleImageLoad = (id) => {
    setImagesLoaded(prev => ({ ...prev, [id]: true }));
  };

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.featured);

  if (!mounted) {
    return (
      <section id="projects" className="py-20 bg-gray-850">
        <div className="container-custom">
          <h2 className="section-title">Мои проекты</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.slice(0, 3).map((project) => (
              <div key={project.id} className="bg-gray-800 rounded-xl overflow-hidden h-96 animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-gray-850">
      <div className="container-custom">
        <div>
          <h2 className="section-title">Мои проекты</h2>
          
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === 'all' 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              Все проекты
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === 'featured' 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              Избранное
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link href={`/projects/${project.id}`} key={project.id}>
                <div className="bg-gray-800 rounded-xl overflow-hidden card-hover cursor-pointer group h-full flex flex-col">
                  <div className="relative h-48 w-full bg-gray-700 overflow-hidden flex-shrink-0">
                    {!imagesLoaded[project.id] && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    )}
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
                        imagesLoaded[project.id] ? 'opacity-100' : 'opacity-0'
                      }`}
                      onLoad={() => handleImageLoad(project.id)}
                      onError={(e) => {
                        e.target.src = 'https://placehold.co/600x400/1e293b/3b82f6?text=' + encodeURIComponent(project.title);
                      }}
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white font-medium">Подробнее →</span>
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4 line-clamp-2 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map(tech => (
                        <span key={tech} className="skill-tag text-sm">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="skill-tag text-sm text-gray-500">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors"
                      >
                        <FaGithub /> Code
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors"
                      >
                        <FaExternalLinkAlt /> Demo
                      </a>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
