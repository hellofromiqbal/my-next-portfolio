import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa6';

export const portfolioData = {
  header: {
    name: 'Muhammad Iqbal',
    profession: 'Full-Stack Web Developer',
    description: 'I build exceptional and accessible digital experiences for the web.',
    socialMedia: [
      {
        platform: 'Github',
        icon: <FaGithub className='socialMediaIcon transition-all duration-150' size={25}/>,
        url: "https://github.com/hellofromiqbal"},
      {
        platform: 'Facebook',
        icon: <FaFacebook className='socialMediaIcon transition-all duration-150' size={25}/>,
        url: "https://facebook.com/hellofromiqbal"},
      {
        platform: 'LinkedIn',
        icon: <FaLinkedin className='socialMediaIcon transition-all duration-150' size={25}/>,
        url: "https://linkedin.com/in/hellofromiqbal"
      }
    ]
  },
  experience: {
    data: [
      {
        period: 'MARCH-JUNE 2023',
        position: 'Front-End Web Developer',
        company: 'Gikslab',
        url: "#",
        description: 'Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.',
        technologies: ['Next.js', 'React.js', 'Express.js', 'Node.js', 'MongoDB', 'React Redux', 'JWT', 'Tailwind', 'Bootstrap']
      },
      {
        period: '2021-2022',
        position: 'Customer Service Officer',
        company: 'CIMB Niaga',
        url: "#",
        description: 'Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.',
      }
    ],
    fullLink: "#"
  },
  projects: {
    data: [
      {
        imgUrl: '/images/projects-project1.jpg',
        title: 'Build a Spotify Connected App',
        url: "#",
        description: 'Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
        technologies: ['Next.js', 'Tailwind', 'MongoDB']
      },
      {
        imgUrl: '/images/projects-project2.jpg',
        title: 'Spotify Profile',
        url: "#",
        description: 'Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
        technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js']
      },
      {
        imgUrl: '/images/projects-project3.jpg',
        title: 'Koala Health',
        url: "#",
        description: 'Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
        technologies: ['Next.js', 'Tailwind', 'MongoDB']
      },
    ],
    fullLink: "#"
  }
};