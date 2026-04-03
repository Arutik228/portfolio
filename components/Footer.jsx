import { FaGithub, FaTelegram, FaVk, FaEnvelope, FaMusic, FaFilm } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Алексей Смирнов. Все права защищены.
          </p>
          
          <div className="flex space-x-4">
            <a
              href="https://github.com/alexdev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://t.me/alexdev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <FaTelegram size={20} />
            </a>
            <a
              href="https://vk.com/alexdev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <FaVk size={20} />
            </a>
            <a
              href="https://music.yandex.ru/users/alexdev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <FaMusic size={20} />
            </a>
            <a
              href="https://www.kinopoisk.ru/user/alexdev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <FaFilm size={20} />
            </a>
            <a
              href="mailto:alex@example.com"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}