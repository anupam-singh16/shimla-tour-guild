import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="text-center py-12 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-4"
      >
        Explore Shimla Like Never Before
      </motion.h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        A perfectly planned 3-day itinerary covering Shimla, Kufri, Chail &
        more.
      </p>
    </section>
  );
}
