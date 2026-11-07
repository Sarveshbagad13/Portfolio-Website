import React, { useState, useEffect, useRef } from 'react';
import {
  FiArrowUpRight,
  FiArrowRight,
  FiGithub,
  FiExternalLink,
  FiSearch,
  FiX,
  FiCheckCircle,
  FiMaximize2,
  FiBook,
  FiGitBranch,
  FiStar,
  FiFolder,
  FiCode,
  FiClock,
} from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import gearguardImg from '../assets/ProjectImg/gearguardImg.png';
import insidehqImg from '../assets/ProjectImg/insidehqImg.png';
import amicusImg from '../assets/ProjectImg/amicusImg.png';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isAllProjectsOpen, setIsAllProjectsOpen] = useState(false);

  // Semicircular Arc Carousel State
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [radius, setRadius] = useState(620);

  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startAngleRef = useRef(0);
  const hasDraggedRef = useRef(false);
  const rotationAngleRef = useRef(0);

  useEffect(() => {
    rotationAngleRef.current = rotationAngle;
  }, [rotationAngle]);

  // Responsive radius calculation
  useEffect(() => {
    const updateDimensions = () => {
      if (window.innerWidth < 640) {
        setRadius(380);
      } else if (window.innerWidth < 1024) {
        setRadius(500);
      } else {
        setRadius(640);
      }
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Continuous rotation loop via requestAnimationFrame (pauses when modal is open)
  useEffect(() => {
    let animId;
    let lastTime = performance.now();

    const animate = (time) => {
      const delta = time - lastTime;
      lastTime = time;

      // Automatically pause when hovering, dragging, or when project modal is open
      if (isPlaying && !isHovered && !isDraggingRef.current && !selectedProject && !isAllProjectsOpen) {
        const speed = 0.045 * (delta / 16.6);
        setRotationAngle((prev) => (prev + speed) % 360);
      }
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [isPlaying, isHovered, selectedProject, isAllProjectsOpen]);

  const handleDragStart = (clientX) => {
    isDraggingRef.current = true;
    startXRef.current = clientX;
    startAngleRef.current = rotationAngleRef.current;
    hasDraggedRef.current = false;
  };

  const handleDragMove = (clientX) => {
    if (!isDraggingRef.current) return;
    const diff = clientX - startXRef.current;
    if (Math.abs(diff) > 4) {
      hasDraggedRef.current = true;
    }
    const factor = radius > 500 ? 0.08 : 0.12;
    setRotationAngle((startAngleRef.current + diff * factor + 3600) % 360);
  };

  const handleDragEnd = () => {
    isDraggingRef.current = false;
  };

  const handleCardClick = (project) => {
    if (hasDraggedRef.current) return;
    setSelectedProject(project);
  };

  const handlePrev = () => {
    setRotationAngle((prev) => (prev - 30 + 360) % 360);
  };

  const handleNext = () => {
    setRotationAngle((prev) => (prev + 30) % 360);
  };

  const projects = [
    {
      id: 'gearguard',
      title: 'GearGuard – Maintenance Management System',
      image: gearguardImg,
      techStack: ['Reactjs', 'Express.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'JWT'],
      accentColor: '#1a4338',
      summary:
        'GearGuard is a centralized maintenance management system designed to streamline company asset tracking and repair operations. It connects equipment, maintenance teams, and service requests through automated workflows, enabling efficient breakdown management, preventive maintenance scheduling, technician assignments, and real-time maintenance monitoring.',
      metrics: [
        { label: 'Repair Workflows', value: 'End-to-End' },
        { label: 'Maintenance Tracking', value: '24/7' },
        { label: 'Asset Monitoring', value: 'Real-Time' },
      ],
      features: [
        'Centralized Equipment Management',
        'Automated Maintenance Request Management',
        'Kanban & Calendar-Based Tracking',
        'Smart Automation & Reporting',
      ],
      problemSolved:
        'GearGuard helps organizations eliminate scattered maintenance workflows, manual tracking, and inefficient technician assignment by providing a unified platform for real-time equipment and maintenance operations.',
      github: 'https://github.com/Sarveshbagad13',
      demo: 'https://github.com/Sarveshbagad13',
      mockupType: 'gear-guard',
    },
    {
      id: 'insidehq',
      title: 'InsideHQ – RAG Employee Knowledge Assistant',
      image: insidehqImg,
      
      techStack: ['Python', 'Fast API', 'React', 'RAG', 'PostgreSQL+pgvector'],
      accentColor: '#154133',
      summary:
        'InsideHQ is an AI-powered enterprise knowledge assistant that centralizes organizational knowledge using Retrieval-Augmented Generation (RAG). It enables employees to discover previous projects, retrieve technical decisions, access relevant documentation and permission-aware information retrieval.',
      metrics: [
        { label: 'Knowledge Retrieval', value: 'RAG-Powered' },
        { label: 'Access Control', value: 'Permission-Aware' },
        { label: 'Knowledge Discovery', value: 'Semantic Search' },
      ],
      features: [
        'Permission-Aware Knowledge Retrieval',
        'Intelligent Document Processing',
        'Context-Aware AI Question Answering',
        'Project & Technical Decision Discovery',
      ],
      problemSolved:
        'InsideHQ solves enterprise knowledge loss by instantly retrieving and contextualizing organizational knowledge across documents, decisions, and projects.',
      github: 'https://github.com/Sarveshbagad13',
      demo: 'https://github.com/Sarveshbagad13',
      mockupType: 'insidehq',
    },
    {
      id: 'amicus',
      title: 'Amicus - Legal Text Analyzer',
      image: amicusImg,
      techStack: ['Python', 'Fast API', 'React', 'Hugging Face', 'MongoDB'],
      accentColor: '#184439',
      summary:
        'A full-stack AI legal document analysis platform that extracts and summarizes complex contractual clauses from PDF agreements using fine-tuned transformer models.',
      metrics: [
        { label: 'Extraction Accuracy', value: '98.4%' },
        { label: 'Processing Speed', value: '5x Faster' },
        { label: 'Model Pipeline', value: 'BART / PEGASUS' },
      ],
      features: [
        'Automated Legal PDF Parsing & OCR Ingestion',
        'Deep Clause Extraction & Entity Recognition',
        'Abstractive Contract Summarization Engine',
        'Interactive Legal Search & Risk Matrix Dashboard',
      ],
      problemSolved:
        'Amicus eliminates hours of manual legal agreement review by extracting liability points and summarizing key clauses in seconds.',
      github: 'https://github.com/Sarveshbagad13',
      demo: 'https://github.com/Sarveshbagad13',
      mockupType: 'amicus',
    },
    {
      id: 'caremind',
      title: 'CareMind – Mental Health Support Chatbot',
      techStack: ['Python','Flask','Reactjs', 'NLP', 'NLTK', 'MongoDB'],
      accentColor: '#173c33',
      summary:
        'A mental health support chatbot designed to provide immediate emotional assistance and guided self-care practices. It utilizes natural language processing to understand user distress, offers guided meditations, cognitive reframing exercises, and connects users to professional resources when necessary.',
      metrics: [
        { label: 'Intent Recognition', value: 'NLP-Powered' },
        { label: 'Response Generation', value: 'Context-Aware' },
        { label: 'User Experience', value: 'Personalized' },
      ],
      features: [
        'NLP-Based Intent Classification',
        'Interactive Mental Health Chatbot',
        'Personalized Wellness Assistance',
        'Secure User Authentication & History',
      ],
      problemSolved:
        'CareMind addresses the gap in immediate mental health support by providing an accessible, AI-driven emotional support system that offers instant, judgment-free assistance and guided self-care tools.',
      github: 'https://github.com/Sarveshbagad13',
      demo: 'https://github.com/Sarveshbagad13',
      mockupType: 'caremind',
    },
    {
      id: 'carbon-footprint-estimator',
      title: 'Carbon Footprint Estimator and Optimiser',
      inProgress: true,
      progressStatus: 'In Active Development',
      techStack: ['React', 'Python', 'FastAPI', 'LangChain', 'OpenAI', 'MongoDB'],
      accentColor: '#0369a1',
      summary:
        'A web platform to estimate and optimse the carbon footprint of individuals and households. It enables users to calculate their carbon footprint based on their lifestyle choices and provides personalized recommendations to reduce it.',
      metrics: [
        { label: 'Estimation Accuracy', value: '99.4%' },
        { label: 'Recommendation Speed', value: 'Real-Time' },
      ],
      features: [
        'Automated legal PDF ingestion pipeline with OCR and clause vectorization',
        'Real-time risk scoring matrix with flagged ambiguity alerts',
        'Context-grounded LLM Q&A console with paragraph citations',
        'Encrypted role-based enterprise audit trails and exportable compliance reports',
      ],
      problemSolved:
        'Legal compliance teams spend days manually reviewing complex warranty contracts. GearGuard extracts and validates key liability points in under thirty seconds.',
      github: 'https://github.com/Sarveshbagad13',
      demo: 'https://github.com/Sarveshbagad13',
      mockupType: 'ai-platform',
    },
  ];

  // 12-item ring (projects duplicated) for seamless continuous circular rotation
  const carouselItems = [...projects, ...projects];
  const angleStep = 360 / carouselItems.length;

  let minDiff = Infinity;
  let activeIndex = 0;

  const renderedItems = carouselItems.map((project, index) => {
    const baseAngle = index * angleStep;
    let relAngle = (baseAngle + rotationAngle) % 360;
    if (relAngle > 180) relAngle -= 360;
    if (relAngle < -180) relAngle += 360;

    if (Math.abs(relAngle) < minDiff) {
      minDiff = Math.abs(relAngle);
      activeIndex = index;
    }

    return { project, relAngle, uniqueKey: `${project.id}-${index}` };
  });

  const activeProject = carouselItems[activeIndex] || projects[0];

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-[#FBFBFA] text-slate-800 py-24 sm:py-32 overflow-hidden"
    >
      {/* Background Grid Pattern */}
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
      <div className="absolute top-20 left-10 w-80 h-80 bg-amber-300/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header styled cleanly to complement the semicircle layout */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/40 bg-amber-400/10 text-[#92400E] text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            Interactive Portfolio
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
            My Latest <span className="text-[#F59E0B]">Projects</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-500 max-w-xl font-normal leading-relaxed">
            A curated collection of innovative applications, enterprise AI engines, and full-stack platforms driving excellence.
          </p>
        </div>

        {/* ── Semicircular Arc Sliding Carousel ── */}
        <div
          className="relative w-full overflow-hidden select-none cursor-grab active:cursor-grabbing"
          style={{ height: radius > 550 ? '560px' : radius > 450 ? '480px' : '400px' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            handleDragEnd();
          }}
          onMouseDown={(e) => handleDragStart(e.clientX)}
          onMouseMove={(e) => handleDragMove(e.clientX)}
          onMouseUp={handleDragEnd}
          onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
          onTouchEnd={handleDragEnd}
        >
          {/* Subtle architectural curved guide line */}
          <div
            className="absolute left-1/2 -translate-x-1/2 rounded-full border border-dashed border-slate-300/40 pointer-events-none"
            style={{
              width: `${radius * 2}px`,
              height: `${radius * 2}px`,
              top: `${radius > 500 ? 40 : 20}px`,
            }}
          />

          {/* Semicircular Sliding Cards */}
          {renderedItems.map(({ project, relAngle, uniqueKey }) => {
            if (Math.abs(relAngle) > 75) return null;

            const rad = (relAngle * Math.PI) / 180;
            const x = radius * Math.sin(rad);
            const y = radius * (1 - Math.cos(rad));
            const scale = Math.max(0.76, 1.05 - (Math.abs(relAngle) / 80) * 0.28);
            const opacity = Math.abs(relAngle) > 52 ? Math.max(0, 1 - (Math.abs(relAngle) - 52) / 22) : 1;
            const zIndex = Math.round(30 - Math.abs(relAngle) / 4);
            const isCenter = Math.abs(relAngle) < 14;

            const cardWidth = radius > 550 ? 270 : radius > 450 ? 230 : 185;
            const cardHeight = radius > 550 ? 370 : radius > 450 ? 320 : 260;

            return (
              <div
                key={uniqueKey}
                onClick={() => handleCardClick(project)}
                className={`group absolute rounded-[26px] sm:rounded-[32px] overflow-hidden bg-white cursor-pointer select-none transition-shadow duration-300 will-change-transform ${
                  isCenter
                    ? 'ring-2 ring-amber-400 shadow-[0_22px_55px_rgba(245,158,11,0.22)]'
                    : project.inProgress
                    ? 'border-2 border-amber-400/60 shadow-[0_12px_35px_rgba(245,158,11,0.12)]'
                    : 'border border-slate-200/90 shadow-[0_12px_32px_rgba(15,23,42,0.08)] hover:border-slate-300'
                }`}
                style={{
                  width: `${cardWidth}px`,
                  height: `${cardHeight}px`,
                  left: `calc(50% + ${x}px)`,
                  top: `calc(${radius > 500 ? 40 : 20}px + ${y}px)`,
                  transform: `translate(-50%, 0) rotate(${relAngle}deg) scale(${scale})`,
                  zIndex,
                  opacity,
                  transformOrigin: 'center center',
                }}
              >
                {/* Card Preview (Screenshot or Mockup) */}
                <div className="relative w-full h-[72%] bg-gradient-to-b from-[#F2F4F3] via-[#F8FAF9] to-[#F2F4F3] overflow-hidden flex items-center justify-center border-b border-slate-100">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full scale-90 flex items-center justify-center">
                      <MockupViewer mockupType={project.mockupType} />
                    </div>
                  )}

                  {/* Top Status Badge */}
                  {project.inProgress && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-[10px] font-bold text-amber-300 border border-amber-400/40 flex items-center gap-1.5 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                      In Development
                    </div>
                  )}

                  {/* Hover Quick View Pill */}
                  <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[1px] flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-slate-950 font-bold text-xs shadow-md">
                      <span>View Info</span>
                      <FiArrowUpRight className="text-sm" />
                    </span>
                  </div>
                </div>

                {/* Card Bottom Meta */}
                <div className="p-3.5 sm:p-4 bg-white flex flex-col justify-between h-[28%]">
                  <h4 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-amber-600 transition-colors truncate">
                    {project.title}
                  </h4>
                  <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500">
                    <span className="truncate max-w-[80%]">
                      {project.techStack ? project.techStack.slice(0, 3).join(' · ') : 'Full Stack'}
                    </span>
                    <span className="w-6 h-6 rounded-full bg-slate-100 group-hover:bg-[#F59E0B] text-slate-800 flex items-center justify-center transition-colors">
                      <FiArrowUpRight className="text-xs" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Active Project Info Card & Controls ── */}
        <div className="mt-4 sm:mt-6 flex flex-col items-center text-center">
          {/* Active Project Highlight Banner */}
          <div
            onClick={() => setSelectedProject(activeProject)}
            className="group max-w-xl w-full p-5 sm:p-6 rounded-[24px] bg-white border border-slate-200/90 shadow-md hover:shadow-xl hover:border-amber-400 transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center justify-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                {activeProject.inProgress ? 'Currently In Development' : 'Featured Project'}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-amber-600 transition-colors">
              {activeProject.title}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-500 line-clamp-2 leading-relaxed">
              {activeProject.summary}
            </p>
            <div className="mt-4 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#1E293B] group-hover:bg-[#F59E0B] text-white group-hover:text-slate-950 font-bold text-xs tracking-wide transition-all shadow-sm">
              <span>Explore Full Case Study</span>
              <FiArrowUpRight className="text-sm" />
            </div>
          </div>

          {/* View All Repos Button */}
          <div className="mt-6 flex items-center justify-center">
            <button
              onClick={() => setIsAllProjectsOpen(true)}
              className="px-6 py-3 rounded-full bg-[#1E293B] hover:bg-slate-900 text-white font-bold text-xs tracking-wide transition-all shadow-md hover:scale-105 flex items-center gap-2.5 cursor-pointer"
            >
              <span>View All Repositories</span>
              <span className="w-5 h-5 rounded-full bg-[#F59E0B] text-slate-950 flex items-center justify-center text-xs">
                <FiArrowUpRight />
              </span>
            </button>
          </div>

          <p className="mt-3 text-xs text-slate-400 font-medium">
            Hover to pause · Click any project to open full case study
          </p>
        </div>

        {/* Outstanding Component: Call-to-Action Bottom Banner */}
        <div className="mt-16 sm:mt-20 p-8 sm:p-10 rounded-[32px] bg-gradient-to-r from-[#0F172A] via-[#1E1B4B] to-[#0F172A] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
          <div className="text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F59E0B]">
              Let’s Collaborate
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white mt-2">
              Interested in building a high-impact product together?
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-xl">
              From intuitive frontend designs to robust backend architectures and AI pipelines, let’s turn your vision into production reality.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-[#F59E0B] hover:bg-amber-400 text-slate-950 font-black text-sm tracking-wide transition-all shadow-md hover:scale-105"
            >
              Start Conversation →
            </a>
            <button
              onClick={() => setIsAllProjectsOpen(true)}
              className="px-5 py-3 rounded-full border border-slate-700 hover:border-slate-500 bg-white/5 hover:bg-white/10 text-white font-bold text-sm transition-all cursor-pointer"
            >
              Browse All Repositories
            </button>
          </div>
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* GitHub-Inspired "View All Projects" Popup Window */}
      {isAllProjectsOpen && (
        <AllProjectsModal
          onClose={() => setIsAllProjectsOpen(false)}
          onSelectProject={(proj) => {
            setIsAllProjectsOpen(false);
            setSelectedProject(proj);
          }}
        />
      )}
    </section>
  );
}

// ----------------------------------------------------------------------------
// GitHub-Inspired "All Projects / Repositories" Popup Window Component
// ----------------------------------------------------------------------------
function AllProjectsModal({ onClose, onSelectProject }) {
  const [filterQuery, setFilterQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('All');

  // ESC key dismissal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Complete list of repositories & projects
  const allRepositories = [
    {
      name: 'GearGuard',
      repoName: 'Sarveshbagad13/GearGuard',
      type: 'Full Stack Maintenance Platform',
      description:
        'AI-powered equipment maintenance management platform with 20+ REST APIs, JWT role-based access control, work order tracking, and equipment audit export pipelines.',
      topics: ['react', 'node.js', 'express', 'mysql', 'jwt', 'tailwind'],
      githubUrl: 'https://github.com/Sarveshbagad13',
      demoUrl: 'https://github.com/Sarveshbagad13',
      visibility: 'Public',
      updatedAt: 'Updated 2 days ago',
    },
    {
      name: 'Amicus',
      repoName: 'Sarveshbagad13/Amicus-Legal-Analyzer',
      type: 'AI Document Summarizer',
      description:
        'Full-stack AI legal document analysis platform extracting text from complex PDFs. Fine-tuned BART/PEGASUS models on BillSum & CUAD datasets for clause extraction and entity recognition.',
      topics: ['fastapi', 'python', 'huggingface', 'mongodb', 'langchain', 'nlp'],
      githubUrl: 'https://github.com/Sarveshbagad13',
      demoUrl: 'https://github.com/Sarveshbagad13',
      visibility: 'Public',
      updatedAt: 'Updated last week',
    },
    {
      name: 'InsideHQ',
      repoName: 'Sarveshbagad13/InsideHQ-RAG-Assistant',
      type: 'Enterprise AI Knowledge Engine',
      description:
        'Permission-aware enterprise RAG knowledge assistant with PostgreSQL pgvector semantic search, Reciprocal Rank Fusion, BAAI reranking, and Langfuse audit evaluation.',
      topics: ['fastapi', 'postgresql', 'pgvector', 'rag', 'langfuse', 'react'],
      githubUrl: 'https://github.com/Sarveshbagad13',
      demoUrl: 'https://github.com/Sarveshbagad13',
      visibility: 'Public',
      updatedAt: 'Updated 3 weeks ago',
    },
    {
      name: 'Lumiere-Beauty-App',
      repoName: 'Sarveshbagad13/Lumiere-Beauty-App',
      type: 'Mobile E-Commerce Solution',
      description:
        'Cross-platform mobile shopping application for cosmetic brands featuring interactive shade matching, 1-click Apple Pay checkout, and live order push notifications.',
      topics: ['react-native', 'redux-toolkit', 'stripe', 'tailwind', 'mobile-ui'],
      githubUrl: 'https://github.com/Sarveshbagad13',
      demoUrl: 'https://github.com/Sarveshbagad13',
      visibility: 'Public',
      updatedAt: 'Updated last month',
    },
    {
      name: 'Beauty-Product-Landing-Page',
      repoName: 'Sarveshbagad13/Beauty-Product-Landing-Page',
      type: 'Web Showcase & App Store Funnel',
      description:
        'High-converting responsive product landing page featuring device perspective previews, rating carousels, and 100/100 Lighthouse performance metrics.',
      topics: ['react', 'tailwind', 'vite', 'framer-motion', 'seo'],
      githubUrl: 'https://github.com/Sarveshbagad13',
      demoUrl: 'https://github.com/Sarveshbagad13',
      visibility: 'Public',
      updatedAt: 'Updated recently',
    },
    {
      name: 'CaffeFlow-Coffee-App',
      repoName: 'Sarveshbagad13/CaffeFlow-Coffee-App',
      type: 'Food & Beverage Mobile Pre-Order',
      description:
        'Artisan coffee pre-ordering and loyalty bean application with live WebSocket barista queues, roast customization, and proximity geofenced preparation alerts.',
      topics: ['react-native', 'express', 'mongodb', 'socket.io', 'tailwind'],
      githubUrl: 'https://github.com/Sarveshbagad13',
      demoUrl: 'https://github.com/Sarveshbagad13',
      visibility: 'Public',
      updatedAt: 'Updated recently',
    },
    {
      name: 'CaffeFlow-Roasters-Web',
      repoName: 'Sarveshbagad13/CaffeFlow-Roasters-Web',
      type: 'E-Commerce & Bean Subscription',
      description:
        'Editorial roasted coffee web shop with flavor wheel guides, recurring monthly bean subscriptions, and store availability finder.',
      language: 'JavaScript',
      languageColor: '#F1E05A',
      stars: 11,
      branch: 'main',
      topics: ['react', 'node.js', 'tailwind', 'vite', 'rest-api'],
      githubUrl: 'https://github.com/Sarveshbagad13',
      demoUrl: 'https://github.com/Sarveshbagad13',
      visibility: 'Public',
      updatedAt: 'Updated 1 month ago',
    },
    {
      name: 'DevSync-Multiplayer-IDE',
      repoName: 'Sarveshbagad13/DevSync-Multiplayer-IDE',
      type: 'Cloud Development Workspace',
      description:
        'Multiplayer cloud IDE allowing distributed engineers to collaborate with sub-45ms cursor sync, Monaco Editor syntax highlighting, and isolated container execution.',
      language: 'TypeScript',
      languageColor: '#3178C6',
      stars: 27,
      branch: 'main',
      topics: ['react', 'node.js', 'socket.io', 'monaco-editor', 'docker'],
      githubUrl: 'https://github.com/Sarveshbagad13',
      demoUrl: 'https://github.com/Sarveshbagad13',
      visibility: 'Public',
      updatedAt: 'Updated 2 weeks ago',
    },
  ];

  const filteredRepos = allRepositories.filter((repo) => {
    const matchesLang =
      selectedLanguage === 'All' || repo.language === selectedLanguage;
    const matchesSearch =
      filterQuery === '' ||
      repo.name.toLowerCase().includes(filterQuery.toLowerCase()) ||
      repo.description.toLowerCase().includes(filterQuery.toLowerCase()) ||
      repo.topics.some((topic) =>
        topic.toLowerCase().includes(filterQuery.toLowerCase())
      );
    return matchesLang && matchesSearch;
  });

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0D1117] text-[#C9D1D9] rounded-[24px] sm:rounded-[32px] border border-[#30363D] shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* GitHub Header Bar */}
        <div className="bg-[#161B22] border-b border-[#30363D] px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#21262D] text-white flex items-center justify-center text-xl border border-[#30363D]">
              <FaGithub />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm sm:text-base font-bold text-white font-mono">
                  Sarveshbagad13
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#238636]/20 text-[#3FB950] border border-[#238636]/40">
                  Verified Repos
                </span>
              </div>
              <p className="text-xs text-[#8B949E]">
                All Projects, Source Code & GitHub Repositories
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Sarveshbagad13"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#21262D] hover:bg-[#30363D] text-xs font-semibold text-white border border-[#30363D] transition-colors"
            >
              <span>GitHub Profile</span>
              <FiExternalLink />
            </a>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-lg bg-[#21262D] hover:bg-[#30363D] text-[#8B949E] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              title="Close window"
            >
              <FiX className="text-lg" />
            </button>
          </div>
        </div>


        {/* Repositories List (Scrollable) */}
        <div className="flex-1 overflow-y-auto divide-y divide-[#21262D] p-3 sm:p-4">
          {filteredRepos.length === 0 ? (
            <div className="text-center py-16 text-[#8B949E]">
              <FiFolder className="mx-auto text-4xl mb-3 opacity-40" />
              <p className="text-base font-bold text-white">No repositories matched your search</p>
              <p className="text-xs mt-1">Try another keyword or reset the language filter.</p>
              <button
                onClick={() => {
                  setFilterQuery('');
                  setSelectedLanguage('All');
                }}
                className="mt-4 px-4 py-2 rounded-lg bg-[#21262D] hover:bg-[#30363D] text-xs font-semibold text-white transition-colors cursor-pointer"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            filteredRepos.map((repo, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 hover:bg-[#161B22]/70 rounded-xl transition-colors duration-200 group"
              >
                {/* Top Row: Repo Title + Badges + Action Buttons */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <FiBook className="text-[#8B949E] text-base shrink-0" />
                    <a
                      href={repo.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base sm:text-lg font-bold text-[#58A6FF] hover:underline font-mono"
                    >
                      {repo.name}
                    </a>
                    <span className="text-[11px] font-semibold text-[#8B949E] border border-[#30363D] px-2 py-0.5 rounded-full">
                      {repo.visibility}
                    </span>
                  </div>

                  {/* Actions: Source Code + Demo */}
                  <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
                    <a
                      href={repo.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#21262D] hover:bg-[#30363D] border border-[#30363D] text-xs font-bold text-white transition-colors"
                      title="View GitHub Repository"
                    >
                      <FiCode className="text-amber-400" />
                      <span>Source Code</span>
                    </a>
                    <a
                      href={repo.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#238636] hover:bg-[#2EA043] text-xs font-bold text-white transition-colors shadow-sm"
                      title="Open Live Preview"
                    >
                      <span>Live Demo</span>
                      <FiExternalLink className="text-xs" />
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-2 text-xs sm:text-sm text-[#8B949E] leading-relaxed">
                  {repo.description}
                </p>

                {/* Topics Tags */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {repo.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-[#388BFD]/10 text-[#58A6FF] hover:bg-[#388BFD]/20 transition-colors"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-[#161B22] border-t border-[#30363D] px-6 py-3.5 flex items-center justify-between text-xs text-[#8B949E]">
          <span>
            Showing <strong className="text-white">{filteredRepos.length}</strong> of{' '}
            {allRepositories.length} repositories
          </span>
          <a
            href="https://github.com/Sarveshbagad13"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#58A6FF] hover:underline font-semibold"
          >
            <span>Explore all on github.com/Sarveshbagad13</span>
            <FiArrowUpRight />
          </a>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------------
// High-Fidelity Layered Mockups matching the reference image aesthetic
// ----------------------------------------------------------------------------
function MockupViewer({ mockupType }) {
  if (mockupType === 'beauty-app') {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Secondary Tilted Phone Screen (Left Background) */}
        <div className="absolute -left-2 sm:left-2 top-6 w-[170px] sm:w-[195px] h-[260px] bg-white rounded-[26px] border border-slate-300/80 shadow-lg p-2.5 transform -rotate-12 scale-90 opacity-60 sm:opacity-85 pointer-events-none transition-transform duration-500 group-hover:-rotate-14 group-hover:-translate-x-2">
          <div className="w-10 h-2 bg-slate-800 rounded-full mx-auto mb-2" />
          <div className="bg-[#1A4338] text-white p-2 rounded-xl mb-2 text-center">
            <p className="text-[8px] font-bold">Discover Clean Beauty</p>
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            <div className="h-16 bg-emerald-50 rounded-lg p-1 flex flex-col justify-between">
              <span className="text-xs">🌿</span>
              <p className="text-[7px] font-bold text-slate-700">Hydra Serum</p>
            </div>
            <div className="h-16 bg-amber-50 rounded-lg p-1 flex flex-col justify-between">
              <span className="text-xs">🌸</span>
              <p className="text-[7px] font-bold text-slate-700">Night Cream</p>
            </div>
          </div>
        </div>

        {/* Primary Phone Screen (Center Front) */}
        <div className="relative z-10 w-[200px] sm:w-[220px] bg-white rounded-[28px] border-4 border-slate-900 shadow-2xl p-3 transform transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1">
          {/* Dynamic Island / Notch */}
          <div className="w-16 h-3 bg-slate-900 rounded-full mx-auto mb-2" />

          {/* App Header */}
          <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-slate-100">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#1A4338]" />
              <span className="text-[9px] font-black tracking-wider text-slate-800">LUMIÈRE</span>
            </div>
            <span className="text-[8px] font-bold bg-[#1A4338] text-white px-2 py-0.5 rounded-full">
              Cart (2)
            </span>
          </div>

          {/* Featured Hero Card */}
          <div className="bg-[#1A4338] text-white p-2.5 rounded-2xl mb-2 flex items-center justify-between">
            <div>
              <p className="text-[7px] font-semibold text-emerald-300 uppercase">Special Launch</p>
              <p className="text-[10px] font-black leading-tight mt-0.5">Botanical Glow Set</p>
              <span className="inline-block mt-1 text-[7px] font-bold bg-[#F59E0B] text-slate-950 px-1.5 py-0.2 rounded-full">
                30% OFF
              </span>
            </div>
            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-sm">
              ✨
            </div>
          </div>

          {/* Product Items */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between p-1.5 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-1.5">
                <div className="w-7 h-7 rounded-lg bg-emerald-100/70 flex items-center justify-center text-xs">
                  🧴
                </div>
                <div>
                  <p className="text-[9px] font-bold text-slate-800 leading-tight">Glow Essence</p>
                  <p className="text-[7px] text-slate-400">Pure Rose Oil</p>
                </div>
              </div>
              <span className="text-[8px] font-extrabold text-[#1A4338]">$38.00</span>
            </div>
            <div className="flex items-center justify-between p-1.5 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-1.5">
                <div className="w-7 h-7 rounded-lg bg-amber-100/70 flex items-center justify-center text-xs">
                  🫧
                </div>
                <div>
                  <p className="text-[9px] font-bold text-slate-800 leading-tight">Cleansing Foam</p>
                  <p className="text-[7px] text-slate-400">Gentle Cleanser</p>
                </div>
              </div>
              <span className="text-[8px] font-extrabold text-[#1A4338]">$24.00</span>
            </div>
          </div>

          {/* Bottom App Navigation */}
          <div className="mt-2.5 pt-1.5 border-t border-slate-100 flex justify-around text-[9px] text-slate-400">
            <span className="text-[#1A4338] font-bold">● Home</span>
            <span>Search</span>
            <span>Bag</span>
            <span>Profile</span>
          </div>
        </div>

        {/* Secondary Tilted Phone Screen (Right Background) */}
        <div className="absolute -right-2 sm:right-2 top-8 w-[165px] sm:w-[185px] h-[250px] bg-white rounded-[26px] border border-slate-300/80 shadow-lg p-2.5 transform rotate-12 scale-90 opacity-60 sm:opacity-85 pointer-events-none transition-transform duration-500 group-hover:rotate-14 group-hover:translate-x-2">
          <div className="w-10 h-2 bg-slate-800 rounded-full mx-auto mb-2" />
          <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 mb-2">
            <p className="text-[8px] font-bold text-slate-800">Checkout</p>
            <p className="text-[7px] text-slate-400">Express Delivery</p>
          </div>
          <div className="h-10 bg-emerald-800 text-white rounded-lg flex items-center justify-center text-[8px] font-bold">
            Pay $62.00 →
          </div>
        </div>
      </div>
    );
  }

  if (mockupType === 'beauty-web') {
    return (
      <div className="w-full max-w-[370px] bg-white rounded-2xl shadow-xl border border-slate-300/90 overflow-hidden transform transition-transform duration-500 group-hover:scale-[1.03]">
        {/* Browser Top Bar */}
        <div className="bg-[#EAEAEA] px-3 py-1.5 flex items-center justify-between border-b border-slate-200">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-rose-400" />
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
          </div>
          <span className="text-[9px] bg-white px-3 py-0.5 rounded text-slate-500 font-mono">
            https://lumiere-beauty.store
          </span>
          <span className="text-[8px] text-slate-400">🔒</span>
        </div>

        {/* Web Landing Page Hero */}
        <div className="p-4 bg-gradient-to-br from-[#143B31] via-[#1A4338] to-[#0F2D25] text-white">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[9px] font-black tracking-widest text-emerald-300">
              LUMIÈRE COSMETICS
            </span>
            <span className="text-[8px] bg-white/10 text-emerald-200 px-2 py-0.5 rounded-full border border-white/20">
              App Store Top 10
            </span>
          </div>

          <h4 className="text-sm sm:text-base font-black leading-snug">
            Your Ultimate Beauty & Skincare Shop App!
          </h4>
          <p className="text-[9px] text-emerald-200/90 mt-1 max-w-xs leading-normal">
            Download our app for personalized shade matchers, botanical ingredients, and express checkout.
          </p>

          <div className="mt-3 flex items-center gap-2">
            <span className="text-[9px] font-black bg-[#F59E0B] text-slate-950 px-3 py-1 rounded-full shadow">
              Download App
            </span>
            <span className="text-[8px] text-emerald-200">★★★★★ 4.9 (14k Reviews)</span>
          </div>
        </div>

        {/* Feature Cards Showcase */}
        <div className="p-3 bg-slate-50 grid grid-cols-3 gap-2">
          <div className="bg-white p-2 rounded-xl border border-slate-200/80 text-center">
            <span className="text-xs">🌿</span>
            <p className="text-[8px] font-bold text-slate-800 mt-0.5">100% Organic</p>
          </div>
          <div className="bg-white p-2 rounded-xl border border-slate-200/80 text-center">
            <span className="text-xs">⚡</span>
            <p className="text-[8px] font-bold text-slate-800 mt-0.5">Instant Sync</p>
          </div>
          <div className="bg-white p-2 rounded-xl border border-slate-200/80 text-center">
            <span className="text-xs">🛡️</span>
            <p className="text-[8px] font-bold text-slate-800 mt-0.5">Derm Tested</p>
          </div>
        </div>
      </div>
    );
  }

  if (mockupType === 'coffee-app') {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Secondary Tilted Phone Screen (Left Background) */}
        <div className="absolute -left-2 sm:left-2 top-6 w-[170px] sm:w-[195px] h-[260px] bg-white rounded-[26px] border border-slate-300/80 shadow-lg p-2.5 transform -rotate-12 scale-90 opacity-60 sm:opacity-85 pointer-events-none transition-transform duration-500 group-hover:-rotate-14 group-hover:-translate-x-2">
          <div className="w-10 h-2 bg-slate-800 rounded-full mx-auto mb-2" />
          <div className="bg-[#18392F] text-white p-2 rounded-xl mb-2 text-center">
            <p className="text-[8px] font-bold">Special Offer 20% OFF</p>
          </div>
          <div className="p-1.5 rounded-lg bg-amber-50 border border-amber-200">
            <p className="text-[8px] font-bold text-amber-900">Loyalty Beans: 240</p>
            <p className="text-[7px] text-amber-700">1 free drink reward ready</p>
          </div>
        </div>

        {/* Primary Phone Screen (Center Front) */}
        <div className="relative z-10 w-[200px] sm:w-[220px] bg-white rounded-[28px] border-4 border-slate-900 shadow-2xl p-3 transform transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1">
          <div className="w-16 h-3 bg-slate-900 rounded-full mx-auto mb-2" />

          {/* Top Bar with Barista Avatar */}
          <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-slate-100">
            <div className="flex items-center gap-1.5">
              <span className="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center text-[10px] font-bold">
                ☕
              </span>
              <div>
                <p className="text-[9px] font-black text-slate-800">CAFFÈ FLOW</p>
                <p className="text-[7px] text-slate-400">Downtown Branch</p>
              </div>
            </div>
            <span className="text-[8px] font-bold bg-[#F59E0B] text-slate-950 px-2 py-0.5 rounded-full">
              Pickup #12
            </span>
          </div>

          {/* Hero Banner */}
          <div className="bg-[#18392F] text-white p-2.5 rounded-2xl mb-2 flex items-center justify-between">
            <div>
              <p className="text-[7px] text-emerald-300 font-semibold">Ready in 4 mins</p>
              <p className="text-[10px] font-black mt-0.5">Caramel Macchiato</p>
              <p className="text-[7px] text-emerald-200">Oat milk • Double espresso</p>
            </div>
            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-base">
              ☕
            </div>
          </div>

          {/* Menu Items */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between p-1.5 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-1.5">
                <span className="text-sm">🧋</span>
                <div>
                  <p className="text-[9px] font-bold text-slate-800">Iced Vanilla Cold Brew</p>
                  <p className="text-[7px] text-slate-400">Cold foam topping</p>
                </div>
              </div>
              <span className="text-[8px] font-extrabold text-[#18392F]">$4.80</span>
            </div>
            <div className="flex items-center justify-between p-1.5 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-1.5">
                <span className="text-sm">🥐</span>
                <div>
                  <p className="text-[9px] font-bold text-slate-800">Almond Croissant</p>
                  <p className="text-[7px] text-slate-400">Fresh baked daily</p>
                </div>
              </div>
              <span className="text-[8px] font-extrabold text-[#18392F]">$3.90</span>
            </div>
          </div>

          {/* Live Order Status Bar */}
          <div className="mt-2.5 pt-1.5 border-t border-slate-100 flex items-center justify-between text-[8px] text-slate-500 font-semibold">
            <span className="text-emerald-700 font-bold">● Brewing now</span>
            <span>Counter Pickup</span>
          </div>
        </div>

        {/* Secondary Tilted Phone Screen (Right Background) */}
        <div className="absolute -right-2 sm:right-2 top-8 w-[165px] sm:w-[185px] h-[250px] bg-white rounded-[26px] border border-slate-300/80 shadow-lg p-2.5 transform rotate-12 scale-90 opacity-60 sm:opacity-85 pointer-events-none transition-transform duration-500 group-hover:rotate-14 group-hover:translate-x-2">
          <div className="w-10 h-2 bg-slate-800 rounded-full mx-auto mb-2" />
          <div className="bg-[#18392F] text-white p-2 rounded-xl mb-2 text-center">
            <p className="text-[8px] font-bold">Barista Queue</p>
          </div>
          <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
            <p className="text-[8px] font-bold text-slate-800">Order #12 Confirmed</p>
            <p className="text-[7px] text-emerald-700 font-bold mt-1">Est. arrival: 10:15 AM</p>
          </div>
        </div>
      </div>
    );
  }

  if (mockupType === 'coffee-web') {
    return (
      <div className="w-full max-w-[370px] bg-white rounded-2xl shadow-xl border border-slate-300/90 overflow-hidden transform transition-transform duration-500 group-hover:scale-[1.03]">
        <div className="bg-[#EAEAEA] px-3 py-1.5 flex items-center justify-between border-b border-slate-200">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-rose-400" />
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
          </div>
          <span className="text-[9px] bg-white px-3 py-0.5 rounded text-slate-500 font-mono">
            https://caffeflow-roasters.com
          </span>
          <span className="text-[8px] text-slate-400">🔒</span>
        </div>

        <div className="p-4 bg-gradient-to-br from-[#12332A] via-[#18392F] to-[#0D241E] text-white">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[9px] font-black tracking-widest text-[#F59E0B]">
              CAFFÈ FLOW ROASTERS
            </span>
            <span className="text-[8px] bg-emerald-800/80 text-emerald-200 px-2 py-0.5 rounded-full border border-emerald-700">
              Artisan Bean Portal
            </span>
          </div>

          <h4 className="text-sm sm:text-base font-black leading-snug">
            Your Ultimate Coffee Ordering & Roast Solution!
          </h4>
          <p className="text-[9px] text-slate-300 mt-1 max-w-xs leading-normal">
            Specialty grade whole bean subscriptions and contactless café pickup app.
          </p>

          <div className="mt-3 flex items-center justify-between">
            <span className="text-[9px] font-black bg-[#F59E0B] text-slate-950 px-3 py-1 rounded-full shadow">
              Order Online
            </span>
            <span className="text-[8px] text-emerald-200 font-bold">100% Fair Trade Certified</span>
          </div>
        </div>

        <div className="p-3 bg-slate-50 grid grid-cols-3 gap-2">
          <div className="bg-white p-2 rounded-xl border border-slate-200/80 text-center">
            <span className="text-xs">☕</span>
            <p className="text-[8px] font-bold text-slate-800 mt-0.5">Fresh Roast</p>
          </div>
          <div className="bg-white p-2 rounded-xl border border-slate-200/80 text-center">
            <span className="text-xs">📱</span>
            <p className="text-[8px] font-bold text-slate-800 mt-0.5">App Loyalty</p>
          </div>
          <div className="bg-white p-2 rounded-xl border border-slate-200/80 text-center">
            <span className="text-xs">🚀</span>
            <p className="text-[8px] font-bold text-slate-800 mt-0.5">Skip Lines</p>
          </div>
        </div>
      </div>
    );
  }

  if (mockupType === 'ai-platform') {
    return (
      <div className="w-full max-w-[360px] bg-slate-950 rounded-2xl shadow-2xl border border-slate-800 p-4 text-white transform transition-transform duration-500 group-hover:scale-[1.03]">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse" />
            <span className="text-[11px] font-bold text-sky-400">GEARGUARD AI</span>
          </div>
          <span className="text-[9px] font-mono bg-sky-950 text-sky-300 border border-sky-800 px-2 py-0.5 rounded">
            FastAPI + LangChain
          </span>
        </div>

        <div className="bg-slate-900 rounded-xl p-3 border border-slate-800 mb-3">
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-[10px] text-slate-400">Policy Extraction Confidence</span>
            <span className="text-[11px] font-bold text-emerald-400">99.4% Verified</span>
          </div>
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div className="w-[99%] h-full bg-gradient-to-r from-sky-400 via-teal-400 to-emerald-400" />
          </div>
        </div>

        <div className="space-y-2 font-mono text-[9px]">
          <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 flex items-center justify-between">
            <span>Clause 24.1: High Liability Exclusions</span>
            <span className="text-amber-400 font-bold">Flagged (Risk 0.76)</span>
          </div>
          <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 flex items-center justify-between">
            <span>Clause 12.8: Statutory Indemnity</span>
            <span className="text-emerald-400 font-bold">Passed</span>
          </div>
        </div>

        <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between text-[9px] text-slate-400">
          <span>Vectors: 250k indexed</span>
          <span className="text-sky-400 font-semibold">LLM Chat Active →</span>
        </div>
      </div>
    );
  }

  // Cloud IDE
  return (
    <div className="w-full max-w-[360px] bg-slate-950 rounded-2xl shadow-2xl border border-slate-800 p-4 text-white transform transition-transform duration-500 group-hover:scale-[1.03]">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-indigo-400" />
          <span className="text-[11px] font-bold text-indigo-400">DEVSYNC CLOUD WORKSPACE</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-4 h-4 rounded-full bg-amber-400 text-[8px] font-bold text-slate-950 flex items-center justify-center">
            S
          </span>
          <span className="w-4 h-4 rounded-full bg-emerald-400 text-[8px] font-bold text-slate-950 flex items-center justify-center">
            P
          </span>
        </div>
      </div>

      <div className="bg-slate-900/90 rounded-xl p-3 font-mono text-[9px] border border-slate-800 text-slate-300 space-y-1">
        <p className="text-purple-400">
          import <span className="text-white">&#123; WebSocketServer &#125;</span> from 'ws';
        </p>
        <p className="text-sky-400">
          const <span className="text-amber-300">collaborator</span> = usePeerPresence();
        </p>
        <p className="text-slate-500">// Peer cursor syncing sub-45ms latency</p>
        <p className="text-emerald-400">
          broadcast('cursor:update', &#123; x, y, user: 'Sarvesh' &#125;);
        </p>
      </div>

      <div className="mt-3 flex items-center justify-between text-[9px]">
        <span className="text-emerald-400 font-bold">● Active Sandbox (38ms)</span>
        <span className="bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded border border-indigo-800">
          Docker Container
        </span>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------------
// Interactive Case Study Modal Component
// ----------------------------------------------------------------------------
function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-md transition-all animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-[28px] sm:rounded-[36px] shadow-2xl border border-slate-200 overflow-y-auto p-6 sm:p-8 text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-5">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors shrink-0 cursor-pointer"
            title="Close modal"
          >
            <FiX className="text-lg" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="mt-6 space-y-6">
          {/* Metrics Highlight Bar */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 bg-slate-50 rounded-2xl p-4 border border-slate-200/70">
            {project.metrics.map((metric, i) => (
              <div key={i} className="text-center">
                <p className="text-xl sm:text-2xl font-black text-slate-900">
                  {metric.value}
                </p>
                <p className="text-xs font-semibold text-slate-500 mt-0.5">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          {/* Overview */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
              Project Overview
            </h4>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Challenge & Solution */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
              UX Challenge & Engineered Solution
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed bg-[#FFFBEB]/70 p-4 rounded-2xl border border-[#F59E0B]/40">
              {project.problemSolved}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
              Core Features & Technical Architecture
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium"
                >
                  <FiCheckCircle className="text-emerald-500 shrink-0 mt-0.5 text-base" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer with Actions (Option 3) */}
        <div className="mt-8 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-slate-400 font-medium">
            {project.inProgress
              ? 'This project is actively in development · Codebase preview available'
              : 'Full codebase and design assets available'}
          </p>
          <div className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-300 hover:border-slate-800 text-slate-800 font-bold text-sm transition-all"
            >
              <FiGithub /> Source Code
            </a>
            {project.inProgress ? (
              <div
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-50 border border-amber-300/80 text-amber-900 font-bold text-sm select-none"
                title="Currently being built"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
                </span>
                <span>Demo Coming Soon</span>
              </div>
            ) : (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-all shadow-md"
              >
                <FiExternalLink /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
