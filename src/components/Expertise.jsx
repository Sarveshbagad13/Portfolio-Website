import React from 'react';
import {
  FiLayers,
  FiServer,
  FiCpu,
  FiCloud,
  FiArrowRight,
} from 'react-icons/fi';

export default function Expertise() {
  const expertiseDomains = [
    {
      id: '01',
      title: 'Frontend Development',
      icon: <FiLayers />,
      description:
        'Crafting responsive, high-performance web applications and mobile-first interfaces using React, JavaScript (ES6+), and modern styling frameworks. Focused on component modularity, fluid micro-interactions, and accessible UX.',
      tags: ['React.js', 'Tailwind CSS', 'Responsive UI', 'State Management'],
      metric: 'Sub-100ms UI Renders',
    },
    {
      id: '02',
      title: 'Backend Development',
      icon: <FiServer />,
      description:
        'Architecting robust RESTful API services, role-based access control (RBAC), and server-side business logic using Node.js, Express, and FastAPI. Ensuring data integrity, password encryption, and scalable multi-user request handling.',
      tags: ['Node.js & Express', 'FastAPI', 'JWT Authentication', 'REST APIs'],
      metric: '20+ Secure Endpoints Built',
    },
    {
      id: '03',
      title: 'AI & Machine Learning (RAG)',
      icon: <FiCpu />,
      description:
        'Developing intelligent context-aware applications using LangChain, pgvector semantic search, and Hugging Face transformer models. Specializing in document summarization, legal clause extraction, and evaluation monitoring.',
      tags: ['RAG Architecture', 'pgvector Embeddings', 'LangChain', 'NLP Summarization'],
      metric: 'Hybrid Vector & Keyword Search',
    },
    {
      id: '04',
      title: 'Cloud & Database Systems',
      icon: <FiCloud />,
      description:
        'Designing optimized relational and vector database schemas across PostgreSQL, MySQL, and MongoDB. Integrating Dockerized sandboxes, automated testing suites, and reliable version-controlled deployment pipelines.',
      tags: ['PostgreSQL & MySQL', 'MongoDB', 'Docker Sandboxes', 'Git Workflows'],
      metric: 'ACID Compliance & Containerization',
    },
  ];

  return (
    <section
      id="expertise"
      className="relative min-h-screen bg-[#FBFBFA] text-slate-800 py-24 sm:py-32 overflow-hidden"
    >
      {/* Background Architectural Grid Pattern matching Projects & Skills */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(rgba(15, 23, 42, 0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15, 23, 42, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      {/* Ambient Lighting Accents */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-amber-300/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header directly matching Projects and Skills section design */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-14">
          <div>
            {/* Subtitle / Eyebrow Tag with Amber Dash */}
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-5 h-0.5 bg-[#F59E0B] rounded-full" />
              <span className="text-sm font-bold tracking-wide text-slate-600 uppercase">
                Areas of Expertise
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Building Modern <span className="text-[#F59E0B]">Digital Solutions</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-500 max-w-2xl font-normal leading-relaxed">
              Combining full-stack software engineering, artificial intelligence pipelines, and reliable cloud architectures to create scalable and impactful digital experiences.
            </p>
          </div>

          {/* Quick Pillar Badge */}
          <div className="flex items-center gap-3 flex-wrap">
            <div className="inline-flex items-center gap-2.5 bg-white border border-slate-200/90 shadow-sm px-4 py-2.5 rounded-full">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-slate-800">
                4 Core Engineering Disciplines
              </span>
            </div>
          </div>
        </div>

        {/* 2-Column Showcase Grid matching Projects Section Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {expertiseDomains.map((domain) => (
            <div
              key={domain.id}
              className="group flex flex-col justify-between bg-white rounded-[32px] sm:rounded-[38px] border border-slate-200/90 hover:border-slate-300 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_22px_50px_rgba(15,23,42,0.08)] p-7 sm:p-9 transition-all duration-500 hover:-translate-y-2"
            >
              <div>
                {/* Top Row: Icon Badge + Domain Number */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center text-2xl group-hover:scale-110 group-hover:bg-[#F59E0B] group-hover:text-slate-950 transition-all duration-300 shadow-xs">
                    {domain.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-200/70">
                    {domain.id} • DOMAIN
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight group-hover:text-amber-600 transition-colors duration-300">
                  {domain.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm sm:text-base text-slate-500 font-normal leading-relaxed">
                  {domain.description}
                </p>

                {/* Tags / Pills matching Projects section */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {domain.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3.5 py-1 rounded-full text-xs font-bold border border-[#F59E0B]/80 bg-[#FFFBEB] text-[#92400E] tracking-tight transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Row: Metric Highlight + Signature Circular Dark Green Arrow */}
              <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-semibold text-slate-600">
                    {domain.metric}
                  </span>
                </div>

                {/* Signature circular dark action button matching Projects */}
                <div
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#18392F] text-emerald-300 flex items-center justify-center transition-all duration-300 group-hover:bg-[#F59E0B] group-hover:text-slate-950 group-hover:scale-110 shadow-sm"
                  title={domain.title}
                >
                  <FiArrowRight className="text-base font-bold transition-transform duration-300 group-hover:translate-x-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
