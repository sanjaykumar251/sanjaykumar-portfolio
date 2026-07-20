import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Download,
  CheckCircle2,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import SectionHeader from "../ui/SectionHeader";
import GlassCard from "../ui/GlassCard";
import { personalInfo } from "../../data/portfolio";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/[\s-]/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
    href: undefined,
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="section">
      <div className="section-inner">
        <SectionHeader
          title="Contact"
          subtitle="Let's connect — I'd love to hear from you"
        />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left – Contact info */}
          <div className="lg:col-span-2 space-y-5">
            {/* Info cards */}
            {contactInfo.map((item, i) => (
              <GlassCard key={item.label} delay={i * 0.1} className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-400 flex-shrink-0">
                    <item.icon size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] uppercase tracking-wider text-white/30 font-medium">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm text-white/70 hover:text-white transition truncate block"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-white/70 truncate">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              </GlassCard>
            ))}

            {/* Social links */}
            <GlassCard delay={0.35} className="p-4">
              <p className="text-[11px] uppercase tracking-wider text-white/30 font-medium mb-3">
                Social Profiles
              </p>
              <div className="flex gap-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white/50 hover:text-white hover:bg-white/[0.08] transition text-xs font-medium"
                >
                  <FaGithub size={14} /> GitHub
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white/50 hover:text-white hover:bg-white/[0.08] transition text-xs font-medium"
                >
                  <FaLinkedinIn size={14} /> LinkedIn
                </a>
              </div>
            </GlassCard>

            {/* Resume download */}
            <motion.a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.4 }}
              className="group flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold text-sm shadow-lg shadow-primary-500/20 hover:shadow-primary-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <Download
                size={16}
                className="group-hover:-translate-y-0.5 transition-transform"
              />
              Download Resume
            </motion.a>
          </div>

          {/* Right – Contact form */}
          <div className="lg:col-span-3">
            <GlassCard hoverEffect={false} delay={0.2} className="p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-white/90 mb-1">
                Send me a message
              </h3>
              <p className="text-xs text-white/40 mb-6">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs text-white/40 font-medium mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-white/80 placeholder-white/20 focus:outline-none focus:border-primary-500/40 focus:bg-white/[0.05] transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs text-white/40 font-medium mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-white/80 placeholder-white/20 focus:outline-none focus:border-primary-500/40 focus:bg-white/[0.05] transition"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs text-white/40 font-medium mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="How can I help you?"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-white/80 placeholder-white/20 resize-none focus:outline-none focus:border-primary-500/40 focus:bg-white/[0.05] transition"
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    submitted
                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                      : "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/20 hover:shadow-primary-500/30"
                  }`}
                  disabled={submitted}
                >
                  {submitted ? (
                    <>
                      <CheckCircle2 size={16} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
