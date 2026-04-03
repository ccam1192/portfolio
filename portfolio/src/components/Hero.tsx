import Image from "next/image";
import FadeIn from "./FadeIn";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-primary-950/20" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary-200/30 dark:bg-primary-800/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-primary-100/40 dark:bg-primary-900/10 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="flex-1 text-center lg:text-left">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400 mb-4">
              Welcome to my portfolio
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              Charles
              <br />
              <span className="text-primary-600 dark:text-primary-400">
                Camisasca
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="mt-4 text-xl sm:text-2xl font-medium text-slate-600 dark:text-slate-300">
              SaaS Founder & Enterprise Software Consultant
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-500 dark:text-slate-400">
              Product-focused entrepreneur with 10+ years of experience
              designing, building, and launching data-driven SaaS applications.
              From architecting enterprise systems for Fortune 500 legal
              departments to founding an AI-powered analytics platform used by
              1,200+ small businesses.
            </p>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors shadow-lg shadow-primary-600/25"
              >
                View Projects
                <ArrowDown size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={200} className="flex-shrink-0">
          <div className="relative">
            <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-2xl shadow-primary-600/25 ring-4 ring-white dark:ring-slate-800">
              <Image
                src="/headshot.png"
                alt="Charles Camisasca"
                width={288}
                height={288}
                priority
                className="w-full h-full object-cover object-[center_15%]"
              />
            </div>
            <div className="absolute -inset-4 rounded-full border-2 border-dashed border-primary-200 dark:border-primary-800 animate-[spin_30s_linear_infinite]" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
