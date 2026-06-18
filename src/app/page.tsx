import Image from "next/image";
import { personalInfo, socials, skills, experiences, projects } from "../lib/data";

export default function Home() {
  return (
    <div className="min-h-screen mesh-bg relative overflow-hidden text-white font-sans selection:bg-blue-500/30">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 p-4 transition-all duration-300">
        <div className="max-w-5xl mx-auto glass px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-wider text-glow flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            {personalInfo.nickname.toUpperCase()}
          </h1>
          <div className="flex gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-widest"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto pt-32 pb-16 px-4 space-y-32 relative z-10">
        
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center gap-12 pt-10 min-h-[70vh] justify-center">
          <div className="flex-1 space-y-8 text-center md:text-left">
            <div className="inline-block glass px-4 py-1.5 rounded-full text-blue-400 text-sm font-semibold tracking-widest mb-2 border-blue-500/30">
              AVAILABLE FOR HIRE
            </div>
            <h2 className="text-5xl md:text-7xl font-extrabold text-glow tracking-tight leading-tight">
              {personalInfo.name.split(" ").slice(0, 2).join(" ")} <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {personalInfo.name.split(" ").slice(2).join(" ")}
              </span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-medium text-gray-300">
              {personalInfo.title}
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              {personalInfo.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a href="#projects" className="glass px-8 py-4 font-semibold hover:bg-white/10 transition-all text-center">
                Explore Work
              </a>
              <a href={`mailto:${personalInfo.email}`} className="glass px-8 py-4 font-semibold border-blue-500/50 hover:bg-blue-500/20 transition-all text-center flex items-center justify-center gap-2">
                <span>Let's Connect</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
            </div>
          </div>
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-[2rem] glass p-2 flex-shrink-0 rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="w-full h-full rounded-[1.8rem] overflow-hidden relative bg-gradient-to-br from-blue-500/20 to-purple-500/20">
              <Image 
                src="/profile.png" 
                alt="Profile Photo" 
                fill 
                className="object-cover object-center mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                priority
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="glass-card p-10 md:p-14 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/20 transition-colors duration-700"></div>
          <h2 className="text-3xl font-bold mb-6 text-glow flex items-center gap-4">
            <span className="text-blue-400">01.</span> About Me
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed md:text-xl md:leading-loose">
            {personalInfo.bio}
          </p>
        </section>

        {/* Skills Section */}
        <section className="space-y-10">
          <h2 className="text-3xl font-bold text-glow flex items-center gap-4">
            <span className="text-purple-400">02.</span> Tech Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="glass-card p-6 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-4 font-semibold">{category.replace(/_/g, ' ')}</h3>
                <div className="flex flex-wrap justify-center gap-2 mt-auto">
                  {items.map(item => (
                    <span key={item} className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded-md text-gray-200">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Grid */}
        <section id="projects" className="space-y-10">
          <h2 className="text-3xl font-bold text-glow flex items-center gap-4">
            <span className="text-blue-400">03.</span> Featured Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="glass-card p-8 group flex flex-col h-full hover:border-blue-500/30 transition-colors">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-blue-400 text-sm font-semibold tracking-widest px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
                    {project.category}
                  </div>
                  <a href={project.link} className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <div className="text-gray-300 text-sm mb-4 font-medium">{project.role} | {project.period}</div>
                <p className="text-gray-400 mb-8 flex-1 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map(tech => (
                    <span key={tech} className="text-xs px-3 py-1 bg-white/5 rounded-full border border-white/5 text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="glass-card p-10 md:p-14">
          <h2 className="text-3xl font-bold mb-12 text-glow flex items-center gap-4">
            <span className="text-purple-400">04.</span> Experience
          </h2>
          <div className="space-y-12 border-l-2 border-white/10 ml-4 md:ml-0 md:border-l-0 relative md:before:absolute md:before:inset-0 md:before:mx-auto md:before:w-[2px] md:before:bg-gradient-to-b md:before:from-transparent md:before:via-white/20 md:before:to-transparent">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-8 md:pl-0 flex flex-col md:flex-row items-center justify-between group">
                <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] border-4 border-black z-10"></div>
                <div className="w-full md:w-[45%] glass p-8 rounded-2xl border border-white/10 group-hover:border-blue-500/50 transition-all duration-300 group-even:md:ml-auto group-odd:md:mr-auto">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                    <h3 className="font-bold text-xl text-white">{exp.role}</h3>
                    <span className="text-sm font-medium text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full w-fit">{exp.period}</span>
                  </div>
                  <div className="text-gray-300 font-medium mb-4 text-lg">{exp.company}</div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map(t => (
                      <span key={t} className="text-xs px-3 py-1 bg-white/5 rounded-full border border-white/10 text-gray-300">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
      
      <footer className="glass border-t border-white/10 mt-20 py-10 text-center text-gray-500 relative z-10">
        <p className="mb-2">Crafted with Next.js & Tailwind CSS</p>
        <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}
