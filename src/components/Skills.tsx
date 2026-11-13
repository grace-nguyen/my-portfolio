import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { motion } from "framer-motion";
import Title from "./Title";
const SkillPage: React.FC = () => {
  const skills = useSelector((state: RootState) => state.portfolio.skills);
  return (
    <section id="skills" className="scroll-pt-24 py-16">
      <div className="mx-auto mb-10 text-center">
        <Title text="Technical Skills" />
      </div>
      <div className="container mx-auto mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((category, index) => (
          <motion.article
            key={category.category}
            className="rounded-2xl border border-gray-700 bg-gray-800/90 p-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-5 text-center text-lg font-semibold text-white">
              {category.category}
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {category.items.map((skill) => (
                <div
                  key={skill.name}
                  className="inline-flex items-center rounded-lg border border-gray-600 px-3 py-2 transition hover:border-purple-400 hover:bg-gray-700"
                >
                  <img
                    src={skill.icon}
                    alt=""
                    loading="lazy"
                    className="mr-2 h-5 w-5 object-contain"
                  />
                  <span className="text-sm text-white">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};
export default SkillPage;
