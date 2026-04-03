import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  kpis?: { label: string; value: string }[];
  features?: string[];
  link?: string;
  linkLabel?: string;
  tags?: string[];
  placeholder?: boolean;
}

export default function ProjectCard({
  title,
  description,
  kpis,
  features,
  link,
  linkLabel = "Learn More",
  tags,
  placeholder = false,
}: ProjectCardProps) {
  return (
    <div
      className={`group relative flex flex-col rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
        placeholder
          ? "border-dashed border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/20"
          : "border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-800/50 hover:border-primary-300 dark:hover:border-primary-700"
      }`}
    >
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400 flex-1">
          {description}
        </p>

        {kpis && kpis.length > 0 && (
          <div className="mt-4 grid grid-cols-2 gap-3">
            {kpis.map((kpi) => (
              <div
                key={kpi.label}
                className="rounded-lg bg-primary-50 dark:bg-primary-950/30 p-3 text-center"
              >
                <p className="text-lg font-bold text-primary-700 dark:text-primary-300">
                  {kpi.value}
                </p>
                <p className="text-xs text-primary-600/70 dark:text-primary-400/70 mt-0.5">
                  {kpi.label}
                </p>
              </div>
            ))}
          </div>
        )}

        {features && features.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {features.map((feature) => (
              <span
                key={feature}
                className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300"
              >
                {feature}
              </span>
            ))}
          </div>
        )}

        {tags && tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {link && (
          <div className="mt-6">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
            >
              {linkLabel}
              <ExternalLink size={14} />
            </a>
          </div>
        )}

        {placeholder && (
          <div className="mt-6">
            <p className="text-sm italic text-slate-400 dark:text-slate-500">
              Coming soon...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
