import { GithubOutlined, LinkedinFilled, LinkOutlined, TwitterOutlined } from '@ant-design/icons'
import axios from 'axios'
import Head from 'next/head'

const Home = ({ latestPosts }) => {

  return (
    <div className="bg-blue-900 w-screen h-screen p-4 flex justify-center text-white pt-10 overflow-x-hidden">
      <Head>
        <title>My Name is Pedro</title>
        <meta name="description" content="My name is Pedro, I'm a web developer and this is my portfolio." />
        <meta name="keywords" content="Pedro, Ogheneochuko, Hephzibah, Portfolio, React, Developer, StriTech, stritech, software, developement, web, app, design, website, mobile, e-commerce, maitenace consultation, SEO, search engine optimization, SAAS, Software, As, A, Service" />
      </Head>
      <div className="max-w-6xl w-full h-full tablet:max-w-xl">
        <div className="w-1/4 fixed h-full flex flex-col justify-between tablet:w-full tablet:relative tablet:h-auto" >
          <div className="phone:mb-10">
            <p className="text-6xl font-medium m-0">Hi, my name is Ochuko Pedro.</p>
            <p className="text-base mt-10">I’m a Web Engineer currently unemployed. I mostly do front-end development, and I’m a React.js and CSS nerd trying to delve into Machine Learning, AI and Robotics. I also an active member of the Developer Team and Community (<a href="https://bucc.club/" target="_blank" rel="noopener" className="text-blue-600 underline font-medium italics">BUCC</a>) in my school. I believe as engineers we can create things that could potentially change the world for the better.</p>
          </div>
          <ul className="phone:mb-10">
            <li className="mb-3"><a href="#projects">01  -  PROJECTS</a></li>
            <li className="mb-3"><a href="#work_history">02  -  WORK HISTORY</a></li>
            <li className="mb-3"><a href="#skills">03  -  SKILLS</a></li>
            <li className="mb-3"><a href="#blog">04  -  BLOG</a></li>
          </ul>
          <span className="flex items-center mb-20 phone:mb-10 phone:flex-wrap">
            <img src="../static/images/bitmoji-3.png" className="w-10 h-10 rounded-full" />
            <div className="flex phone:mt-5">
              <a href="https://twitter.com/deltanboi" target="_blank" rel="noopener" className="ml-5 flex items-center"><TwitterOutlined className="mr-1" /> Twitter <LinkOutlined className="ml-1" /></a>
              <a href="https://github.com/pedoch" target="_blank" rel="noopener" className="ml-5 flex items-center"><GithubOutlined className="mr-1" />GitHub<LinkOutlined className="ml-1" /></a>
              <a href="https://www.linkedin.com/in/ogheneochuko-pedro-3ba431168/" target="_blank" rel="noopener" className="ml-5 flex items-center"><LinkedinFilled className="mr-1" />LinkedIn<LinkOutlined className="ml-1" /></a>
            </div>
          </span>
        </div>
        <div className="w-1/2 px-3 pt-10 float-right tablet:w-full tablet:float-none">
          <p className="mb-5 font-bold" id="projects" >PROJECTS</p>
          {[{
            title: "Expense Tracker",
            description: "This is a simple app that enables users input their transactions and track expenses made.",
            link: "https://expense-trackometer.netlify.app/",
            github: [{ title: "Front-End", link: "https://github.com/pedoch/expense-tracker-frontend" }, { title: "Back-End", link: "https://github.com/pedoch/expense-tracker-backend" }],
            public: "Open Source",
            tools: "ReactJS, NodeJS"
          }, {
            title: "Church attendance app for contact tracing",
            description: "A simple web app that allows churches take attendance and allow to trace contacts if needed.",
            link: "https://cgmi-vi-attendance.vercel.app/",
            github: [{ title: "N/A", link: "#" }],
            public: "Closed Source",
            tools: "NextJS"
          }, {
            title: "StriTech",
            description: "Website for a software developement firm called StriTech.",
            link: "https://stritech.netlify.app/",
            github: [{ title: "N/A", link: "#" }],
            public: "Closed Source",
            tools: "NextJS"
          }].map((project, index) => {
            return (
              <a href={project.link} target="_blank" rel="noopener" key={project.title + index} className="mb-5 bg-blue-800 p-3 flex flex-col justify-between min-h-40 hover:shadow-xl hover:text-white">
                <div>
                  <p className="">{project.tools}</p>
                  <p className="text-2xl mb-3 font-medium">{project.title}</p>
                </div>
                <p className="mb-2">{project.description}</p>
                <div>GitHub:{project.github.map((link, index) => {
                  return (
                    <a key={link.title + index} href={link.link} target="blank" rel="noopener" className="ml-2">{link.title}</a>
                  )
                })}</div>
                <p>{project.public}</p>
              </a>
            )
          })}
          <p className="mb-5 font-bold mt-16" id="work_history">WORK HISTORY</p>
          {[{
            title: "IT Intern",
            description: "I worked in the information management operations teams, under the business services department.",
            company: "Chevron Nigeria Limited",
            timePeriod: "Jan, 2020 - Jun, 2020",
          }, {
            title: "Front End Developer Intern",
            description: "I worked as a front end web developer. Assisted on enterprise level application",
            company: "OpenDesk Consult",
            timePeriod: "Jun, 2019 - Aug, 2019",
          }].map((work, index) => {
            return (
              <div key={work.title + index} className="mb-5 bg-blue-700 p-3 flex flex-col justify-between min-h-40">
                <di>
                  <p className="text-lg">{work.company}</p>
                  <p className="text-2xl mb-3 font-medium">{work.title}</p>
                </di>
                <p className="mb-2">{work.description}</p>
                <p>{work.timePeriod}</p>
              </div>
            )
          })}
          <p className="mb-5 font-bold mt-16" id="skills">SKILLS</p>
          <div className="flex flex-wrap mb-10">
            {["ReactJS", "TypeScript", "NextJS", "GatsbyJS", "NodeJS", "RestAPI", "GraphQL", "MongoDB", "HTML", "CSS", "TailwindCSS", "Machine Learning", "GNU Octave", "Microsoft Power Platform"].map((skill, index) => {
              return (
                <span key={skill + index} className="py-2 px-3 bg-blue-600 rounded m-1">{skill}</span>
              )
            })}
          </div>
          <p className="mb-5 font-bold mt-16" id="blog">BLOG</p>
          {latestPosts?.map((post, index) => {
            return (
              <a href={post.url} target="_blank" rel="noopener" key={post.title + index} className="mb-5 bg-blue-500 p-3 flex flex-col justify-between min-h-40 hover:shadow-xl hover:text-white">
                <div>
                  <p className="">{post.tags}</p>
                  <p className="text-2xl mb-3 font-medium">{post.title}</p>
                </div>
                <p className="mb-2">{post.description}</p>
                <p>{post.created_at}</p>
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const { data } = await axios.get('https://dev.to/api/articles?username=deltanboi');

  const latestPosts = data.splice(0, 3);

  return {
    props: {
      latestPosts
    }, // will be passed to the page component as props
  }
}

export default Home
