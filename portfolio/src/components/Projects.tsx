import FadeIn from "./FadeIn";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Boardroom",
    description:
      "AI-powered analytics and SEO platform for e-commerce brands. Conceived, designed, and launched a SaaS dashboard integrating key data sources, automated reporting, and AI-driven content creation and SEO tools.",
    kpis: [
      { label: "Paying Customers", value: "1,200+" },
      { label: "Users", value: "3,500+" },
      { label: "YouTube Views", value: "150K+" },
      { label: "Client Traffic Growth", value: "10x" },
    ],
    features: [
      "AI Analytics",
      "Agentic Autoblogger",
      "SEO Tools",
      "Shopify Integration",
      "Amazon Integration",
      "OpenAI",
      "White-Label Platform",
      "Automated Email Reports",
    ],
    link: "https://www.ecommboardroom.com",
    linkLabel: "Visit Boardroom",
  },
  {
    title: "Onit Enterprise Implementations",
    description:
      "Led large-scale enterprise workflow automation implementations for Fortune 500 legal departments. Designed and deployed contract management, matter management, and custom workflow solutions.",
    kpis: [
      { label: "Implementations Led", value: "20+" },
      { label: "Enterprise Clients", value: "Fortune 500" },
      { label: "Enterprise Users Served", value: "10,000+" },
      { label: "Years Serving Clients", value: "10+" },
    ],
    tags: [
      "Workflow Automation",
      "Contract Management",
      "Legal Operations",
      "Procter & Gamble",
      "Nissan",
      "Wells Fargo",
      "Lockheed Martin",
      "Johnson & Johnson",
    ],
    link: "https://www.onit.com",
    linkLabel: "Visit Onit",
  },
  {
    title: "Conscious Products",
    description:
      "Founded and operated consumer product brands selling biodegradable products on Amazon and Shopify. Managed end-to-end operations from product sourcing and listing optimization to ad campaigns and logistics.",
    kpis: [
      { label: "Revenue", value: "$100K+" },
      { label: "Units Sold", value: "4,000+" },
    ],
    tags: [
      "Amazon FBA",
      "Shopify",
      "E-Commerce",
      "Product Sourcing",
      "PPC Advertising",
    ],
  },
  {
    title: "What's Next",
    description:
      "I'm always building. Boardroom continues to evolve, and I'm also exploring a few personal projects, including a Predictions Market Trading Assistant and an app to help a charitable organization manage donations and contacts.",
    placeholder: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400 text-center">
            Projects
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-center text-slate-900 dark:text-white">
            What I&apos;ve Built
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-center text-slate-600 dark:text-slate-400">
            From SaaS platforms to enterprise solutions and e-commerce brands.
          </p>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 100}>
              <ProjectCard {...project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
