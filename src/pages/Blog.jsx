import { AiOutlineInstagram } from "react-icons/ai"; 
import { AiFillLinkedin } from "react-icons/ai"; 
import { BsGithub } from "react-icons/bs"; 

import React from 'react';

function Blog() {
  return (
    <section className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">My Blogs</h1>
      <div className="flex w-[1000px] justify-between m-auto mt-28" id="blog">
      <a href="https://www.instagram.com/alimkulov.940?igsh=MXc5azQ1MnRyemh2cw==">
         <AiOutlineInstagram  className="w-52 h-52"/>      
      </a>
      <a href="https://github.com/alimkuloff"><BsGithub className="w-52 h-52" /></a>
      <a href="https://www.linkedin.com/in/ne-matjon-alimkulov-764b3a2b0/"><AiFillLinkedin className="w-52 h-52" /></a>
      </div>

    </section>
  );
}

export default Blog;
