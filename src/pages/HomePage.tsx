import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const cvCards = [
    { id: 1, title: 'CV 1', description: 'CV professionnel moderne', path: '/cv1' },
    { id: 2, title: 'CV 2', description: 'CV créatif pour domaine artistique', path: '/cv2' },
    { id: 3, title: 'CV 3', description: 'CV classique pour secteur traditionnel', path: '/cv3' },
  ];

  return (
    <div className="space-y-6">
      <div className="border-b pb-5">
        <h2 className="text-2xl font-bold text-gray-900">Bienvenue sur votre portfolio de CV</h2>
        <p className="mt-2 text-gray-600">Sélectionnez un CV pour l'afficher ou le modifier</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cvCards.map((card) => (
          <Link 
            key={card.id} 
            to={card.path}
            className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{card.title}</h3>
            <p className="text-gray-600 mb-4">{card.description}</p>
            <span className="inline-flex items-center text-purple-600 hover:text-purple-800">
              Voir ce CV
              <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
