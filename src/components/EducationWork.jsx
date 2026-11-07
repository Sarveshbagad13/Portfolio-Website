import React, { useState } from 'react';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { FiCalendar, FiMapPin, FiCheckCircle, FiArrowUpRight } from 'react-icons/fi';
import resume from '../assets/Resume.pdf';

export default function EducationWork() {
  const educationList = [
    {
      period: '2023 – Present',
      institution: 'Pune Institute of Computer Technology (PICT)',
      degree: 'B.E. in Electronics and Telecommunication',
      score: 'CGPA: 9.143',
      location: 'Pune, Maharashtra',
      description:
        'Pursuing engineering with high academic distinction. Core coursework covers Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, and Operating Systems.',
      skills: ['DSA', 'OOP', 'DBMS', 'Computer Networks'],
    },
    {
      period: '2021 – 2023',
      institution: 'HPT Arts and RYK Science College',
      degree: 'Higher Secondary Certificate (HSC)',
      score: 'Percentage: 75.67%',
      location: 'Nashik, Maharashtra',
      description:
        'Higher secondary education focusing on Advanced Mathematics, Physics, Chemistry, and Computer Science fundamentals.',
      skills: ['Mathematics', 'Physics', 'Computer Science'],
    },
    {
      period: '2019 – 2021',
      institution: 'Secondary School Certificate (SSC)',
      degree: 'High School Foundation',
      score: 'Percentage: 95.60%',
      location: 'Nashik, Maharashtra',
      description:
        'Completed secondary school education with strong foundations in analytic sciences, logical reasoning, and mathematics.',
      skills: ['Mathematics', 'Science', 'English'],
    },
  ];

  const workList = [
    {
      period: 'Jan 2026 – April 2026',
      company: 'Pune Institute of Computer Technology',
      role: 'Full Stack Developer Intern',
      location: 'Pune, Maharashtra',
      description:
        'Engineered GearGuard, a full-stack maintenance management platform. Built 20+ secure RESTful API endpoints with JWT authentication and role-based access control (Admin, Technician, Employee). Developed responsive UI with CRUD operations, search/filter, and export features.',
      skills: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'JWT', 'Tailwind CSS'],
    },
    {
      period: '2024 – Present',
      company: 'Open Source & AI Platforms',
      role: 'Full-Stack & RAG AI Developer',
      location: 'Pune, Maharashtra',
      description:
        'Developed InsideHQ, a permission-aware RAG employee knowledge assistant with PostgreSQL pgvector, Reciprocal Rank Fusion, and Langfuse monitoring. Built Amicus legal text summarization engine fine-tuning models on legislative corpora.',
      skills: ['Python', 'FastAPI', 'LangChain', 'pgvector', 'PostgreSQL', 'Docker'],
    },
    {
      period: '2026',
      company: 'InC 2026 – National Tech Symposium',
      role: 'Impetus Event Head',
      location: 'PICT Pune',
      description:
        'Led a 50+ member cross-functional team organizing a flagship technical event attracting 1,500+ participants nationwide. Handled technical operations, digital platforms, and team coordination.',
      skills: ['Leadership', 'Team Management', 'Technical Operations', 'Event Coordination'],
    },
  ];

  return (
    <section
      id="journey"
      className="relative min-h-screen bg-[#FDFDFD] text-slate-800 py-24 sm:py-32 overflow-hidden border-t border-slate-100"
    >
      {/* Background Architectural Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(rgba(15, 23, 42, 0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15, 23, 42, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: '54px 54px',
        }}
      />

      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-amber-400/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-indigo-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header centered matching the reference image */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          {/* Eyebrow kicker */}
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-0.5 bg-[#F59E0B] rounded-full" />
            <span className="text-sm font-bold tracking-wide text-slate-600 uppercase">
              Education & Work
            </span>
          </div>

          {/* Headline inspired by reference image */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
            My <span className="text-[#F59E0B]">Academic and</span>
            <br />
            <span className="text-[#F59E0B]">Professional</span> Journey
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-500 font-normal leading-relaxed">
            A chronological timeline of academic achievements, full-stack engineering internships, and leadership roles that have shaped my technical foundation.
          </p>

          {/* Quick Stats / Resume Action */}
          <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
            <a
              href={resume}
              download="Sarvesh_Bagad_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Download Full Resume</span>
              <FiArrowUpRight className="text-amber-400 text-sm" />
            </a>
          </div>
        </div>

        {/* 2 Main Cards: Education (Left) & Work Experience (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Left Card: Education */}
          <div className="bg-white rounded-[32px] sm:rounded-[36px] border border-slate-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(15,23,42,0.07)] transition-all duration-500 p-7 sm:p-10 flex flex-col justify-between">
            <div>
              {/* Card Header matching reference image: yellow circular badge + title */}
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#F59E0B] text-white flex items-center justify-center text-2xl shadow-md shadow-amber-500/20 shrink-0">
                  <FaGraduationCap />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    Education
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-slate-400 mt-0.5">
                    Academic Milestones & Degrees
                  </p>
                </div>
              </div>

              {/* Timeline Entries with vertical line */}
              <div className="space-y-8 sm:space-y-10 relative">
                {educationList.map((item, index) => (
                  <div key={index} className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 group">
                    {/* Timeline Node Dot */}
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-[#F59E0B] group-hover:scale-125 transition-transform duration-300 shadow-sm" />

                    {/* Year Range */}
                    <span className="inline-block text-xs sm:text-sm font-bold text-slate-400 tracking-wider">
                      {item.period}
                    </span>

                    {/* Institution Name */}
                    <h4 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-[#F59E0B] transition-colors duration-300 mt-1">
                      {item.institution}
                    </h4>

                    {/* Degree & Score */}
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <p className="text-sm sm:text-base font-semibold text-slate-700">
                        {item.degree}
                      </p>
                      {item.score && (
                        <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                          {item.score}
                        </span>
                      )}
                    </div>

                    {/* Location */}
                    <p className="flex items-center gap-1.5 text-xs text-slate-400 mt-1">
                      <FiMapPin className="text-amber-500" />
                      <span>{item.location}</span>
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed mt-2.5">
                      {item.description}
                    </p>

                    {/* Skill Badges */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-0.5 rounded-lg bg-slate-100 text-slate-600 text-[11px] font-bold"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Card: Work Experience */}
          <div className="bg-white rounded-[32px] sm:rounded-[36px] border border-slate-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(15,23,42,0.07)] transition-all duration-500 p-7 sm:p-10 flex flex-col justify-between">
            <div>
              {/* Card Header matching reference image: yellow circular badge + title */}
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#F59E0B] text-white flex items-center justify-center text-2xl shadow-md shadow-amber-500/20 shrink-0">
                  <FaBriefcase />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    Work Experience
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-slate-400 mt-0.5">
                    Internships & Technical Leadership
                  </p>
                </div>
              </div>

              {/* Timeline Entries with vertical line */}
              <div className="space-y-8 sm:space-y-10 relative">
                {workList.map((item, index) => (
                  <div key={index} className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 group">
                    {/* Timeline Node Dot */}
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-[#F59E0B] group-hover:scale-125 transition-transform duration-300 shadow-sm" />

                    {/* Year Range */}
                    <span className="inline-block text-xs sm:text-sm font-bold text-slate-400 tracking-wider">
                      {item.period}
                    </span>

                    {/* Company / Organization Name */}
                    <h4 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-[#F59E0B] transition-colors duration-300 mt-1">
                      {item.company}
                    </h4>

                    {/* Role Title */}
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <p className="text-sm sm:text-base font-semibold text-slate-700">
                        {item.role}
                      </p>
                    </div>

                    {/* Location */}
                    <p className="flex items-center gap-1.5 text-xs text-slate-400 mt-1">
                      <FiMapPin className="text-amber-500" />
                      <span>{item.location}</span>
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed mt-2.5">
                      {item.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-0.5 rounded-lg bg-amber-50 border border-amber-200/80 text-amber-900 text-[11px] font-bold"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
