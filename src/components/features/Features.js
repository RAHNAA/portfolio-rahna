import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
  <Card
    title="Shopify Full-Stack Development"
    des="Experienced in building custom Shopify themes and apps, integrating third-party APIs, and optimizing store performance for high-conversion eCommerce solutions."
    icon={<AiFillAppstore />}
  />
  <Card
    title="Front-End Development (React.js)"
    des="Skilled in creating responsive and interactive UIs using React.js, modern JavaScript (ES6+), and reusable component-based architecture for fast and scalable web applications."
    icon={<FaMobile />}
  />
  <Card
    title="Custom App Development"
    des="Developing tailor-made web and Shopify apps with REST APIs,GraphQL, React JS and Node.js to solve unique business needs and extend platform functionality."
    icon={<SiProgress />}
  />
  <Card
    title="Website Hosting & Deployment"
    des="Deploying websites and full-stack apps on platforms like AWS, Vercel, and Netlify with efficient CI/CD pipelines, domain setup, and performance optimization."
    icon={<FaGlobe />}
  />
</div>

    </section>
  );
}

export default Features