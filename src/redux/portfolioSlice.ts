import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PortfolioData } from '../types';

const initialState: PortfolioData = {
    name: 'Thi Nga (Grace) Nguyen',
    email: 'grace.nnguyen1911@gmail.com',
    phone: '(+61) 477-691-885',
    linkedin: 'https://www.linkedin.com/in/gracenguyen1911/',
    github: 'https://github.com/grace-nguyen',
    portfolio: 'Portfolio',
    professionalSummary: 'Software Engineer specialising in responsive, user-friendly web applications with React, Next.js and TypeScript, complemented by backend experience in C#, ASP.NET Core and Node.js. Experienced in reusable UI components, REST and GraphQL API integration, automated testing and cross-functional collaboration. Based in Victoria, Australia, with permanent residency and unrestricted working rights. Open to full-time software engineering opportunities.',
    employments: [
      {
        company: 'Jung Talents',
        position: 'Software Engineer (Contract / Project-based)',
        duration: 'Jan 2025 – Sep 2025',
        responsibilities: [
          'Designed and developed interactive web applications, responsible for front-end development.',
          'Engaged in the PTE Master and PTE Platform projects by using React.js, Next.js, Nest.js, Typescript, ASP.NET, MySQL and AWS. Primarily focused on elevating search functionalities and refining course recommendation systems, resulting in a more user-friendly and efficient platform.', 
          'Engaged in the development of the new Carina Eye Care website (project is still in-progress) using ASP.NET Core, React.js, Next.js, and Storyblok.', 
          'Ensured high code quality and streamlined team collaboration by utilizing Git for version control and AWS for seamless continuous integration and deployment.',
          'Translated UI / UX designs wireframes from Figma into functional front-end code.'
        ],
      },
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
        duration: 'Oct 2021 – Apr 2022',
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
        duration: 'Jul 2018 – Sep 2021',
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
        duration: 'Jan 2014 – Dec 2015',
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
          { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
          { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
          { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
          { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
          { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        ],
      },
      {
        category: 'Frontend',
        items: [
          { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
          { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
          { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
          { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
          { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
          { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
        ],
      },
      {
        category: 'Backend & APIs',
        items: [
          { name: 'ASP.NET Core', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
          { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
          { name: 'NestJS', icon: 'https://nestjs.com/logo-small-gradient.d792062c.svg' },
          { name: 'REST API', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
          { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
        ],
      },
      {
        category: 'Database, Testing & Tools',
        items: [
          { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
          { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
          { name: 'Playwright', icon: 'https://playwright.dev/img/playwright-logo.svg' },
          { name: 'Storybook', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg' },
          { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
          { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
          { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
          { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
          { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
        ],
      },
      {
        category: 'CMS & E-commerce',
        items: [
          { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
          { name: 'Shopify', icon: 'https://cdn.simpleicons.org/shopify/96BF48' },
          { name: 'Joomla', icon: 'https://cdn.simpleicons.org/joomla/5091CD' },
          { name: 'OpenCart', icon: 'https://cdn.simpleicons.org/opencart/23A8E0' },
          { name: 'PrestaShop', icon: 'https://cdn.simpleicons.org/prestashop/DF0067' },
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