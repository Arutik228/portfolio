'use client';

import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaInfoCircle } from 'react-icons/fa';

// Данные проектов
const projects = [
  {
    id: 1,
    title: '3D Портфолио',
    description: 'Интерактивное 3D портфолио с анимациями на Three.js',
    longDescription: 'Проект демонстрирует возможности Three.js в React экосистеме. Используются React Three Fiber для рендеринга 3D сцен, Drei для готовых компонентов и Framer Motion для анимаций интерфейса.',
    technologies: ['React', 'Three.js', 'React Three Fiber', 'Tailwind CSS'],
    image: 'https://github.com/ladunjexa/reactjs18-3d-portfolio/blob/main/.github/README_ASSETS/3d-portfolio.png?raw=true',
    github: 'https://github.com/ladunjexa/reactjs18-3d-portfolio',
    demo: 'https://3d-portfolio-demo.vercel.app',
  },
  {
    id: 2,
    title: 'E-commerce платформа',
    description: 'Полноценный интернет-магазин с корзиной и оплатой Stripe',
    longDescription: 'Полнофункциональная e-commerce платформа с системой аутентификации, корзиной покупок, оформлением заказов и интеграцией с Stripe для приёма платежей.',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Prisma', 'PostgreSQL', 'Tailwind'],
    image: 'https://user-images.githubusercontent.com/59404615/208036926-a4863d53-8c29-43cd-9da4-8fbd99eb6909.png',
    github: 'https://github.com/andrewtch88/mvc-ecommerce',
    demo: 'https://ecommerce-demo.vercel.app',
  },
  {
    id: 3,
    title: 'Аналитическая панель',
    description: 'Дашборд для аналитики с графиками и экспортом данных',
    longDescription: 'Мощный инструмент для бизнес-аналитики с возможностью визуализации данных в виде графиков, диаграмм и таблиц.',
    technologies: ['React', 'Recharts', 'Redux Toolkit', 'Node.js', 'MongoDB', 'Tailwind'],
    image: 'https://marketplace-screenshots.githubusercontent.com/github-production-marketplace-screenshot-16aed3/10206/dc999f6a-f191-4fc3-b299-d1cfdda85da6?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260328%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260328T082746Z&X-Amz-Expires=300&X-Amz-Signature=54db0a5be6f15b121749d90314fa1b3202b408564574aaa8a93ddf2fb24e272d&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9tYXJrZXRwbGFjZS1zY3JlZW5zaG90cy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc3NDY4Njc2NiwibmJmIjoxNzc0Njg2NDY2LCJwYXRoIjoibWFya2V0cGxhY2Utc2NyZWVuc2hvdHMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.6TZQTf2CMmSSlWQhgNvlW56_DunmV3GfV4FkF_6hQKE&response-content-disposition=attachment%3Bfilename%3DCleanShot.2024-03-13.at.11.30.24.png&response-content-type=image%2Fpng',
    github: 'https://github.com/marketplace/analytics-reports',
    demo: 'https://dashboard-demo.vercel.app',
  },
  {
    id: 4,
    title: 'Социальная сеть',
    description: 'Платформа для общения и обмена контентом',
    longDescription: 'Полноценная социальная сеть с возможностью создания профиля, публикации постов, добавления комментариев и лайков.',
    technologies: ['Next.js', 'MongoDB', 'Socket.io', 'NextAuth', 'Tailwind'],
    image: 'https://camo.githubusercontent.com/9ad58694510891cef6154fb7a37de7ef2ea6a5275ff810c754dbc9c2fcb3abbe/68747470733a2f2f7261772e6769746875622e636f6d2f706162726167696e2f536f6369616c4e65742f6d61737465722f696d616765732f6661696c626f6f6b2e706e67',
    github: 'https://github.com/pabragin/SocialNet',
    demo: 'https://social-demo.vercel.app',
  },
  {
    id: 5,
    title: 'Погодное приложение',
    description: 'Приложение для отслеживания погоды с картой и прогнозом',
    longDescription: 'Современное погодное приложение с интеграцией OpenWeather API.',
    technologies: ['React', 'OpenWeather API', 'Leaflet', 'Chart.js', 'Tailwind'],
    image: 'https://github.com/darkmoonight/Rain/blob/main/readme/1.png?raw=true',
    github: 'https://github.com/darkmoonight/Rain',
    demo: 'https://weather-demo.vercel.app',
  },
  {
    id: 6,
    title: 'Генератор резюме',
    description: 'Инструмент для создания и экспорта резюме в PDF',
    longDescription: 'Удобный конструктор резюме с несколькими шаблонами, предпросмотром в реальном времени и экспортом в PDF.',
    technologies: ['Next.js', 'react-pdf', 'Tailwind', 'React Hook Form', 'Zustand'],
    image: 'https://github.com/amruthpillai/reactive-resume/blob/main/public/templates/jpg/azurill.jpg?raw=true',
    github: 'https://github.com/amruthpillai/reactive-resume',
    demo: 'https://resume-demo.vercel.app',
  },
];

