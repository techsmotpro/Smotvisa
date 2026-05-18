import Image from "next/image";
import {
  ChevronDown,
  Trophy,
  GraduationCap,
  Handshake,
  TrendingUp,
  Video,
  ExternalLink,
  CheckCircle,
} from "lucide-react";

// TODO: Replace with your Zoom webinar registration URL
const ZOOM_REG_URL = "https://zoom.us/webinar/register/5117789120043/WN_WaVDqcu6TJ6brLIyBBgTmA";

/* ─── FAQ Accordion ─── */
const faqs = [
  {
    q: "Is this webinar free?",
    a: "Yes, this webinar is completely free. There are no hidden charges or obligations. Just register and attend.",
  },
  {
    q: "What is the age eligibility?",
    a: "The webinar is designed for players aged 8–21 and their parents. However, anyone interested in football career pathways in Spain is welcome to attend.",
  },
  {
    q: "Do I need professional experience?",
    a: "No professional experience is required. This webinar covers pathways for beginners as well as those already playing at academy or district level.",
  },
  {
    q: "Is this guaranteed selection?",
    a: "No, this webinar is about available pathways. Selection for trials or programs follows a separate evaluation process discussed during the session.",
  },
  {
    q: "Will visa guidance be discussed?",
    a: "Yes, the webinar will cover general guidance on visa requirements, documentation, and the support SmotPro provides throughout the process.",
  },
  {
    q: "Will I receive the recording?",
    a: "Registered participants will receive a recording link after the webinar. However, we recommend attending live for the interactive Q&A session.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group border border-border rounded-xl overflow-hidden transition-all hover:border-secondary/40 open:border-secondary/40">
      <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
        <span className="font-body font-semibold text-foreground pr-4">{q}</span>
        <ChevronDown className="h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-300 group-open:rotate-180 group-open:text-secondary" />
      </summary>
      <p className="px-6 pb-5 font-body text-muted-foreground leading-relaxed">{a}</p>
    </details>
  );
}

/* ─── Main Component ─── */
export default function WebinarClient() {
  return (
    <>
      {/* ═══════ HEADER WITH HERO IMAGE ═══════ */}
      <section className="bg-primary">
        <div className="w-full pt-8">
          <Image
            src="/images/banner.jpeg"
            alt="Passionate about football, tennis, or basketball? Discover your pathway to Europe in our free webinar with Mr. Shaji Kandambeth, CEO SmotPro — 13th June, 11 AM to 12 PM, live on Zoom"
            width={1600}
            height={679}
            className="w-full h-auto"
            priority
          />
        </div>
        <div className="container mx-auto px-4 pt-12 pb-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-secondary/15 flex items-center justify-center mx-auto mb-6">
              <Video className="h-8 w-8 text-secondary" />
            </div>

            <h1 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-4 leading-tight">
              Your Path to <span className="text-gradient-gold">Spain Football</span> Starts Here
            </h1>

            <p className="text-lg font-body text-primary-foreground/60 leading-relaxed max-w-xl mx-auto mb-8">
              Discover how aspiring players can train in Spain, experience professional coaching, and explore real football career pathways.
            </p>

            <a
              href={ZOOM_REG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-body font-bold rounded-xl shadow-gold hover:opacity-90 transition-all text-sm"
            >
              Register Now
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ═══════ SPEAKER ═══════ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <span className="text-sm font-display font-bold text-secondary uppercase tracking-[0.2em] mb-4 block text-center">
              Meet the Speaker
            </span>

            <div className="flex flex-col sm:flex-row items-center gap-6 p-6 md:p-8 rounded-2xl bg-card border border-border">
              <div className="shrink-0">
                <div className="w-24 h-24 rounded-2xl overflow-hidden bg-primary">
                  <Image
                    src="/images/profile-shaji.jpeg"
                    alt="Mr. Shaji Kandambeth, CEO of SmotPro India"
                    width={1023}
                    height={1537}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-display font-bold text-foreground">Mr. Shaji Kandambeth</h3>
                <p className="text-secondary font-body font-semibold text-xs uppercase tracking-[0.15em] mb-3">
                  CEO, Smotpro India Pvt. Ltd.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed text-sm">
                  With years of experience connecting Indian football talent to European opportunities, Mr. Shaji Kandambeth will personally guide you through the pathways available for aspiring players looking to train and compete in Spain&rsquo;s professional football ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ WHAT YOU'LL LEARN ═══════ */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <span className="text-sm font-display font-bold text-secondary uppercase tracking-[0.2em] mb-4 block text-center">
              What You&rsquo;ll Learn
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-10">
              What Awaits You
            </h2>

            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { icon: Trophy, title: "Professional Spanish Coaching", desc: "Train under experienced European coaches." },
                { icon: GraduationCap, title: "Academy & Trial Opportunities", desc: "Understand selection process and exposure pathways." },
                { icon: Handshake, title: "Complete Support", desc: "Guidance on stay, program structure, and next steps." },
                { icon: TrendingUp, title: "Career-Focused Development", desc: "Technical, tactical, and physical growth." },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-body font-bold text-foreground text-sm mb-1">{item.title}</h3>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ WHY SPAIN ═══════ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <span className="text-sm font-display font-bold text-secondary uppercase tracking-[0.2em] mb-4 block text-center">
              Why Spain?
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-4">
              One of the strongest football ecosystems in the world.
            </h2>
            <p className="font-body text-muted-foreground text-center mb-10 max-w-xl mx-auto">
              From La Liga academies to grassroots development, Spain offers unmatched opportunities for players who want to reach their potential.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Technical style of play",
                "Competitive academy structure",
                "Global football exposure",
                "Strong development culture",
                "Pathways to professional levels",
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-muted/50">
                  <CheckCircle className="h-5 w-5 text-secondary shrink-0" />
                  <span className="font-body font-semibold text-foreground text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ WHO IS THIS FOR ═══════ */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <span className="text-sm font-display font-bold text-secondary uppercase tracking-[0.2em] mb-4 block text-center">
              This Webinar is For
            </span>

            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {[
                "Players aged 8–21",
                "Academy footballers",
                "Aspiring professionals",
                "Students wanting sports careers abroad",
                "Parents of talented footballers",
              ].map((text, idx) => (
                <span key={idx} className="px-4 py-2 rounded-full bg-card border border-border font-body font-semibold text-foreground text-sm">
                  {text}
                </span>
              ))}
            </div>

            <p className="text-center font-body text-muted-foreground">
              If you&rsquo;re serious about football, <span className="font-semibold text-foreground">this is for you.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ FAQ ═══════ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <span className="text-sm font-display font-bold text-secondary uppercase tracking-[0.2em] mb-4 block text-center">
              Got Questions?
            </span>
            <h2 className="text-3xl font-display font-bold text-foreground text-center mb-10">
              Frequently Asked Questions
            </h2>

            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <FAQItem key={idx} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ FINAL CTA ═══════ */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 leading-tight">
              Your Football Dream Deserves a Bigger Stage.
            </h2>
            <p className="font-body text-white/60 mb-8">
              Spain is calling. Don&rsquo;t miss this opportunity.
            </p>
            <a
              href={ZOOM_REG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 bg-secondary text-secondary-foreground font-body font-bold rounded-xl shadow-gold hover:opacity-90 transition-all text-sm"
            >
              Register Now
              <ExternalLink className="h-4 w-4" />
            </a>
            <p className="text-sm font-body text-white/40 mt-4">Spots are limited.</p>
          </div>
        </div>
      </section>
    </>
  );
}