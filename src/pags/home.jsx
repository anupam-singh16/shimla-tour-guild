import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DayTabs from "../components/DayTabs";
import ItineraryCard from "../components/ItineraryCard";
import Footer from "../components/Footer";
import { itinerary } from "../data/data";

export default function Home() {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <div className="bg-linear-to-b from-sky-100 to-white min-h-screen">
      <Navbar />
      <Hero />
      <DayTabs
        itinerary={itinerary}
        activeDay={activeDay}
        setActiveDay={setActiveDay}
      />
      <div className="max-w-5xl mx-auto px-4">
        <ItineraryCard data={itinerary[activeDay]} />
      </div>
      <Footer />
    </div>
  );
}
