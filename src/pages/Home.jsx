import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import React from 'react';

function Home() {
  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="text-lg mb-6">
        My name is Ne'matjon Alimkulov. I am a web developer with a passion for creating beautiful and functional websites.
        With a background in [your background], I have developed a wide range of skills in [mention your key skills and experiences].
        I love tackling new challenges and continuously improving my skills.
      </p>
      <p className="text-lg">
        In my free time, I enjoy [mention some hobbies or interests]. Feel free to browse through my portfolio to learn more about my work.
      </p>
      <div className="flex gap-[80px] mt-16" id='images'>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
      </div>
    </section>
  );
}

export default Home;