export default function ProjectPage() {
  const params = useParams();
  const projectId = parseInt(params.id);
  const project = projects.find(p => p.id === projectId);
  const [mounted, setMounted] = useState(false);
  const [imageDimensions, setImageDimensions] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Загружаем размеры изображения
  useEffect(() => {
    if (project?.image) {
      const img = new Image();
      img.onload = () => {
        setImageDimensions({ width: img.width, height: img.height });
      };
      img.src = project.image;
    }
  }, [project?.image]);

  if (!project) {
    return (
      <div className="min-h-screen bg-dark pt-24 pb-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-gray-400 mb-8">Проект не найден</p>
          <Link href="/#projects" className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition">
            Вернуться к проектам
          </Link>
        </div>
      </div>
    );
  }

  if (!mounted) {
    return (
      <div className="min-h-screen bg-dark pt-24 pb-16">
        <div className="container-custom">
          <div className="h-10 w-32 bg-gray-700 rounded animate-pulse mb-8"></div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="h-96 bg-gray-700 rounded-xl animate-pulse"></div>
            <div className="space-y-6">
              <div className="h-12 w-3/4 bg-gray-700 rounded animate-pulse"></div>
              <div className="h-6 w-full bg-gray-700 rounded animate-pulse"></div>
              <div className="h-6 w-2/3 bg-gray-700 rounded animate-pulse"></div>
              <div className="h-20 w-full bg-gray-700 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Автоматическое определение высоты изображения на основе его пропорций
  const imageContainerStyle = imageDimensions ? {
    aspectRatio: `${imageDimensions.width} / ${imageDimensions.height}`
  } : { aspectRatio: '16 / 9' };

  return (
    <div className="min-h-screen bg-dark pt-24 pb-16">
      <div className="container-custom">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-8">
          <FaArrowLeft /> Назад к проектам
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="relative rounded-xl overflow-hidden shadow-2xl bg-gray-800">
            <div 
              className="relative w-full overflow-hidden"
              style={imageContainerStyle}
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://placehold.co/800x500/1e293b/3b82f6?text=' + encodeURIComponent(project.title);
                }}
              />
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
            <p className="text-xl text-gray-400">{project.description}</p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-gray-800 rounded-lg hover:bg-primary transition-colors">
                <FaGithub /> GitHub репозиторий
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-primary rounded-lg hover:bg-primary/80 transition-colors">
                <FaExternalLinkAlt /> Живая демо
              </a>
            </div>

            <div className="pt-6 border-t border-gray-800">
              <h2 className="text-2xl font-bold mb-4">Технологии</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-gray-700 rounded-full text-sm hover:bg-primary transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-gray-800">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <FaInfoCircle className="text-primary" /> О проекте
              </h2>
              <p className="text-gray-300 leading-relaxed">{project.longDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
