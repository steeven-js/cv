import { personalInfo, contactInfo, formations, skills, experiences } from '../data/data1';

const CV2 = () => {
  return (
    <div className="w-full max-w-[612px] mx-auto bg-white">
      <div className="p-6">
        {/* Personal Info Section */}
        <div className="mb-8">
          <h1 className="text-gray-900 text-2xl font-semibold font-['Poppins']">{personalInfo.name}</h1>
          <h2 className="text-pink-500 text-xl font-semibold font-['Poppins']">{personalInfo.title}</h2>
        </div>
        
        {/* Contact Section */}
        <div className="flex flex-col sm:flex-row gap-6 mb-10">
          <div className="flex flex-col gap-2">
            {contactInfo.map((contact, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-4 h-4 relative">
                  <div className={contact.icon} />
                </div>
                <div className="text-slate-500 text-sm font-normal">{contact.value}</div>
              </div>
            ))}
          </div>
          <div className="sm:w-2/3 text-slate-500 text-sm">{personalInfo.summary}</div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            {/* Formation Section */}
            <div className="mb-8">
              <h3 className="text-gray-900 text-base font-semibold mb-3">Formation</h3>
              {formations.map((formation, index) => (
                <div key={index} className="mb-4">
                  <div className="text-purple-500 text-xs">{formation.year}</div>
                  <div className="text-slate-500 text-sm font-bold">{formation.title}</div>
                  <div className="text-slate-400 text-xs">{formation.institution}</div>
                  {index < formations.length - 1 && <div className="h-px bg-slate-200 my-2"></div>}
                </div>
              ))}
            </div>
            
            {/* Skills Section */}
            <div>
              <h3 className="text-gray-900 text-base font-semibold mb-3">Skills</h3>
              {skills.map((skill, index) => (
                <div key={index} className="mb-4">
                  <div className="flex items-center gap-2">
                    <div className="text-slate-500 text-sm font-bold">{skill.name}</div>
                    <div className="text-purple-500 text-xs">{skill.experience}</div>
                  </div>
                  <div className="text-slate-400 text-xs">{skill.description}</div>
                  {index < skills.length - 1 && <div className="h-px bg-slate-200 my-2"></div>}
                </div>
              ))}
            </div>
          </div>
          
          {/* Experience Section */}
          <div className="md:w-2/3">
            <h3 className="text-gray-900 text-base font-semibold mb-3">Experience</h3>
            {experiences.map((exp, index) => (
              <div key={index} className="mb-6">
                <div className="text-purple-500 text-xs">{exp.period}</div>
                <div className="flex items-center gap-1 my-1">
                  <div className="text-slate-500 text-sm font-bold">{exp.position}</div>
                  <div className="text-slate-400 text-sm">@{exp.company}</div>
                </div>
                <div className="text-slate-400 text-xs">{exp.description}</div>
                {index < experiences.length - 1 && <div className="h-px bg-slate-200 mt-4"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV2;
