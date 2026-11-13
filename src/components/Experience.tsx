import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { motion } from "framer-motion";
import Title from "./Title";
const Employment: React.FC = () => {
  const employments = useSelector(
    (state: RootState) => state.portfolio.employments
  );
  return (
    <section id="experience" className="scroll-pt-24 py-16">
      <div className="mx-auto mb-10 text-center">
        <Title text="Professional Experience" />
      </div>
      <div className="container mx-auto mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {employments.map((employment, index) => (
          <motion.article
            key={`${employment.company}-${employment.duration}`}
            className="rounded-2xl border border-gray-700 bg-gray-800/90 p-5 shadow-lg shadow-black/10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold leading-snug text-white md:text-xl">
              {employment.position}{" "}
              <span className="text-sm text-gray-400">at</span>{" "}
              <span className="text-purple-300">{employment.company}</span>
            </h3>
            <p className="mt-1 text-sm text-gray-400">{employment.duration}</p>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-gray-300">
              {employment.responsibilities.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-yellow-400">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
};
export default Employment;
