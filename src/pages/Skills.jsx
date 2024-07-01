import { SiTailwindcss } from "react-icons/si"; 
import { SiVite } from "react-icons/si"; 
import { AiOutlineGithub } from "react-icons/ai"; 
import { TbBrandVscode } from "react-icons/tb"; 
import { FaJs } from "react-icons/fa"; 
import { BsFiletypeScss } from "react-icons/bs"; 
import { DiSass } from "react-icons/di"; 
import { DiCss3Full } from "react-icons/di"; 
import { AiOutlineHtml5 } from "react-icons/ai"; 
import { FaReact } from "react-icons/fa"; 

import React from 'react';

function Skills() {
  return (
    <section className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Skills</h1>
      <h3 className="text-2xl mb-10">I am studying Fronted Developer at Najot Talim</h3>
      <div className="flex gap-4" id="skills">
        <div className="flex gap-[80px]">
        <AiOutlineHtml5 className="w-36 h-36" /><DiCss3Full className="w-36 h-36" /><FaReact className="w-36 h-36" /><DiSass className="w-36 h-36" /><BsFiletypeScss className="w-36 h-36" />
        </div>
        <div className="flex gap-[80px]">
        <FaJs className="w-36 h-36" /><TbBrandVscode  className="w-36 h-36"  /><AiOutlineGithub className="w-36 h-36"  /><SiVite className="w-36 h-36"  /><SiTailwindcss className="w-36 h-36"  />
        </div>
      </div>
    </section>
  );
}

export default Skills;
