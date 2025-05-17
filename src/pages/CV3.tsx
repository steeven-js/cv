import { personalInfo, contactInfo, formations, skills, experiences } from '../data/data';

const CV3 = () => {
  return (
    <div className="w-full max-w-[700px] mx-auto bg-gray-50 border border-gray-200">
      <div className="p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b-2 border-gray-300 pb-6 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{personalInfo.name}</h1>
            <h2 className="text-xl font-medium text-blue-600 mt-1">{personalInfo.title}</h2>
          </div>
          <div className="mt-4 md:mt-0 grid grid-cols-1 gap-2">
            {contactInfo.map((contact, index) => (
              <div key={index} className="flex items-center text-gray-600 text-sm">
                <div className="w-4 h-4 mr-2">
                  <div className={contact.icon} />
                </div>
                <span>{contact.value}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Summary */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-800 mb-3 uppercase tracking-wide">Profil</h3>
          <p className="text-gray-600">{personalInfo.summary}</p>
        </div>
        
        {/* Experience */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-800 mb-3 uppercase tracking-wide">Expérience Professionnelle</h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-base font-bold text-gray-800">{exp.position}</h4>
                    <h5 className="text-base text-gray-600 italic">{exp.company}</h5>
                  </div>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">{exp.period}</span>
                </div>
                <p className="mt-2 text-gray-600 text-sm">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-3 uppercase tracking-wide">Formation</h3>
            <div className="space-y-4">
              {formations.map((formation, index) => (
                <div key={index}>
                  <div className="text-sm text-blue-600">{formation.year}</div>
                  <h4 className="text-base font-bold text-gray-800">{formation.title}</h4>
                  <p className="text-sm text-gray-600">{formation.institution}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Skills */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-3 uppercase tracking-wide">Compétences</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <h4 className="text-base font-bold text-gray-800">{skill.name}</h4>
                    <span className="text-sm text-blue-600">{skill.experience}</span>
                  </div>
                  <p className="text-sm text-gray-600">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV3;
