import React from "react";
//import "./resume.css";  // Chemin vers le fichier CSS

import {Data} from "../data/data2";
import Card from "./Card";





export const Experience = () => {
  return (
    <section className="resume_container_section" id="experience">
      <h2 className="section_title">Experiences</h2>
      <div className="resume_container grid">
        <div className="timeline grid">
          {Data.map((val, id) => {
            if (val.category === "education") {
              return (
                <Card
                  key={id}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                  desc1={val.desc1}
                 
                />
              );
            }
            return null;
          })}
        </div>

          

      </div>
    </section>
  );
};

export default Experience;
