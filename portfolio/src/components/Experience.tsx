import FadeIn from "./FadeIn";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Founder & Head of Product",
    company: "Boardroom",
    period: "2020 – Present",
    link: "https://boardroom.cx",
    bullets: [
      "Conceived, designed, and launched a SaaS analytics dashboard for e-commerce brands integrating key data sources, automated reporting, and AI-driven SEO tools.",
      "Scaled from concept to 1,200+ paying customers and $110K+ in revenue.",
      "Managed a cross-functional team of developers, QA testers, UX/UI designers, salespeople, and freelancers.",
      "Defined and prioritized the product roadmap, wrote detailed specs with Jira, and analyzed customer feedback and usage data to guide development.",
      "Built and maintained integrations with Shopify, Amazon Seller Central, Amazon Ads, QuickBooks, Meta for Business, TikTok, Google Ads, GA4, Photoroom, and OpenAI.",
      "Launched agentic autoblogger, AI-powered SEO, dynamic data visualization, and automated email reporting features.",
      "Developed a white-labeled version of the platform for accounting firms and marketing agencies.",
      "Drove 150K+ YouTube views and thousands of monthly website visits via SEO, influencer partnerships, and content marketing.",
      "Documented customer case studies (278% YoY sales growth, 10x traffic gains in 4 months).",
      "Oversaw AWS cloud infrastructure (EC2, RDS, S3, Redis, SQS) and codebase built with PHP (Laravel), MySQL, Tailwind, and HTML/CSS/JS.",
    ],
  },
  {
    title: "Systems Implementation Manager",
    company: "Consilio, LLC",
    period: "2015 – 2025",
    bullets: [
      "Promoted twice from Analyst → Associate → Consulting Manager, then became an Independent Consultant in 2020.",
      "Led large-scale enterprise workflow automation implementations for Fortune 500 legal departments using Onit.",
      "Designed and deployed contract management, matter management, and custom app workflow solutions.",
      "Partnered with stakeholders across Legal Operations, IT, and Compliance to gather requirements and architect scalable products.",
      "Oversaw end-to-end project delivery on 20+ implementations, from requirements through QA, UAT, and deployment.",
      "Managed project teams of analysts and developers; trained client teams and provided post-launch support.",
      "Delivered applications used by thousands of users at Procter & Gamble, Nissan, Wells Fargo, Lockheed Martin, Johnson & Johnson, and Delaware North.",
      "Automated manual legal, compliance, and financial processes (Sarbanes-Oxley compliance, balance sheet reviews, contract approvals).",
    ],
  },
  {
    title: "Founder",
    company: "Conscious Products (Amazon FBA / Shopify)",
    period: "2018 – 2021",
    bullets: [
      "Founded and operated several consumer product brands including Conscious Products, selling biodegradable disposable plates on Amazon.",
      "Drove $100K+ in revenue and sold 4,000+ units via Amazon and Shopify.",
      "Managed product sourcing, listings optimization, and ad campaigns while handling all operations and logistics.",
      "Gained firsthand experience with the pain points that inspired the creation of Boardroom.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-slate-50/50 dark:bg-slate-900/30"
    >
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400 text-center">
            Experience
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-center text-slate-900 dark:text-white">
            Professional Journey
          </h2>
        </FadeIn>

        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700 hidden sm:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <FadeIn key={exp.company} delay={i * 100}>
                <div className="relative sm:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-8 top-1 -translate-x-1/2 hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/50 border-2 border-primary-500 dark:border-primary-600">
                    <Briefcase
                      size={14}
                      className="text-primary-600 dark:text-primary-400"
                    />
                  </div>

                  <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <p className="text-primary-600 dark:text-primary-400 font-medium">
                          {exp.link ? (
                            <a
                              href={exp.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              {exp.company}
                            </a>
                          ) : (
                            exp.company
                          )}
                        </p>
                      </div>
                      <span className="text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700/50 px-3 py-1 rounded-full whitespace-nowrap self-start">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="mt-4 space-y-2">
                      {exp.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-primary-400 dark:before:bg-primary-600 before:rounded-full"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
