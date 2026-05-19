import NavBar from "../Components/NavBar";
import { useState } from "react";

const crisisLines = [
  { name: "Hopeline Philippines", number: "0917-558-4673", alt: "02-8804-4673", available: "24 / 7", desc: "Free crisis intervention and suicide prevention hotline for Filipinos in distress.", url: "https://hopeline.com.ph", tag: "PH" },
  { name: "National Center for Mental Health (NCMH)", number: "1553", available: "24 / 7", desc: "Government-run crisis hotline for mental health emergencies across the Philippines.", url: "https://ncmh.gov.ph", tag: "PH" },
  { name: "Manila Lifeline Centre", number: "02-8969-0191", available: "24 / 7", desc: "Telephone counselling for people experiencing distress or suicidal crisis.", url: null, tag: "PH" },
  { name: "In Touch Community Services", number: "02-8893-7603", alt: "0917-800-1123", available: "Mon–Fri 9am–5pm", desc: "English & Filipino counselling; connects you with licensed mental health professionals.", url: "https://www.in-touch.org", tag: "PH" },
];

const organizations = [
  { name: "Philippine Mental Health Association (PMHA)", desc: "Advocacy, community outreach, and referral services for mental health support nationwide.", url: "https://pmha.org.ph", email: "info@pmha.org.ph", tag: "Advocacy" },
  { name: "Ateneo Bulatao Center", desc: "Psychological services, counselling, and mental health research based in Manila.", url: "https://www.ateneo.edu/bulatao-center", email: "bulatao@ateneo.edu", tag: "Counselling" },
  { name: "UST CPERS", desc: "Affordable psychological assessment and counselling for students and the wider community.", url: "https://www.ust.edu.ph", email: "cpers@ust.edu.ph", tag: "Counselling" },
  { name: "LoveYourself Inc.", desc: "Mental health and wellness programs with a special focus on LGBTQ+ communities in the Philippines.", url: "https://loveyourself.ph", email: "info@loveyourself.ph", tag: "LGBTQ+" },
];

const international = [
  { name: "WHO Mental Health", desc: "Global mental health data, resources, and guidelines from the World Health Organization.", url: "https://www.who.int/health-topics/mental-health", tag: "Global" },
  { name: "International Association for Suicide Prevention", desc: "Crisis centre directory and resources for suicide prevention worldwide.", url: "https://www.iasp.info/resources/Crisis_Centres/", tag: "Crisis" },
  { name: "Crisis Text Line", desc: "Text HOME to 741741 (US/CA/UK/IE) to connect with a trained crisis counselor instantly.", url: "https://www.crisistextline.org", tag: "Text" },
  { name: "Mental Health America", desc: "Screening tools, peer support, and educational resources for all mental health conditions.", url: "https://www.mhanational.org", tag: "Resources" },
];

const tabs = ["Crisis Hotlines", "Organizations", "International"];
const allData = [crisisLines, organizations, international];

function Card({ item }) {
  return (
    <div className="rounded-2xl p-6 bg-white/50 border border-white/70 hover:-translate-y-1 transition-transform duration-200 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-widest text-[#512B7C] bg-[#CBB2FE]/30 border border-[#CBB2FE]/50 px-3 py-1 rounded-full">
          {item.tag}
        </span>
        {item.available && (
          <span className="text-xs font-semibold text-[#DD6CB1] bg-white/40 border border-[#DD6CB1]/30 px-3 py-1 rounded-full">
            {item.available}
          </span>
        )}
      </div>

      <p className="text-base font-extrabold text-[#512B7C] leading-snug">{item.name}</p>
      <p className="text-sm font-medium text-[#584A6A] leading-relaxed">{item.desc}</p>

      <div className="flex flex-col gap-2 mt-1">
        {item.number && (
          <a href={`tel:${item.number.replace(/\D/g, "")}`}
            className="flex items-center gap-2 text-sm font-bold text-[#512B7C] bg-white/70 border border-[#CBB2FE]/40 hover:bg-[#CBB2FE]/20 rounded-xl px-4 py-2.5 w-fit transition-colors duration-150">
            📞 {item.number}
          </a>
        )}
        {item.url && (
          <a href={item.url} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-bold text-[#512B7C] bg-white/70 border border-[#CBB2FE]/40 hover:bg-[#CBB2FE]/20 rounded-xl px-4 py-2.5 w-fit transition-colors duration-150">
            🔗 Visit Website
          </a>
        )}
        {item.email && (
          <a href={`mailto:${item.email}`}
            className="flex items-center gap-2 text-sm font-bold text-[#512B7C] bg-white/70 border border-[#CBB2FE]/40 hover:bg-[#CBB2FE]/20 rounded-xl px-4 py-2.5 w-fit transition-colors duration-150">
            ✉️ {item.email}
          </a>
        )}
      </div>
    </div>
  );
}

function Contacts() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen mt-[9vh] w-full bg-[linear-gradient(90deg,_#e9bfd6_0%,_#d7b3e6_50%,_#b8b3f4_100%)]">
      <NavBar />

      <div className="max-w-5xl mx-auto px-5 py-14">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/60 border border-[#CBB2FE]/50 rounded-full px-5 py-2 mb-5">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-pulse" />
            <span className="text-sm font-bold text-[#DD6CB1]">Support is always available</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-[#512B7C] leading-tight tracking-tight mb-4">
            You Are Not Alone
          </h1>
          <p className="text-[#584A6A] text-lg font-medium max-w-lg mx-auto leading-relaxed">
            Reach out. Real people are ready to listen — any time, any day.
            Here are trusted mental health resources just for you.
          </p>
        </div>

        {/* Crisis Banner */}
        <div className="flex flex-wrap items-center gap-4 bg-white/50 border-2 border-[#DD6CB1]/30 rounded-2xl px-6 py-4 mb-8">
          <span className="bg-[#DD6CB1] text-white text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full shrink-0">
            ⚡ In Crisis Now?
          </span>
          <p className="text-sm font-semibold text-[#512B7C]">
            If you or someone is in immediate danger, call{" "}
            <a href="tel:911" className="text-[#DD6CB1] underline underline-offset-2 font-black">911</a>{" "}
            or the NCMH hotline{" "}
            <a href="tel:1553" className="text-[#DD6CB1] underline underline-offset-2 font-black">988</a>{" "}
            — free, 24/7.
          </p>
        </div>

        {/* Tabs - Updated to Pastel Purple */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((t, i) => (
            <button
              key={t}
              onClick={() => setActiveTab(i)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
                i === activeTab
                  ? "bg-[#CBB2FE] text-[#512B7C] border-[#B197FC] shadow-md"
                  : "bg-white/40 text-[#584A6A] border-white/60 hover:bg-white/60"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-5">
          {allData[activeTab].map((item) => (
            <Card key={item.name} item={item} />
          ))}
        </div>

        {/* Quote footer */}
        <div className="mt-16 text-center">
          <div className="bg-white/50 border border-white/70 rounded-2xl px-8 py-7 max-w-md mx-auto">
            <p className="text-2xl font-black text-[#512B7C] italic leading-snug mb-3">
              "Asking for help is a sign of strength."
            </p>
            <p className="text-sm font-semibold text-[#584A6A]">
              Unsure where to start?{" "}
              <a href="tel:1553" className="text-[#512B7C] underline underline-offset-2 font-black">
                Call 988
              </a>{" "}
              — the NCMH hotline will guide you.
            </p>
          </div>
          <p className="text-xs font-semibold text-[#584A6A]/60 mt-6">
            © 2025 Tanikala · Always verify hours directly with each institution.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Contacts;