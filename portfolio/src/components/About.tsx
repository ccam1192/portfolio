import FadeIn from "./FadeIn";
import {
  Code,
  Database,
  Cloud,
  BarChart3,
  Wrench,
  Users,
  GraduationCap,
  Award,
} from "lucide-react";

const techStack = [
  { name: "PHP / Laravel", icon: Code },
  { name: "MySQL", icon: Database },
  { name: "Tailwind CSS", icon: Code },
  { name: "HTML/CSS/JS", icon: Code },
  { name: "Chart.js", icon: BarChart3 },
  { name: "AWS (EC2, RDS, S3, SQS)", icon: Cloud },
  { name: "Git", icon: Code },
  { name: "Nginx", icon: Wrench },
];

const tools = [
  "Shopify",
  "Amazon Seller Central",
  "QuickBooks",
  "Amazon Ads",
  "Meta for Business",
  "Google Ads",
  "GA4",
  "TikTok Ads",
  "OpenAI",
  "SEO Review Tools",
  "Jira",
  "Photoroom",
  "Xero",
];

const pmSkills = [
  "Roadmapping",
  "Product Specification Writing",
  "Agile Backlog Management",
  "Data Analysis",
  "Cross-Functional Leadership",
  "User Interviews",
  "KPI Definition",
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400 text-center">
            About Me
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-center text-slate-900 dark:text-white">
            Background & Skills
          </h2>
        </FadeIn>

        <FadeIn delay={100}>
          <p className="mt-6 max-w-3xl mx-auto text-center text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            I spent nearly a decade as an enterprise technology consultant,
            designing and deploying workflow automation systems for Fortune 500
            legal departments. That work gave me deep technical fluency and a
            knack for translating complex business problems into scalable
            software. Eventually, the entrepreneurial bug bit. I launched a few
            e-commerce brands and quickly got sick of logging into 10+ apps
            just to understand profitability. So I built{" "}
            <a href="https://www.ecommboardroom.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline font-medium">Boardroom</a>
            &mdash;an AI-powered dashboard that centralizes analytics, automates
            reporting, and delivers SEO tools for e-commerce sellers. I&apos;ve
            loved every minute of building that business, and it&apos;s where my
            technical background and product instinct come together.
          </p>
        </FadeIn>

        {/* Boardroom Tech Stack */}
        <div className="mt-16">
          <FadeIn>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2 mb-6">
              <Code size={20} className="text-primary-600 dark:text-primary-400" />
              Boardroom Tech Stack
            </h3>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {techStack.map((tech, i) => (
              <FadeIn key={tech.name} delay={i * 50}>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 hover:border-primary-300 dark:hover:border-primary-700 hover:shadow-md transition-all">
                  <tech.icon
                    size={20}
                    className="text-primary-600 dark:text-primary-400 flex-shrink-0"
                  />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {tech.name}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Tools & Integrations */}
        <div className="mt-12">
          <FadeIn>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2 mb-6">
              <Wrench size={20} className="text-primary-600 dark:text-primary-400" />
              Tools & Integrations
            </h3>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 hover:border-primary-300 dark:hover:border-primary-700 transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* PM Skills */}
        <div className="mt-12">
          <FadeIn>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2 mb-6">
              <Users size={20} className="text-primary-600 dark:text-primary-400" />
              Product Management Skills
            </h3>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="flex flex-wrap gap-3">
              {pmSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-primary-50 dark:bg-primary-950/30 border border-primary-200 dark:border-primary-800/50 text-primary-700 dark:text-primary-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Education & Certifications */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <FadeIn delay={100}>
            <div className="p-6 rounded-xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                <GraduationCap
                  size={20}
                  className="text-primary-600 dark:text-primary-400"
                />
                Education
              </h3>
              <p className="font-medium text-slate-900 dark:text-white">
                University of Notre Dame
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Mendoza College of Business
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Bachelor of Business Administration (BBA), Accounting &mdash; 2015
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="p-6 rounded-xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                <Award
                  size={20}
                  className="text-primary-600 dark:text-primary-400"
                />
                Certifications
              </h3>
              <p className="font-medium text-slate-900 dark:text-white">
                Onit Level 3 App Builder
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Certified App Builder
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Project Manager
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
