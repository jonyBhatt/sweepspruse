import { motion } from "framer-motion";
import {
  ArrowLeft,
  ShieldCheck,
  Camera,
  MessageCircle,
  Lock,
  Clock,
  Mail,
} from "lucide-react";
import { createFileRoute, Link } from '@tanstack/react-router'
import { policySections } from "#/utils/privacy-policy.types";

export const Route = createFileRoute('/(main)/privacy-policy')({
  component: PrivacyPolicyPage,
})


function PrivacyPolicyPage() {
  return <main className="min-h-screen bg-[#F5F4ED] text-[#1A2E22] py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Back Link */}
        <div className="mb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#5A655E] hover:text-[#1A2E22] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Sweep Spruse</span>
          </Link>
        </div>

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-3xl space-y-5 pb-12 border-b border-[#E6E4DA]"
        >
          <div className="inline-flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-white border border-[#E5E3D8] shadow-2xs flex items-center justify-center text-[#2F6B48]">
              <ShieldCheck className="w-4 h-4" />
            </span>
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#5A655E]">
              PRIVACY & TRUST
            </span>
          </div>

          <h1
            className="font-serif font-normal tracking-tight leading-[1.06] text-[#1A2E22]"
            style={{ fontSize: "clamp(2.5rem, 4.5vw, 3.75rem)" }}
          >
            Privacy Policy
          </h1>

          <p className="text-sm sm:text-base text-[#5A655E] leading-relaxed">
            Your home, property details, and contact information stay private.
            Here is a clear, plain-language breakdown of what we collect when
            you request a quote or consultation—and how we protect it.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-[#6B756F]">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#2F6B48]" />
              <span>Last updated: November 2026</span>
            </span>
            <span className="h-3.5 w-[1px] bg-[#D6D4C8]" aria-hidden="true" />
            <span>Applies to sweepspruse.com & quote requests</span>
          </div>
        </motion.div>

        {/* Quick-Read Highlights Strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10"
        >
          <div className="rounded-2xl bg-[#FAF9F5] border border-[#E6E4DA] p-5 flex items-start gap-3.5">
            <span className="w-9 h-9 rounded-xl bg-[#2F6B48]/10 text-[#2F6B48] flex items-center justify-center shrink-0">
              <Lock className="w-4 h-4" />
            </span>
            <div>
              <h2 className="font-sans font-semibold text-sm text-[#1A2E22]">
                Zero Data Selling
              </h2>
              <p className="text-xs text-[#5A655E] mt-1 leading-relaxed">
                We never sell, rent, or trade your contact info or property
                address to third parties.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-[#FAF9F5] border border-[#E6E4DA] p-5 flex items-start gap-3.5">
            <span className="w-9 h-9 rounded-xl bg-[#2F6B48]/10 text-[#2F6B48] flex items-center justify-center shrink-0">
              <Camera className="w-4 h-4" />
            </span>
            <div>
              <h2 className="font-sans font-semibold text-sm text-[#1A2E22]">
                Private Photo Estimates
              </h2>
              <p className="text-xs text-[#5A655E] mt-1 leading-relaxed">
                Junk removal photos are used exclusively to size your quote and
                are never shared publicly.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-[#FAF9F5] border border-[#E6E4DA] p-5 flex items-start gap-3.5">
            <span className="w-9 h-9 rounded-xl bg-[#2F6B48]/10 text-[#2F6B48] flex items-center justify-center shrink-0">
              <MessageCircle className="w-4 h-4" />
            </span>
            <div>
              <h2 className="font-sans font-semibold text-sm text-[#1A2E22]">
                Direct Dispatch Only
              </h2>
              <p className="text-xs text-[#5A655E] mt-1 leading-relaxed">
                Access codes and scheduling notes go only to the crew assigned
                to your visit.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main Two-Column Layout: Sticky TOC + Policy Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start pt-4">
          {/* Left Sticky Table of Contents */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            <div className="rounded-[var(--radius)] bg-[#FAF9F5] border border-[#E6E4DA] p-6 space-y-4">
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#5A655E]">
                ON THIS PAGE
              </p>
              <nav aria-label="Privacy policy sections" className="space-y-2">
                {policySections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="flex items-center gap-3 text-xs sm:text-sm text-[#4A554E] hover:text-[#2F6B48] py-1 transition-colors"
                  >
                    <span className="font-mono text-xs text-[#2F6B48]">
                      {section.number}
                    </span>
                    <span>{section.title}</span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Card */}
            <div className="rounded-[var(--radius)] bg-[#1F3A28] text-white p-6 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
                <Mail className="w-4 h-4 text-white" />
              </div>
              <h2 className="font-sans font-semibold text-base">
                Questions about your data?
              </h2>
              <p className="text-xs text-white/75 leading-relaxed">
                Want to update or delete your quote records or property access
                notes? Reach out anytime.
              </p>
              <div className="pt-1">
                <a
                  href="mailto:privacy@sweepspruse.com"
                  className="inline-block text-xs font-medium underline underline-offset-4 text-white hover:text-white/85 transition-colors"
                >
                  privacy@sweepspruse.com
                </a>
              </div>
            </div>
          </aside>

          {/* Right Policy Content Cards */}
          <div className="lg:col-span-8 space-y-5">
            {policySections.map((section, index) => (
              <motion.section
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="scroll-mt-28 rounded-[var(--radius)] bg-[#FAF9F5] border border-[#E6E4DA] p-6 sm:p-8 shadow-2xs space-y-4"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-semibold text-[#2F6B48] bg-[#2F6B48]/10 px-2.5 py-1 rounded-lg">
                    {section.number}
                  </span>
                  <h2 className="font-sans font-semibold text-lg sm:text-xl text-[#1A2E22]">
                    {section.title}
                  </h2>
                </div>

                <div className="text-xs sm:text-sm text-[#4A554E] leading-relaxed">
                  {section.content}
                </div>
              </motion.section>
            ))}
          </div>
        </div>
      </div>
    </main>
}
