import FadeIn from "./FadeIn";
import ContactForm from "./ContactForm";
import { Mail, Phone, MapPin, Link } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "charles.camisasca@gmail.com",
    href: "mailto:charles.camisasca@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(727) 481-2135",
    href: "tel:+17274812135",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Travelers Rest, SC",
  },
  {
    icon: Link,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/charles-camisasca-a6289381/",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400 text-center">
            Contact
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-center text-slate-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-center text-slate-600 dark:text-slate-400">
            Interested in working together or have a question? I&apos;d love to hear from you.
          </p>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-12">
          <FadeIn delay={100} className="lg:col-span-2">
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center">
                    <item.icon
                      size={18}
                      className="text-primary-600 dark:text-primary-400"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-slate-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-slate-900 dark:text-white">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Open to remote opportunities, consulting engagements, and
                  collaborations on SaaS and enterprise software projects.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200} className="lg:col-span-3">
            <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-6 sm:p-8">
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
