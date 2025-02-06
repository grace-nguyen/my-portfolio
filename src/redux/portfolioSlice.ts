import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PortfolioData } from '../types';

const initialState: PortfolioData = {
    name: 'Thi Nga (Grace) Nguyen',
    email: 'grace.mnguyen1911@gmail.com',
    phone: '(+61) 477-691-885',
    linkedin: 'your-linkedin-username',
    github: 'your-github-username',
    portfolio: 'Portfolio',
    professionalSummary: 'As a Software Engineer, I leverage my skills and practical experience to develop user-friendly and impactful software products. With over 8 years of experience as a Frontend Developer, I have honed my expertise in technologies such as HTML, CSS, JavaScript, React, Vue, and PHP. Currently, I am expanding my skill set to excel as a Full Stack Developer, delving into technologies like Node and ASP.NET Core. With a focus on continuous learning and improvement, I am passionate about contributing my expertise to challenging projects while further advancing my capabilities in software development.',
    employments: [
      {
        company: 'CarePlus International Clinics',
        position: 'Software Engineer',
        duration: 'Jan 2024 – Sep 2024',
        responsibilities: [
          'Developed and maintained a clinic management system, focusing on patient consultation scheduling and medical record management.',
          'Designed and implemented the frontend architecture using React, TypeScript, GraphQL, and REST API, ensuring scalability and maintainability.', 
          'Collaborated with UI/UX designers to create user-friendly interfaces and worked closely with backend developers for seamless integration.', 
          'Contributed to API integration and optimized data exchange for better system performance. Provided regular progress updates to the Project Manager, addressing challenges and aligning development with project goals.',
        ],
      },
      {
        company: 'Jobhopin',
        position: 'Software Engineer',
        duration: 'Jun 2022 – Nov 2023',
        responsibilities: [
          'Contributed to the development and maintenance of a job search platform, supporting both Jobseekers and Recruiters.', 
          'Built and tested new features, ensuring functionality and quality. Collaborated with designers, developers, BAs, and managers to implement features efficiently.', 
          'Implemented and managed Storybook, creating reusable common components to improve development consistency. Wrote end-to-end tests using Playwright + TypeScript to validate functionality before deployment.', 
          'Optimized the platform for smooth performance and high efficiency.',
        ],
      },
      {
        company: 'VietSwiss',
        position: 'Software Engineer',
        duration: 'Aug 2021 – April 2022',
        responsibilities: [
          'Developed and maintained e-commerce, news, and personal websites for European clients using WordPress, React, Next.js, TypeScript, JavaScript, and Node.js.', 
          'Implemented feature updates and bug fixes based on client requirements. Optimized and tested website performance to ensure speed and efficiency before deployment.', 
          'Translated UI/UX wireframes from Figma into functional front-end code.', 
          'Participated in daily meetings, providing progress updates to the team and manager.'
        ],
      },
      {
        company: 'OLLI Technology',
        position: 'Software Engineer',
        duration: 'Jun 2018 – Aug 2021',
        responsibilities: [
          'Developed the company’s official website on the Haravan platform (similar to Shopify).', 
          'Built internal web applications for the content and AI teams using VueJS, JavaScript, and TypeScript to streamline workflows.', 
          'Integrated APIs in collaboration with backend developers to enhance system functionality.',
          'Worked closely with the manager to plan and strategize frontend development.', 
          'Coordinated with designers to create user-friendly, visually appealing websites.', 
          'Optimized and tested website performance for speed and efficiency before deployment.', 
          'Translated UI/UX wireframes from Figma into functional front-end code.',
        ],
      },
      {
        company: 'redWEB',
        position: 'Software Engineer',
        duration: 'Jan 2016 – Jun 2018',
        responsibilities: [
          'Developed websites for clients in Europe and Vietnam using WordPress and Joomla.', 
          'Maintained and updated existing client websites, ensuring smooth functionality and resolving bugs. Communicated daily with team members and stakeholders to streamline task completion.', 
          'Optimized and tested website performance before handover to testers and addressed reported issues to ensure a stable final product.', 
          'Participated in daily team meetings to report progress.', 
          'Converted Figma/PSD designs into accurate, responsive frontend code.',
        ],
      },
      {
        company: 'Youtech JSC',
        position: 'Software Engineer',
        duration: 'Sep 2013 – Dec 2015',
        responsibilities: [
          'Developed demo templates for sale on theme marketplaces using Joomla, WordPress, OpenCart, PrestaShop, and Shopify.',
          'Worked with the backend team to integrate modules into themes, ensuring accurate implementation of designs.', 
          'Upgraded templates to latest versions for better performance and compatibility.', 
          'Participated in daily discussions with the team and stakeholders to accelerate task completion.', 
          'Optimized and tested website performance before handover to testers.', 
          'Addressed reported issues to ensure a stable final product.', 
          'Translated Figma/PSD designs into pixel-perfect, responsive frontend code.'
        ],
      },
    ],
    skills: [
      {
        category: 'Programming Languages',
        items: [
          { name: 'React Js', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
          { name: 'Vue Js', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg' },
          { name: 'HTML', icon: 'https://www.w3.org/html/logo/badge/html5-badge-h-solo.png' },
          { name: 'CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png' },
          { name: 'JavaScript', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png' },
          { name: 'TypeScript', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg' },
          { name: 'Bootstrap', icon: 'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png' },
          { name: 'Tailwind', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
          { name: 'C#', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/C_Sharp_wordmark.svg' },
          { name: 'ASP.NET Core', icon: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg' },
        ],
      },
      {
        category: 'CMS Open Source',
        items: [
          { name: 'Wordpress', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg' },
          { name: 'Shopify', icon: 'https://cdn.iconscout.com/icon/free/png-256/free-shopify-logo-icon-download-in-svg-png-gif-file-formats--online-shopping-brand-logos-pack-icons-226579.png?f=webp&w=256' },
          { name: 'Joomla', icon: 'https://cdn.iconscout.com/icon/free/png-256/free-joomla-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-4-pack-logos-icons-2945022.png?f=webp&w=256' },
          { name: 'Prestashop', icon: 'https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/2983d43b-d217-4a43-ac43-93162c4c9b1a.jpeg?w=80&h=80&fit=max&dpr=3&auto=format&q=50' },
          { name: 'OpenCart', icon: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/OpenCart_icon.svg' },
        ],
      },
      {
        category: 'Others',
        items: [
          { name: 'Git', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN7Iq_jqc59J_Zrv7Jo29uBTTs8CD6O7JCvjpGmErDng&s' },
          { name: 'GitHub', icon: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' },
          { name: 'Postman', icon: 'https://cdn.worldvectorlogo.com/logos/postman.svg' },
          { name: 'Slack', icon: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png' },
          { name: 'Figma', icon: 'https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=804&h=804&q=75&fit=max&auto=format' },
        ],
      },
    ],
    education: [
      {
        degree: 'Bachelor of Software Engineering',
        university: 'University of Information and Communication Technology Thai Nguyen',
        duration: 'Sep 2009 – Aug 2013',
        responsibilities: [
          'Collaborated with the team to develop websites for clients in Europe and Vietnam using open-source platforms like WordPress and Joomla.',
        ],
      },
    ],
    certificates: [
      {
        title: 'Software Engineering: Implementation and Testing',
        linkTitle: 'https://www.coursera.org/account/accomplishments/certificate/J86JUQN4D3FF',
        date: 'Sep 2023',
        responsibilities: [
          'Completed the Software Engineering: Implementation and Testing course from Hong Kong University, focusing on development best practices and testing methods.',
        ],
      },
      {
        title: 'How to create a Jira SCRUM project',
        linkTitle: 'https://www.coursera.org/account/accomplishments/certificate/MUKY6BQUVFK8',
        date: 'Sep 2023',
        responsibilities: [
          'Completed the How to Create a Jira SCRUM Project course from Hong Kong University, gaining knowledge in Agile project management and Jira workflow setup.',
        ],
      },
      {
        title: 'Foundations of Project Management',
        linkTitle: 'https://www.coursera.org/account/accomplishments/certificate/NKWA2YMQH6HE',
        date: 'Sep 2023',
        responsibilities: [
          'Completed the Foundations of Project Management course from Hong Kong University, gaining essential skills in project planning, execution, and team collaboration.',
        ],
      },
    ],
  };

  const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {
        updatePortfolio: (_state, action: PayloadAction<PortfolioData>) => {
            return action.payload;
        }
    }
  });

  export const { updatePortfolio } = portfolioSlice.actions;
  export default portfolioSlice.reducer;