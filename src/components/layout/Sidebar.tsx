import { Link, useLocation } from 'react-router-dom';

// Définir les liens de navigation pour les différents CV
const cvLinks = [
  { name: 'CV 1', path: '/cv1' },
  { name: 'CV 2', path: '/cv2' },
  { name: 'CV 3', path: '/cv3' },
  { name: 'CV 4', path: '/cv4' },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-64 bg-white shadow-md">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">Mon Portfolio</h1>
      </div>
      <nav className="mt-6">
        <ul>
          <li className="px-6 py-3">
            <Link 
              to="/" 
              className={`flex items-center text-gray-700 ${location.pathname === '/' ? 'font-bold text-purple-500' : 'hover:text-purple-500'}`}
            >
              <span className="ml-2">Accueil</span>
            </Link>
          </li>
          <li className="px-6 py-1">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mt-4 mb-2">
              Mes CV
            </div>
            <ul>
              {cvLinks.map((link) => (
                <li key={link.path} className="mb-2">
                  <Link
                    to={link.path}
                    className={`flex items-center py-2 px-4 rounded-md ${
                      location.pathname === link.path
                        ? 'bg-purple-100 text-purple-500 font-medium'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
