import { GithubOutlined, LinkedinFilled, LinkOutlined, TwitterOutlined } from '@ant-design/icons';
import axios from 'axios';
import dayJS from 'dayjs';
import Head from 'next/head';

const Home = ({ latestPosts }) => {
  return (
    <div className="bg-blue-900 w-screen h-screen p-2 flex justify-center text-white pt-10 overflow-x-hidden relative">
      <Head>
        <title>My Name is Pedro</title>
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
        <meta
          name="description"
          content="My name is Pedro, I'm a web developer and this is my portfolio."
        />
        <meta
          name="keywords"
          content="Pedro, Ogheneochuko, Hephzibah, Portfolio, React, Developer, StriTech, stritech, software, developement, web, app, design, website, mobile, e-commerce, maitenace consultation, SEO, search engine optimization, SAAS, Software, As, A, Service"
        />
      </Head>
      <div className="max-w-6xl w-full h-full tablet:max-w-xl mx-auto absolute">
        <div className="w-1/4 fixed h-full flex flex-col justify-between px-3 tablet:w-full tablet:relative tablet:h-auto">
          <div className="phone:mb-10">
            <p className="text-6xl font-medium m-0">Hi, my name is Ochuko Pedro.</p>
            <p className="text-base mt-10">
              I’m a Web Engineer currently unemployed. I mostly do front-end development, and I’m a
              React.js and CSS nerd trying to delve into Machine Learning, AI and Robotics. I also
              an active member of the Developer Team and Community (
              <a
                href="https://bucc.club/"
                target="_blank"
                rel="noopener"
                className="text-blue-600 underline font-medium italics"
              >
                BUCC
              </a>
              ) in my school. I believe as engineers we can create things that could potentially
              change the world for the better.
            </p>
          </div>
          <ul className="phone:mb-10">
            <li className="mb-3">
              <a href="#projects">01 - PROJECTS</a>
            </li>
            <li className="mb-3">
              <a href="#work_history">02 - WORK HISTORY</a>
            </li>
            <li className="mb-3">
              <a href="#skills">03 - SKILLS</a>
            </li>
            <li className="mb-3">
              <a href="#blog">04 - BLOG</a>
            </li>
          </ul>
          <span className="flex items-center mb-20 phone:mb-10 phone:flex-wrap">
            <img src="/images/bitmoji-3.png" className="w-10 h-10 rounded-full" />
            <div className="flex phone:mt-5">
              <a
                href="https://twitter.com/deltanboi"
                target="_blank"
                rel="noopener"
                className="ml-5 flex items-center"
              >
                <TwitterOutlined className="mr-1" /> Twitter <LinkOutlined className="ml-1" />
              </a>
              <a
                href="https://github.com/pedoch"
                target="_blank"
                rel="noopener"
                className="ml-5 flex items-center"
              >
                <GithubOutlined className="mr-1" />
                GitHub
                <LinkOutlined className="ml-1" />
              </a>
              <a
                href="https://www.linkedin.com/in/ogheneochuko-pedro-3ba431168/"
                target="_blank"
                rel="noopener"
                className="ml-5 flex items-center"
              >
                <LinkedinFilled className="mr-1" />
                LinkedIn
                <LinkOutlined className="ml-1" />
              </a>
            </div>
          </span>
        </div>
        <div
          className="w-1/2 px-3 pt-10 float-right tablet:w-full tablet:float-none"
          style={{ scrollBehavior: 'smooth' }}
        >
          <p className="mb-5 font-bold" id="projects">
            PROJECTS
          </p>
          {[
            {
              title: 'StriTech',
              description: 'Website for a software developement firm called StriTech.',
              link: 'https://stritech.netlify.app/',
              github: [{ title: 'N/A', link: '#' }],
              public: 'Closed Source',
              tools: 'NextJS',
            },
            {
              title: 'FurstLegal',
              description: 'This is a simple website for a law firm.',
              link: 'https://furstlegalng.vercel.app/',
              github: [{ title: 'N/A', link: '#' }],
              public: 'Closed Source',
              tools: 'NextJS',
            },
            {
              title: 'Neighbird Bot Web App (Desktop)',
              description:
                'A web application for view the statistics and trending topics around the world for a bot made to bring communities together.',
              link: 'https://theneighbird-metrics.vercel.app/',
              github: [
                {
                  title: 'Neighbird (Twitter Codechella 2020)',
                  link: 'https://github.com/pedoch/codechella_2020/tree/main/front-end',
                },
              ],
              public: 'Open Source',
              tools: 'NextJS',
            },
            {
              title: 'Expense Tracker',
              description:
                'This is a simple app that enables users input their transactions and track expenses made.',
              link: 'https://expense-trackometer.netlify.app/',
              github: [
                { title: 'Front-End', link: 'https://github.com/pedoch/expense-tracker-frontend' },
                { title: 'Back-End', link: 'https://github.com/pedoch/expense-tracker-backend' },
              ],
              public: 'Open Source',
              tools: 'ReactJS, NodeJS',
            },
          ].map((project, index) => {
            return (
              <div
                key={project.title + index}
                className="mb-5 bg-blue-800 p-3 flex flex-col justify-between min-h-40 hover:shadow-xl hover:text-white"
              >
                <div>
                  <p className="">{project.tools}</p>
                  <a href={project.link} target="_blank" rel="noopener" className="underline">
                    <p className="text-2xl mb-3 font-medium">{project.title}</p>
                  </a>
                </div>
                <p className="mb-2">{project.description}</p>
                <span>
                  GitHub:
                  {project.github.map((link, index) => {
                    return (
                      <a
                        key={link.title + index}
                        href={link.link}
                        target="blank"
                        rel="noopener"
                        className="ml-2"
                      >
                        {link.title}
                      </a>
                    );
                  })}
                </span>
                <p>{project.public}</p>
              </div>
            );
          })}
          <p className="mb-5 font-bold mt-16" id="work_history">
            WORK HISTORY
          </p>
          {[
            {
              title: 'Front-End Engineer',
              description:
                'I am working as a front-end web engineer. Assisting with the development of their website and web application.',
              company: 'Welkom-U',
              timePeriod: 'March, 2021 - Present',
            },
            {
              title: 'IT Intern',
              description:
                'I worked in the information management operations teams, under the business services department.',
              company: 'Chevron Nigeria Limited',
              timePeriod: 'Jan, 2020 - Jun, 2020',
            },
            {
              title: 'Front-End Developer Intern',
              description:
                'I worked as a front end web developer. Assisted on enterprise level application',
              company: 'OpenDesk Consult',
              timePeriod: 'Jun, 2019 - Aug, 2019',
            },
          ].map((work, index) => {
            return (
              <div
                key={work.title + index}
                className="mb-5 bg-blue-700 p-3 flex flex-col justify-between min-h-40 hover:shadow-xl"
              >
                <div>
                  <p className="text-lg">{work.company}</p>
                  <p className="text-2xl mb-3 font-medium">{work.title}</p>
                </div>
                <p className="mb-2">{work.description}</p>
                <p>{work.timePeriod}</p>
              </div>
            );
          })}
          <p className="mb-5 font-bold mt-16" id="skills">
            SKILLS
          </p>
          <div className="flex flex-wrap mb-10">
            {[
              { name: 'ReactJS', image: 'react-icon.png' },
              { name: 'TypeScript', image: 'typescript-icon.png' },
              { name: 'NextJS', image: 'nextjs-icon.png' },
              { name: 'GatsbyJS', image: 'gatsbyjs-icon.png' },
              { name: 'NodeJS', image: 'nodejs-icon.png' },
              { name: 'RestAPI', image: 'rest-api-icon.png' },
              { name: 'GraphQL', image: 'graphql-icon.png' },
              { name: 'MongoDB', image: 'mongodb-icon.png' },
              { name: 'HTML', image: 'html-icon.png' },
              { name: 'CSS', image: 'css-icon.png' },
              { name: 'TailwindCSS', image: 'tailwindcss-icon.png' },
              { name: 'Machine Learning', image: 'machine-learning-icon.png' },
              { name: 'GNU Octave', image: 'gnu-octave-icon.png' },
              { name: 'Microsoft Power Platform', image: 'ms-power-platform-icon.png' },
            ].map((skill, index) => {
              return (
                <span
                  key={skill.name + index}
                  className="py-2 px-3 bg-blue-600 rounded m-1 flex items-center"
                >
                  <img src={`/images/${skill.image}`} className="h-8 w-auto mr-3" />
                  {skill.name}
                </span>
              );
            })}
          </div>
          <p className="mb-5 font-bold mt-16" id="blog">
            BLOG
          </p>
          {latestPosts?.map((post, index) => {
            return (
              <a
                href={post.url}
                target="_blank"
                rel="noopener"
                key={post.title + index}
                className="mb-5 bg-blue-500 p-3 flex flex-col justify-between min-h-40 hover:shadow-xl hover:text-white "
              >
                <div>
                  <p className="">{post.tags}</p>
                  <p className="text-2xl mb-3 font-medium">{post.title}</p>
                </div>
                <p className="mb-2">{post.description}</p>
                <p>{dayJS(post.created_at).format('DD MMMM, YYYY')}</p>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const { data } = await axios.get('https://dev.to/api/articles?username=deltanboi');

  const latestPosts = data.splice(0, 3);

  return {
    props: {
      latestPosts,
    }, // will be passed to the page component as props
  };
}

export default Home;
