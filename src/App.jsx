import { Menu, X, Mail, Phone, Instagram, Twitter, Github } from 'lucide-react';
import { useState } from 'react';
import profileImg from './assets/foto.jpg';

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [showHobbies, setShowHobbies] = useState(false);

  const skills = [
    { category: 'Web Development', items: ['HTML', 'CSS', 'JavaScript'] },
    { category: 'Backend & Programming', items: ['Python', 'Web Frameworks'] },
    { category: 'Network & Infrastructure', items: ['Mikrotik', 'Network Management'] },
    { category: 'System Administration', items: ['Arch Linux', 'Linux Administration'] },
    { category: 'AI & Machine Learning', items: ['AI Learning', 'Data Analysis'] }
  ];

  const detailedSkills = {
    'Web Development': {
      title: 'Web Development',
      fullDescription: 'I specialize in creating responsive and interactive web experiences.',
      details: [
        { skill: 'HTML5', description: 'Semantic markup and structured content for modern web applications.' },
        { skill: 'CSS3', description: 'Advanced styling, animations, and responsive design.' },
        { skill: 'JavaScript', description: 'Modern ES6 plus for dynamic functionality and interactivity.' }
      ],
      projects: ['Responsive Websites', 'Interactive Web Apps', 'Cross-browser Sites'],
      experience: 'Creating modern applications that work seamlessly across all devices.'
    },
    'Backend & Programming': {
      title: 'Backend & Programming',
      fullDescription: 'Developing powerful backend applications and scalable solutions.',
      details: [
        { skill: 'Python Core', description: 'Proficient in core Python programming with OOP principles.' },
        { skill: 'Web Frameworks', description: 'Django and Flask for building APIs and web applications.' },
        { skill: 'Database Management', description: 'SQL databases with query optimization and data modeling.' }
      ],
      projects: ['REST APIs', 'Web Applications', 'Data Processing Systems'],
      experience: 'Writing clean, maintainable code for scalable applications.'
    },
    'Network & Infrastructure': {
      title: 'Network & Infrastructure',
      fullDescription: 'Managing network infrastructure for reliability and performance.',
      details: [
        { skill: 'Mikrotik Routing', description: 'Advanced routing protocols and load balancing.' },
        { skill: 'Firewall Security', description: 'Security rules, DDoS protection, VPN setup.' },
        { skill: 'Bandwidth Management', description: 'QoS configuration and traffic optimization.' }
      ],
      projects: ['Network Design', 'Security Implementation', 'Performance Optimization'],
      experience: 'Ensuring stable and secure network environments.'
    },
    'System Administration': {
      title: 'System Administration',
      fullDescription: 'Expert in Arch Linux system administration.',
      details: [
        { skill: 'System Installation', description: 'From minimal base to production setup.' },
        { skill: 'Package Management', description: 'pacman and AUR repositories management.' },
        { skill: 'Server Configuration', description: 'Web servers, databases, and service setup.' }
      ],
      projects: ['Server Setup', 'System Optimization', 'Security Configuration'],
      experience: 'Maintaining secure and reliable Linux systems.'
    },
    'AI & Machine Learning': {
      title: 'AI & Machine Learning',
      fullDescription: 'Implementing AI and ML solutions for business challenges.',
      details: [
        { skill: 'Machine Learning', description: 'Model training with scikit-learn and TensorFlow.' },
        { skill: 'Data Analysis', description: 'Python libraries for data processing and visualization.' },
        { skill: 'AI Implementation', description: 'Predictive analytics and decision-making systems.' }
      ],
      projects: ['Data Analysis', 'Predictive Models', 'AI Solutions'],
      experience: 'Leveraging AI for innovative solutions.'
    }
  };

  const educationData = [
    { id: 1, level: 'Kindergarten (TK)', duration: 'Ages 3-5', description: 'Started educational journey with basic learning' },
    { id: 2, level: 'SDN 4 Muara Padang', duration: 'Elementary School - 6 Years', description: 'Foundation in academics and fundamentals' },
    { id: 3, level: 'SMPN 1 Muara Padang', duration: 'Junior High School - 3 Years', description: 'Developed critical thinking skills' },
    { id: 4, level: 'SMK Senopati', duration: 'Vocational High School - 3 Years', description: 'IT Specialization - Programming and Networking', current: true }
  ];

  return (
    <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 min-h-screen">
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-orange-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">
              Zakaa
            </div>
            
            <div className="hidden md:flex gap-8">
              <a href="#home" className="text-amber-900 hover:text-orange-600 transition">Home</a>
              <a href="#about" className="text-amber-900 hover:text-orange-600 transition">About</a>
              <a href="#education" className="text-amber-900 hover:text-orange-600 transition">Education</a>
              <a href="#skills" className="text-amber-900 hover:text-orange-600 transition">Skills</a>
              <a href="#contact" className="text-amber-900 hover:text-orange-600 transition">Contact</a>
            </div>

            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {menuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <a href="#home" className="block text-amber-900 hover:text-orange-600 py-2">Home</a>
              <a href="#about" className="block text-amber-900 hover:text-orange-600 py-2">About</a>
              <a href="#education" className="block text-amber-900 hover:text-orange-600 py-2">Education</a>
              <a href="#skills" className="block text-amber-900 hover:text-orange-600 py-2">Skills</a>
              <a href="#contact" className="block text-amber-900 hover:text-orange-600 py-2">Contact</a>
            </div>
          )}
        </div>
      </nav>

      <section id="home" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center">
          <div className="w-32 h-32 rounded-full flex items-center justify-center shadow-lg mx-auto mb-6 overflow-hidden">
            <img src={profileImg} alt="Zakaa" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-amber-900 mb-4">Zakaa</h1>
          <p className="text-xl md:text-2xl text-orange-700 font-semibold mb-6">Full Stack Developer and Network Engineer</p>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">A talented professional with expertise in web development, network engineering, and AI. Dedicated to creating innovative solutions.</p>
        </div>
      </section>

      <section id="about" className="bg-white/50 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">Hello! I am Zakaa, passionate about creating digital solutions. With experience across various tech domains, I deliver exceptional results.</p>
              <p className="text-gray-700 leading-relaxed mb-4">Expertise in front-end with HTML, CSS, JavaScript and backend with Python for robust applications.</p>
              <p className="text-gray-700 leading-relaxed">Also experienced in network infrastructure with Mikrotik, Arch Linux administration, and AI and Machine Learning exploration.</p>
            </div>
            <div className="bg-gradient-to-br from-amber-200 to-orange-200 rounded-lg p-8 shadow-md">
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-amber-900 mb-2">Main Focus</h3>
                  <p className="text-gray-700 text-sm">Web Development and Network Solutions</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-amber-900 mb-2">Philosophy</h3>
                  <p className="text-gray-700 text-sm">Simple yet powerful solutions</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-amber-900 mb-2">Target</h3>
                  <p className="text-gray-700 text-sm">Become an expert in technology</p>
                </div>
                <button onClick={() => setShowHobbies(true)} className="bg-white rounded-lg p-4 cursor-pointer hover:bg-orange-50 transition w-full text-left">
                  <h3 className="font-bold text-amber-900 mb-2">Hobbies</h3>
                  <p className="text-gray-700 text-sm">Click to explore my interests</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-12 text-center">Education Journey</h2>
          <div className="space-y-8">
            {educationData.map((edu) => (
              <div key={edu.id} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all border-l-4 border-orange-500">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {edu.id}
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-lg font-bold text-amber-900">{edu.level}</h3>
                    <p className="text-gray-600 text-sm">{edu.duration}</p>
                    <p className="text-gray-700 mt-2">{edu.description}</p>
                    {edu.current && <span className="inline-block mt-2 bg-orange-200 text-orange-900 px-2 py-1 rounded text-xs font-semibold">Current</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="bg-white/50 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-12 text-center">Skills and Expertise</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, idx) => (
              <button key={idx} onClick={() => setSelectedSkill(skill.category)} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg border-2 border-transparent hover:border-orange-300 transition-all hover:scale-105 text-left cursor-pointer">
                <h3 className="font-bold text-amber-900 text-lg mb-4">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span key={i} className="bg-gradient-to-r from-amber-200 to-orange-200 text-amber-900 px-3 py-1 rounded-full text-sm font-medium">{item}</span>
                  ))}
                </div>
                <p className="text-orange-600 text-sm font-semibold mt-4">Click to learn more</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {showHobbies && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setShowHobbies(false)}>
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 flex justify-between items-center sticky top-0">
              <h2 className="text-2xl md:text-3xl font-bold text-white">My Hobbies</h2>
              <button onClick={() => setShowHobbies(false)} className="text-white hover:bg-pink-600 p-2 rounded-lg transition"><X size={28} /></button>
            </div>
            <div className="p-6 md:p-8 space-y-6">
              <div className="border-l-4 border-orange-500 bg-orange-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-3">IoT Projects</h3>
                <p className="text-gray-700 mb-2">I am passionate about Internet of Things technology, particularly in motorcycle customization. My flagship project involves creating an advanced LED control system for the Aerox 155 motorcycle.</p>
                <p className="text-gray-700">This project allows me to manage all electrical circuits connected to LED systems through IoT technology. It represents the perfect blend of my passion for motorcycles and expertise in modern technology.</p>
              </div>

              <div className="border-l-4 border-purple-500 bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-3">Motorcycle Customization</h3>
                <p className="text-gray-700">I have a deep passion for motorcycle modification and customization. I enjoy exploring mechanical upgrades, performance enhancements, and aesthetic improvements that transform motorcycles into unique expressions of personal style and engineering excellence.</p>
              </div>

              <div className="border-l-4 border-blue-500 bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-3">Technology Customization</h3>
                <p className="text-gray-700 mb-2">My enthusiasm extends to digital technology customization including custom ROM development, Windows system optimization, and advanced system tweaking for performance enhancement.</p>
              </div>

              <div className="border-l-4 border-pink-500 bg-pink-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-3">Anime Enthusiast</h3>
                <p className="text-gray-700">I have been an avid anime enthusiast since childhood. My favorite is Doraemon, a timeless classic that has inspired many through innovative storytelling and heartwarming narratives.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedSkill && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedSkill(null)}>
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-6 flex justify-between items-center sticky top-0">
              <h2 className="text-2xl md:text-3xl font-bold text-white">{detailedSkills[selectedSkill].title}</h2>
              <button onClick={() => setSelectedSkill(null)} className="text-white hover:bg-orange-600 p-2 rounded-lg transition"><X size={28} /></button>
            </div>
            <div className="p-6 md:p-8">
              <p className="text-gray-700 text-lg leading-relaxed mb-8">{detailedSkills[selectedSkill].fullDescription}</p>
              <div className="mb-8">
                <h3 className="text-xl font-bold text-amber-900 mb-4">Detailed Expertise</h3>
                <div className="space-y-4">
                  {detailedSkills[selectedSkill].details.map((detail, idx) => (
                    <div key={idx} className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
                      <h4 className="font-semibold text-amber-900 mb-2">{detail.skill}</h4>
                      <p className="text-gray-700 text-sm">{detail.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-bold text-amber-900 mb-4">Projects</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {detailedSkills[selectedSkill].projects.map((proj, idx) => (
                    <div key={idx} className="flex items-center bg-white border-2 border-orange-200 rounded-lg p-3">
                      <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-3"></span>
                      <span className="text-gray-700 font-medium">{proj}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg p-6 border-2 border-orange-300">
                <h4 className="font-bold text-amber-900 mb-2">Experience</h4>
                <p className="text-gray-700">{detailedSkills[selectedSkill].experience}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <section id="contact" className="bg-white/50 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-12 text-center">Get In Touch</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <a href="mailto:zakaa@gmail.com" className="bg-gradient-to-br from-orange-400 to-amber-500 rounded-lg p-6 text-white hover:shadow-lg transition-all hover:-translate-y-1">
              <Mail size={32} className="mb-3" />
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <p className="text-sm">zakaa@gmail.com</p>
            </a>
            <a href="https://wa.me/6282177753318" className="bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg p-6 text-white hover:shadow-lg transition-all hover:-translate-y-1">
              <Phone size={32} className="mb-3" />
              <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
              <p className="text-sm">+62 821 7775 3318</p>
            </a>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h3 className="font-bold text-amber-900 text-lg mb-6 text-center">Follow Me</h3>
            <div className="flex justify-center gap-6 flex-wrap">
              <a href="https://instagram.com/zakaa" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-pink-400 to-purple-500 p-4 rounded-full text-white hover:shadow-lg transition-all hover:-translate-y-1">
                <Instagram size={28} />
              </a>
              <a href="https://twitter.com/zakaa" target="_blank" rel="noopener noreferrer" className="bg-sky-500 p-4 rounded-full text-white hover:shadow-lg transition-all hover:-translate-y-1">
                <Twitter size={28} />
              </a>
              <a href="https://github.com/zakaa" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-4 rounded-full text-white hover:shadow-lg transition-all hover:-translate-y-1">
                <Github size={28} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-orange-100 bg-white/30 py-6">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600">
          <p>© 2024 Zakaa. All rights reserved. Crafted with passion</p>
        </div>
      </footer>
    </div>
  );
}