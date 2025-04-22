import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive ,projectSix} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
  <ProjectsCard
    title="Shopify eCommerce Storefront"
    des="Designed and developed end-to-end custom Shopify themes for leading retail brands, integrating Figma designs, swatches, promotional content, and advanced filtering to enhance UX and drive conversions."
    src={projectOne}
  />
  <ProjectsCard
    title="Custom Shopify App"
    des="Built and deployed Shopify apps to extend platform functionality using Node.js and REST APIs. Delivered tailored solutions for business-specific needs like metafields management and automation."
    src={projectTwo}
  />
  <ProjectsCard
    title="Shopify Homepage, PLP & PDP Enhancements"
    des="Customized advanced sections on Homepage, Collection, and Product pages with dynamic sliders, variant swatches, SEO content, and responsive layouts to boost engagement and performance."
    src={projectThree}
  />
  <ProjectsCard
    title="React Front-End Interface"
    des="Developed highly interactive UI using React.js with reusable components, enhancing responsiveness and functionality for web and internal tools. Integrated API data and ensured seamless performance."
    src={projectFour}
  />
  <ProjectsCard
    title="Salesforce UI Contribution"
    des="Collaborated with the Salesforce frontend team to deliver high-quality components using HTML, CSS, and JavaScript, supporting scalable UI enhancements for enterprise workflows."
    src={projectFive}
  />
  <ProjectsCard
    title="Shopify Multi-Store Support"
    des="Provided technical support for 10+ Shopify stores, resolving issues, optimizing Liquid code, managing metafields, and training junior developers on advanced Shopify features and best practices."
    src={projectSix}
  />
</div>

    </section>
  );
}

export default Projects