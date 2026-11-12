"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Brain,
  Rocket,
  Github,
  MapPin,
  Target,
  Zap,
  Star,
} from "lucide-react";

const skills = [
  { name: "Next.js", level: "Expert" },
  { name: "React", level: "Expert" },
  { name: "TypeScript", level: "Advanced" },
  { name: "Laravel", level: "Advanced" },
  { name: "Python", level: "Strong" },
  { name: "Mathematics", level: "Elite" },
];

const timeline = [
  {
    year: "2010",
    title: "Born in Iran",
    desc: "Started the journey.",
  },
  {
    year: "2024",
    title: "Full-Stack Developer",
    desc: "Building real products with Next.js & Laravel.",
  },
  {
    year: "2025",
    title: "MathGalaxy",
    desc: "Created a mathematical fractal engine in Python.",
  },
  {
    year: "2026+",
    title: "United States",
    desc: "The next chapter. Silicon Valley. Scale. Freedom.",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Subtle grid background */}
      <div className="fixed inset-0 grid-bg pointer-events-none opacity-40" />

      {/* ===== NAV ===== */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/70 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-display font-bold text-lg tracking-tight">
            AMIR<span className="text-red-600">.</span>USA
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
            <a href="#story" className="hover:text-white transition">Story</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#vision" className="hover:text-white transition">Vision</a>
          </div>

          <a
            href="https://github.com/Amirhosseinbakhshi2011"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition"
          >
            <Github size={16} />
            GitHub
          </a>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center px-6 pt-16">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white/60 tracking-wide"
          >
            <MapPin size={12} className="text-red-500" />
            IRAN → UNITED STATES
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight max-w-4xl"
          >
            Building the
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">
              American Dream
            </span>
            <br />
            from the ground up.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mt-8 text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed"
          >
            16 years old. Full-stack developer. Math obsessive.
            Currently in Iran. Next stop: the United States.
            No shortcuts. No excuses. Just code, discipline, and ambition.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#vision"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-white/90 transition"
            >
              See the vision
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://github.com/Amirhosseinbakhshi2011"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full text-white/80 hover:bg-white/5 transition"
            >
              <Github size={16} />
              View GitHub
            </a>
          </motion.div>
        </div>
      </section>

      {/* ===== STORY / TIMELINE ===== */}
      <section id="story" className="relative py-28 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold mb-16"
          >
            The Story
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition"
              >
                <div className="text-sm font-medium text-red-500 mb-3 tracking-wider">
                  {item.year}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SKILLS ===== */}
      <section id="skills" className="relative py-28 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-3xl md:text-4xl font-bold mb-6"
              >
                Technical Stack
              </motion.h2>
              <p className="text-white/50 leading-relaxed mb-8">
                I build modern web applications with a strong foundation in both frontend and backend.
                Mathematics is not just a subject for me — it is the operating system of my thinking.
              </p>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm"
                  >
                    <span className="text-white/90">{skill.name}</span>
                    <span className="text-white/30 ml-2">· {skill.level}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Code2, label: "Full-Stack", sub: "Next.js + Laravel" },
                { icon: Brain, label: "Mathematics", sub: "Deep interest" },
                { icon: Rocket, label: "Ambition", sub: "USA + Scale" },
                { icon: Target, label: "Focus", sub: "No distractions" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col gap-3"
                >
                  <item.icon size={22} className="text-white/70" />
                  <div>
                    <div className="font-medium">{item.label}</div>
                    <div className="text-sm text-white/40">{item.sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== VISION ===== */}
      <section id="vision" className="relative py-28 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white/50 mb-8 tracking-wide">
              <Star size={12} className="text-yellow-500" />
              THE GOAL
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              From a bedroom in Iran
              <br />
              to the heart of
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-white to-blue-500">
                Silicon Valley
              </span>
            </h2>

            <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed mb-12">
              I am 16. I write production code. I study mathematics seriously.
              I have never been in a relationship because I believe the first priority is building myself —
              my skills, my company, and my net worth.
              <br /><br />
              The United States is not just a destination.
              It is the arena where the biggest games are played.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/40">
              <div className="flex items-center gap-2">
                <Zap size={14} className="text-yellow-500" />
                Relentless execution
              </div>
              <div className="flex items-center gap-2">
                <Code2 size={14} className="text-blue-400" />
                World-class code
              </div>
              <div className="flex items-center gap-2">
                <Rocket size={14} className="text-red-500" />
                Long-term vision
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Let’s build the future.
          </h2>
          <p className="text-white/50 mb-10">
            Open to opportunities, collaborations, and conversations that move the needle.
          </p>
          <a
            href="https://github.com/Amirhosseinbakhshi2011"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-white/90 transition"
          >
            <Github size={18} />
            Follow the journey on GitHub
          </a>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="relative py-10 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/30">
          <div>
            Built with discipline by Amirhossein Bakhshi
          </div>
          <div className="flex items-center gap-6">
            <span>Iran → USA</span>
            <span>2026</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
