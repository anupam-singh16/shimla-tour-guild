import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "./card";

export default function ItineraryCard({ data }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}>
      <Card className="rounded-2xl shadow-lg">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold">{data.day}</h3>
          <p className="text-sm text-gray-500 mb-4">Date: {data.date}</p>

          <ul className="grid md:grid-cols-2 gap-4">
            {data.places.map((place, i) => {
              const isActive = activeIndex === i;

              return (
                <li
                  key={i}
                  onClick={() => handleClick(i)}
                  className={`cursor-pointer p-4 rounded-xl transition-all
                    ${isActive ? "bg-sky-200" : "bg-sky-50 hover:bg-sky-100"}
                  `}
                >
                  <div className="flex items-center justify-between font-medium">
                    <span className="flex items-center gap-2">
                      📍 {place.name}
                    </span>
                    <span>{isActive ? "−" : "+"}</span>
                  </div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-2 text-sm text-gray-600 overflow-hidden"
                      >
                        {place.famousFor}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}
