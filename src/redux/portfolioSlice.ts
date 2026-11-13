import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PortfolioData } from '../types';

const initialState: PortfolioData = {
    name: 'Thi Nga (Grace) Nguyen',
    email: 'grace.nnguyen1911@gmail.com',
    phone: '(+61) 477-691-885',
    linkedin: 'https://www.linkedin.com/in/gracenguyen1911/',
    github: 'https://github.com/grace-nguyen',
    portfolio: 'Portfolio',
    professionalSummary: 'As a Software Engineer with hands-on experience in developing and maintaining web applications across various industries. Strong frontend development skills in React, Next.js, Vue.js and TypeScript, complemented by backend experience with Node.js, NestJS, ASP.NET Core and SQL databases. Experienced in building responsive user interfaces, integrating REST and GraphQL APIs, developing reusable components and collaborating with cross-functional teams. Currently refreshing technical skills through practical training and personal projects, and looking forward to a full-time software engineering role.',
    employments: [
      {
        company: 'Jung Talents',
        position: 'Software Engineer',
        duration: 'Mar 2025 – Present | Remote | North Wollongong, NSW, Australia',
        responsibilities: [
          'Designed and developed responsive web applications, taking ownership of core front-end features using React.js and Next.js.',
          'Contributed to the PTE Master and PTE Platform projects, utilizing TypeScript, NestJS, MySQL, and AWS, with a primary focus on optimizing search functionalities and course recommendation systems.', 
          'Collaborated on developing the Carina Eye Care web application using ASP.NET Core, React.js, Next.js, and Storyblok.', 
          'Translated complex UI/UX wireframes from Figma into clean, scalable front-end components.',
        ],
      },
      {
        company: 'CarePlus International Clinics',
        position: 'Software Engineer',
        duration: 'Jan 2024 – Sep 2024 | Ho Chi Minh City, Vietnam',
        responsibilities: [
          'Worked with a cross-functional team of seven engineers on a clinic management system covering patient scheduling and electronic medical records.',
          'Led frontend architecture using React, TypeScript, GraphQL and REST APIs, establishing a reusable foundation for the engineering team.', 
          'Coordinated frontend task allocation and worked closely with backend developers to integrate APIs and deliver sprint work.', 
          'Translated UI/UX designs into user-friendly interfaces and reported progress to the Project Manager.',
        ],
      },
      {
        company: 'Jobhopin',
        position: 'Software Engineer',
        duration: 'Jun 2022 – Nov 2023 | Ho Chi Minh City, Vietnam',
        responsibilities: [
          'Developed and maintained features for an AI-powered recruitment platform serving jobseekers and recruiters using React.js and TypeScript, GraphQL, REST APIs and NestJS', 
          'Built and maintained reusable UI components with Storybook to support consistency across the frontend.', 
          'Optimised frontend performance to improve application responsiveness and user experience.', 
          'Created end-to-end automated tests using Playwright and TypeScript to validate user workflows and improve software quality.',
        ],
      },
      {
        company: 'VietSwiss',
        position: 'Software Engineer',
        duration: 'Oct 2021 – Apr 2022 | Ho Chi Minh City, Vietnam',
        responsibilities: [
          'Built and maintained e-commerce, news and corporate websites for European clients using React, Next.js, TypeScript, JavaScript and WordPress.', 
          'Implemented features, fixed defects and improved website performance before production releases.', 
          'Converted Figma designs into responsive frontend interfaces.'
        ],
      },
      {
        company: 'OLLI Technology',
        position: 'Software Engineer',
        duration: 'Jul 2018 – Sep 2021 | Ho Chi Minh City, Vietnam',
        responsibilities: [
          'Built and maintained the company website using Shopify.', 
          'Developed internal tools and dashboards for Content and AI teams using Vue.js and JavaScript, integrating REST APIs.', 
          'Worked with UI/UX designers to translate requirements and designs into responsive web interfaces.',
        ],
      },
      {
        company: 'redWEB',
        position: 'Software Engineer',
        duration: 'Jan 2016 – Jun 2018 | Ho Chi Minh City, Vietnam',
        responsibilities: [
          'Developed and maintained websites for international clients, primarily in Denmark, using WordPress and Joomla.', 
          'Built customised, responsive web solutions using HTML, CSS, JavaScript, WordPress and PHP.', 
        ],
      },
      {
        company: 'Youtech JSC',
        position: 'Software Engineer',
        duration: 'Jan 2014 – Dec 2015',
        responsibilities: [
          'Developed commercial website themes and client websites using WordPress, Joomla, OpenCart, PrestaShop and Shopify.',
          'Upgraded legacy templates and collaborated with backend teams on module integration.', 
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