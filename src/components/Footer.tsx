import { footerLinks } from "@/data/content";

export default function Footer() {
  return (
    <div>
      <footer
        className="relative overflow-hidden rounded-t-[2rem] sm:rounded-t-[2.5rem] pt-16 pb-8 text-white shadow-xl"
        style={{
          background: "linear-gradient(135deg, #d35400 0%, #9e3600 100%)",
        }}
      >
        {/* Background Pattern (Triangles Overlay) */}
        <div
          className="absolute inset-0 z-0 opacity-[0.07] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 0L120 60L60 120L0 60L60 0ZM60 120L120 180L60 240L0 180L60 120Z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: "80px 80px",
          }}
        />

        <div className="container px-6 relative z-10 mx-auto max-w-[1400px]">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

            {/* Column 1: Logo, Bio & Socials */}
            <div className="pr-4">
              <div className="inline-block rounded-xl bg-white px-10 py-2.5 text-[15px] font-bold text-orange-500 shadow-sm">
                LOGO
              </div>
              <p className="mt-6 text-[13px] leading-relaxed text-white/95 font-medium">
                SMM is Bangladesh's most trusted SMM panel. We offer fast, affordable social media growth services for every platform, with full support for local payments like bKash and Nagad.
              </p>

              {/* Social Icons */}
              <div className="mt-6 flex flex-wrap gap-2.5">
                <SocialIcon type="facebook" color="bg-[#1877F2]" />
                <SocialIcon type="instagram" color="bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]" />
                <SocialIcon type="youtube" color="bg-[#FF0000]" />
                <SocialIcon type="x" color="bg-black" />
                <SocialIcon type="linkedin" color="bg-[#0A66C2]" />
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <FooterColumn title="Quick Links" links={footerLinks.quick} />

            {/* Column 3: Services Pages */}
            <FooterColumn title="Services Pages" links={footerLinks.services} />

            {/* Column 4: Contact Info */}
            <div>
              <h2 className="text-[17px] font-bold tracking-wide">Contact Info</h2>
              <ul className="mt-6 space-y-5 text-[13.5px] font-medium text-white/95">
                <li className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded bg-[#4185f4]/80 p-1">
                    <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                  </span>
                  info@smmsun.com
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded bg-[#25D366]/80 p-1">
                    <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 14.08c-.22.61-1.28 1.15-1.78 1.22-.44.06-1.02.16-3.23-.71-2.66-1.05-4.38-3.77-4.51-3.95-.13-.18-1.08-1.44-1.08-2.75s.68-1.95.92-2.21c.24-.26.52-.33.69-.33.17 0 .34 0 .49.01.16.01.37-.06.57.42.21.5.7 1.7.76 1.83.06.13.1.28.02.45-.08.17-.12.28-.24.42-.12.14-.26.32-.37.44-.13.14-.27.29-.11.56.16.27.71 1.17 1.53 1.9 1.05.94 1.93 1.23 2.2 1.36.27.13.43.11.59-.07.16-.18.69-.8 87-1.08.18-.28.36-.23.6-.14.24.09 1.53.72 1.79.85.26.13.43.19.5.3.07.11.07.64-.15 1.25z" /></svg>
                  </span>
                  +1 833 252 278
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded bg-[#607d8b]/80 p-1 shrink-0 mt-0.5">
                    <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                  </span>
                  <span className="leading-relaxed">
                    Serving all of Bangladesh <br />
                    Support: 24/7
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright Bar */}
          <div className="mt-16 rounded-2xl bg-black/30 px-4 py-4 text-center text-[12px] sm:text-[13px] font-medium text-white/95 backdrop-blur-sm">
            © 2026 SMM Limited. All Rights Reserved. <span className="mx-1 opacity-60">|</span> Operated under the Bangladesh ICT framework.
          </div>
        </div>
      </footer>
    </div>
  );
}

// Sub-component for Link Columns
function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h2 className="text-[17px] font-bold tracking-wide">{title}</h2>
      <ul className="mt-6 space-y-3.5 text-[13.5px] font-medium text-white/90">
        {links.map((link) => (
          <li key={link}>
            <a href="#home" className="transition-colors hover:text-white">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Sub-component for Social Icons
function SocialIcon({ type, color }: { type: string, color: string }) {
  // Icons mapped for Facebook, Instagram, YouTube, X (Twitter), LinkedIn
  const icons: Record<string, React.ReactNode> = {
    facebook: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />,
    instagram: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" /></>,
    youtube: <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33 2.78 2.78 0 001.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.33 29 29 0 00-.46-5.33z" />,
    x: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />,
    linkedin: <><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></>
  };

  return (
    <a
      href="#"
      className="flex h-[34px] w-[34px] items-center justify-center rounded-lg border border-white/20 bg-black/10 transition-colors hover:bg-black/20"
    >
      <div className={`flex items-center justify-center w-[18px] h-[18px] rounded-sm ${color}`}>
        <svg
          className="w-[12px] h-[12px] text-white"
          fill={type === "x" ? "currentColor" : "none"}
          stroke={type === "x" || type === "youtube" ? "none" : "currentColor"}
          strokeWidth={type === "facebook" || type === "instagram" || type === "linkedin" ? "2" : "0"}
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          {icons[type]}
        </svg>
      </div>
    </a>
  );
}
