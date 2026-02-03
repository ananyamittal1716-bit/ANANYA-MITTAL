// src/config/config.ts

export const getAsset = (path: string) => {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${path}`;
};

const siteConfig = {
  personal: {
    name: 'ANANYA',
    title: 'MITTAL | Branding and Decor Intern ',
    image: getAsset('images/profile.png'), // Customize or replace with your profile image
    description:
      'I have experience in branding and décor through college clubs and am currently working as an intern at Atelier Enterprises. Alongside this, I am pursuing a BSc in Economics with Data Science.\n' +
      '\n' +
      'Intern at Atelier Enterprises and BSc Economics with Data Science student, interested in building strong brand identities through creative décor and visual design.\n' +
      '\n' +
      'Undergraduate student pursuing a BSc in Economics with Data Science, complemented by hands-on experience in branding and décor gained through college clubs and my role as an intern at Atelier Enterprises.\n' +
      '\n' +
      'As an intern at Atelier Enterprises, I conduct online workshops focused on branding and decor, sharing practical insights in visual styling and brand aesthetics.',
    tagline: 'Visuals that speak before words do.',
    location: 'Bangalore, India',
  },

  seo: {
    title: 'Ananya – Mittal',
    description: "Portfolio website showcasing your education, research, projects, and experience.",
  },

  animatedText: ['Branding & Decor Associate', 'Where Brands Meet Spaces', 'Creative Visual Storytelling', 'Creative Visual Storytelling'],

  navigation: [
    { name: 'Home', url: '/home' },
    { name: 'Projects', url: '/projects' },
    { name: 'Research', url: '/research' },
    { name: 'Education', url: '/education' },
    { name: 'Experience', url: '/experience' },
    { name: 'Blogs', url: '/blogs' },
    { name: 'Resume', url: '/resume' },
    { name: 'Contact', url: '/contact' },
  ],

  // Static blog entries. Use getAsset so the URL respects NEXT_PUBLIC_BASE_PATH / next.config.basePath
  // Add more entries here as you add more static HTML blog files under public/static_page/
  blogs: [
    {
      title: 'Designing Experiences Through Branding & Decor',
      url: getAsset('static_page/project_management_blog.html'), // Replace with your static HTML page
    },
  ],


  education: [
    {
      institution: 'CHRIST UNIVERSITY BANNERGHATTA ROAD CAMPUS',
      degree: 'Bachelors in Economics with Data Science',
      year: '2025–2028',
      image: getAsset('images/education/placeholder.png'),
      description: ['Focused on economic analysis using data science tools and quantitative methods.'],
    },
    {
      institution: 'DELHI PUBLIC SCHOOL DURG',
      degree: 'Another Degree or Certificate',
      year: '2023–2024',
      image: getAsset('images/education/placeholder.png'),
      description: ['Completed 10+2 graduation in commerec field along with applied mathematics.'],
    },
  ],

// ✅ Unified MOOC + Certifications Section
  certifications: [
    {
      title: 'Specialised in Data Visualisation',
      specialization: true,
      file: getAsset('images/education/Certifications/download.svg'),
      certificates: [
        { name: 'Event Branding', file: getAsset('images/education/Certifications/download.svg') },
        { name: 'Visual styling', file: getAsset('images/education/Certifications/download.svg') },
      ],
    },
    {
      title: 'Certified dancer',
      file: getAsset('images/education/Certifications/download.svg'),
    },
  ],



  // ✅ Experience section updated
  experience: [
    {
      title: 'Branding and Decor Associate',
      cardImage: getAsset('images/experience/placeholder.png'),
      place: 'Atelier Enterprises',
      time: '(2026 – Present)',
      desp: ['Event Branding', 'Visual Styling'],
    },
    {
      title: 'Event planner/Volunteer',
      cardImage: getAsset('images/experience/placeholder.png'),
      place: 'SBCT Charitable Trust',
      time: '(2024 – Present)',
      desp: ['Helping poor people to uplift their living in all the ways possible', ''],
    },
  ],


  // ✅ Projects section updated
  projects: [
    {
      title: 'Dashboard Creation',
      cardImage: getAsset('images/project/placeholder.png'),
      description: 'Built an interactive dashboard to visualize key metrics and support quick, data-driven insights.',
      Githublink: 'https://github.com/your-username/your-project',
    },
    {
      title: 'Visual Storytelling',
      cardImage: getAsset('images/project/placeholder.png'),
      description: 'Using data visualisation tools to create visuals and using them to narrate the economic problems.',
      Githublink: 'https://github.com/your-username/another-project',
    },
  ],


  research: [
    {
      title: 'Branding and Marketing Angle',
      authors: 'Ananya Mittal, K',
      conferences: 'Journal, Z',
      researchYr: 2025,
  image: getAsset('images/research/placeholder.png'),
      citation: {
        vancouver:
          'Author M, Author K. Branding and Marketing Angle. Bangalore, 2025. DOI/URL.',
      },
      abstract:
        'Brand Perception and Consumer Response: A Data-Based Study and Impact of Visual Branding on Consumer Purchase Decisions',
      link: 'https://example.com/your-publication',
    },
  ],

  books: [
    {
      title: 'Your Book Title',
      description: 'Short description of your book or resource.',
      image: getAsset('images/book_cover_placeholder.png'),
      link: 'https://example.com/your-book',
    },
  ],

  contact: {
    email: 'ananyamittal1234@gmail.com',
    linkedin: 'https://www.linkedin.com/in/your-linkedin/',
    github: 'https://github.com/your-username',
    googleScholar: 'https://scholar.google.com/citations?user=YOURID',
    orcid: 'https://orcid.org/0000-0000-0000-0000',
  },
};

export default siteConfig;
