import React from 'react';
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiCplusplus,
  SiLeetcode,
  SiGit,
  SiPostman,
  SiCss,
} from 'react-icons/si';
import {
  FiLayout,
  FiServer,
  FiCpu,
  FiCode,
} from 'react-icons/fi';
import { FaCss3Alt, FaBrain } from 'react-icons/fa';

export default function Skills() {
  const horizontalSkillRows = [
    {
      id: 'frontend',
      title: 'Frontend',
      icon: <FiLayout />,
      skills: [
        {
          name: 'React.js',
          icon: <SiReact className="text-[#61DAFB]" />,
        },
        {
          name: 'JavaScript',
          icon: <SiJavascript className="text-[#F7DF1E]" />,
        },
        {
          name: 'Tailwind CSS',
          icon: <SiTailwindcss className="text-[#06B6D4]" />,
        },
        {
          name: 'HTML5',
          icon: <FaCss3Alt className="text-[#1572B6]" />,
        },
        {
          name: 'CSS3',
          icon: <SiCss className="text-[#1572B6]" />,
        },
      ],
    },
    {
      id: 'backend',
      title: 'Backend',
      icon: <FiServer />,
      skills: [
        {
          name: 'Node.js',
          icon: <SiNodedotjs className="text-[#339933]" />,
        },
        {
          name: 'Express.js',
          icon: <SiExpress className="text-slate-800" />,
        },
        {
          name: 'FastAPI',
          icon: <SiFastapi className="text-[#009688]" />,
        },
        {
          name: 'REST APIs & JWT',
          icon: <FiServer className="text-amber-500" />,
        },
      ],
    },
    {
      id: 'ai-databases',
      title: 'AI & Databases',
      icon: <FaBrain />,
      skills: [
        {
          name: 'Python',
          icon: <SiPython className="text-[#3776AB]" />,
        },
        {
          name: 'LangChain',
          icon: <FiCpu className="text-purple-500" />,
        },
        {
          name: 'RAG',
          icon: <FiCpu className="text-purple-500" />,
        },
        {
          name: 'PostgreSQL',
          icon: <SiPostgresql className="text-[#4169E1]" />,
        },
        {
          name: 'MongoDB',
          icon: <SiMongodb className="text-[#47A248]" />,
        },
        {
          name: 'MySQL',
          icon: <SiMysql className="text-[#4479A1]" />,
        },
      ],
    },
    {
      id: 'core-tools',
      title: 'Core & Tools',
      icon: <FiCode />,
      skills: [
        {
          name: 'C & C++',
          icon: <SiCplusplus className="text-[#00599C]" />,
        },
        {
          name: 'Data Structures & Algorithms',
          icon: <SiLeetcode className="text-[#FFA116]" />,
        },
        {
          name: 'Git & GitHub',
          icon: <SiGit className="text-[#F05032]" />,
        },
        {
          name: 'Postman',
          icon: <SiPostman className="text-[#FF6C37]" />,
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen bg-[#FBFBFA] text-slate-800 py-24 sm:py-32 overflow-hidden"
    >
      {/* Background Architectural Grid Pattern */}
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
      <div className="absolute top-20 right-10 w-96 h-96 bg-amber-300/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header directly matching Projects section design */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-14">
          <div>
            {/* Subtitle / Eyebrow Tag with Amber Dash */}
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-5 h-0.5 bg-[#F59E0B] rounded-full" />
              <span className="text-sm font-bold tracking-wide text-slate-600 uppercase">
                Technical Stack
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              My Core <span className="text-[#F59E0B]">Skills</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-500 max-w-2xl font-normal leading-relaxed">
              A focused, streamlined breakdown of production technologies, AI architectures, and algorithmic foundations I build with daily.
            </p>
          </div>
        </div>

        {/* Clean Horizontal Cards Stack (No small cluttered subtext) */}
        <div className="space-y-5 sm:space-y-6">
          {horizontalSkillRows.map((row) => (
            <div
              key={row.id}
              className="group flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 sm:p-7 bg-white rounded-[28px] sm:rounded-[34px] border border-slate-200/90 hover:border-amber-300 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_16px_36px_rgba(15,23,42,0.07)] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Left Column: Category Identity */}
              <div className="flex items-center gap-4 md:w-56 lg:w-60 shrink-0">
                <div className="w-13 h-13 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 group-hover:bg-[#F59E0B] group-hover:text-slate-950 transition-all duration-300 shadow-xs">
                  {row.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight group-hover:text-amber-600 transition-colors duration-300">
                  {row.title}
                </h3>
              </div>

              {/* Middle Section: Clean Horizontal Flow of Core Skills */}
              <div className="flex flex-wrap items-center gap-3 flex-1">
                {row.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-slate-50/90 hover:bg-amber-50/80 border border-slate-200/80 hover:border-amber-400 text-slate-800 transition-all duration-200 group/pill shadow-xs hover:shadow-sm"
                  >
                    <div className="w-8 h-8 rounded-xl bg-white border border-slate-200/70 shadow-xs flex items-center justify-center text-lg shrink-0 group-hover/pill:scale-110 transition-transform">
                      {skill.icon}
                    </div>
                    <span className="text-sm sm:text-base font-bold text-slate-800 whitespace-nowrap">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
