import React from 'react';
import { 
  personalInfoCV4, 
  contactInfoCV4, 
  skillsCV4, 
  experiencesCV4, 
  formationsCV4, 
  softSkillsCV4,
  contextCV4,
  languesCV4
} from '../data/data4';
import CV4PDF from '../components/pdf/CV4PDF';

const CV4: React.FC = () => {
  return (
    <div className="w-full max-w-[21cm] min-h-[29.7cm] mx-auto bg-white border border-gray-200 shadow-lg font-sans">
      {/* Actions PDF */}
      <div className="flex justify-end p-4">
        <CV4PDF />
      </div>
      <div className="p-8">
        {/* Header */}
        <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-1">{personalInfoCV4.name}</h1>
        <h2 className="text-xl font-medium text-blue-700 mb-3">{personalInfoCV4.title}</h2>
        <p className="text-sm text-gray-700 leading-relaxed">{personalInfoCV4.summary}</p>
      </div>
      
      <hr className="my-6 border-t border-gray-300" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="md:col-span-2">
          {/* Experience */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3 uppercase border-b border-gray-200 pb-1">Expérience Professionnelle</h3>
            <div className="space-y-6">
              {experiencesCV4.map((exp, index) => (
                <div key={index} className="pl-0">
                  <div className="flex flex-col">
                    <h4 className="text-md font-bold text-blue-700">{exp.position} - {exp.company}</h4>
                    <div className="flex justify-between items-center mb-1">
                      <h5 className="text-sm italic text-gray-700">{exp.role}</h5>
                      <span className="text-xs text-gray-600 bg-gray-100 py-0.5 px-2 rounded">{exp.period}</span>
                    </div>
                  </div>
                  <ul className="mt-2 list-disc pl-5 space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-xs text-gray-700">{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          {/* Formation */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3 uppercase border-b border-gray-200 pb-1">Formation</h3>
            <div className="space-y-3">
              {formationsCV4.map((formation, index) => (
                <div key={index} className="">
                  <div className="flex justify-between items-center">
                    <h4 className="text-sm font-semibold text-gray-900">{formation.title}</h4>
                    <span className="text-xs text-gray-600">{formation.year}</span>
                  </div>
                  <p className="text-xs text-gray-700">{formation.institution}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Langues et Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 uppercase border-b border-gray-200 pb-1">Langues</h3>
              <ul className="space-y-1">
                {languesCV4.map((langue, index) => (
                  <li key={index} className="text-sm text-gray-700"><span className="font-semibold">{langue.name}:</span> {langue.level}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 uppercase border-b border-gray-200 pb-1">Contact</h3>
              <div className="flex flex-col space-y-1">
                {contactInfoCV4.map((contact, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-700">
                    <span>{contact.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="bg-gray-50 p-4 rounded-md">
          {/* Skills */}
          <h3 className="text-lg font-bold text-gray-900 mb-3 uppercase border-b border-gray-200 pb-1">Compétences Techniques</h3>
          <div className="space-y-4 mb-6">
            {skillsCV4.map((skillGroup, groupIndex) => (
              <div key={groupIndex}>
                <h4 className="text-sm font-semibold text-blue-700 mb-1">{skillGroup.category}</h4>
                <ul className="list-disc pl-4 space-y-1">
                  {skillGroup.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-xs text-gray-700">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Soft Skills */}
          <h3 className="text-lg font-bold text-gray-900 mb-3 uppercase border-b border-gray-200 pb-1">Savoir-être Professionnels</h3>
          <ul className="list-disc pl-4 space-y-1 mb-6">
            {softSkillsCV4.map((skill, index) => (
              <li key={index} className="text-xs text-gray-700">{skill}</li>
            ))}
          </ul>
          
          {/* Context */}
          <h3 className="text-lg font-bold text-gray-900 mb-3 uppercase border-b border-gray-200 pb-1">Contexte de Travail</h3>
          <ul className="list-disc pl-4 space-y-1">
            {contextCV4.map((item, index) => (
              <li key={index} className="text-xs text-gray-700">{item}</li>
            ))}
          </ul>
        </div>
      </div>
      
      <footer className="mt-8 pt-3 border-t border-gray-200 text-center text-xs text-gray-500 italic">
        Ce CV a été adapté conformément à la fiche métier M1861 - Développeur/Développeuse logiciel ou d'application.
      </footer>
      </div>
    </div>
  );
};

export default CV4;
