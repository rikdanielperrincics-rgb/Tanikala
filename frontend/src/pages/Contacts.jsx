import NavBar from "../Components/NavBar";
import { useState } from "react";
import ContactsHeader from "../Components/ContactsHeader";
import CrisisBanner from "../Components/CrisisBanner";
import ContactCards from "../Components/ContactCards";
import ContactsTab from "../Components/ContactsTab";
import ContactFooter from "../Components/ContactFooter";

const crisisLines = [
  { name: "Hopeline Philippines", number: "0917-558-4673", alt: "02-8804-4673", available: "24 / 7", desc: "Free crisis intervention and suicide prevention hotline for Filipinos in distress.", url: "https://www.facebook.com/HopelinePH/", tag: "PH" },
  { name: "National Center for Mental Health (NCMH)", number: "1553", available: "24 / 7", desc: "Government-run crisis hotline for mental health emergencies across the Philippines.", url: "https://ncmh.gov.ph", tag: "PH" },
  { name: "Manila Lifeline Centre", number: "02-8969-0191", available: "24 / 7", desc: "Telephone counselling for people experiencing distress or suicidal crisis.", url: null, tag: "PH" },
  { name: "In Touch Community Services", number: "02-8893-7603", alt: "0917-800-1123", available: "Mon–Fri 9am–5pm", desc: "English & Filipino counselling; connects you with licensed mental health professionals.", url: "https://www.in-touch.org", tag: "PH" },
];

const organizations = [
  { name: "Philippine Mental Health Association (PMHA)", desc: "Advocacy, community outreach, and referral services for mental health support nationwide.", url: "https://pmha.org.ph", email: "info@pmha.org.ph", tag: "Advocacy" },
  { name: "Ateneo Bulatao Center", desc: "Psychological services, counselling, and mental health research based in Manila.", url: "https://www.facebook.com/BulataoCenter/", email: "bulatao@ateneo.edu", tag: "Counselling" },
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

function Contacts() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen mt-[9vh] w-full bg-[linear-gradient(90deg,_#e9bfd6_0%,_#d7b3e6_50%,_#b8b3f4_100%)]">
      <NavBar />

      <div className="max-w-5xl mx-auto px-5 py-14">

        <ContactsHeader />
        <CrisisBanner />
        <ContactsTab tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        <ContactCards activeData={allData[activeTab]} />
        <ContactFooter />

      </div>
    </div>
  );
}

export default Contacts;