// src/App.tsx
/**
 * App.tsx — MasterNode Root
 *
 * Handles routing between the landing page and standalone pages.
 * Layout shell (Announcement, Navbar, Footer, Widgets) wraps all routes.
 *
 * ROUTES:
 *   /       — Landing page (all 11 conversion sections)
 *   /demo   — NexusDashboard (AI Workflow demo page)
 *
 * THEME: Dark (Brown & Creme) / Light (White & Green)
 *        Toggle via sun/moon icon in Navbar.
 */


import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// Layout
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

// Pages
import { Landing } from "@/components/pages/landing";
import { NexusDashboard } from "@/components/pages/nexusdash";

// Floating widgets
import { SocialProofToast } from "@/components/shared/social-proof-toast";
import { ChatBotWidget } from "@/components/shared/chatbot-widget";

// Hooks
import { useTheme } from "@/hooks/useTheme";

function AppContent() {
  const { theme, toggle } = useTheme("dark");
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, [location]);

  return (
    <div
      className="min-h-screen font-body"
      style={{
        background: "hsl(var(--mn-bg-deep))",
        color: "hsl(var(--mn-text-primary))",
      }}
    >
      <AnnouncementBar />
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/demo" element={<NexusDashboard />} />
        </Routes>
      </main>
      <Footer />
      <SocialProofToast />
      <ChatBotWidget theme={theme} />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}