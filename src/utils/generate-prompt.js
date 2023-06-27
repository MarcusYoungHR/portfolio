export default function generatePrompt(jobTitle, company, jobDescription) {
  return `
  Here is my resume:

  Skills: 
  Confluence, TypeScript, Jira, Javascript, Node, React, React Native, Angular, jQuery, MySQL,  Express, MongoDB/Mongoose, HTML, CSS, Bootstrap, Vue, Python, PHP, Redis, NGINX, Sqlite, Sequelize, AWS, EC2, S3, Cloundfront, Route 53, Git Trello, Redux, Redis, Mocha, Chai, Artillery, PostgreSQL, GraphQL, Material UI 
  Experience:
  Vin2 — Full Stack Software Engineer
  February 2022 - February 2023
  • Implemented optimization strategies including JavaScript refactoring, image compression, and lazy loading to
  improve page load speeds from 30 to 80 measured with PageSpeed insights
  • Employed an Nginx load balancer and Redis Cache to optimize production performance, consistently achieving
  up to 1,000 requests per second with a marginal error rate of less than 0.3% and average latency under 1000 ms
  during operations on a database exceeding 10 million records
  • Assembled and led a software development team, fostering a collaborative environment that culminated in a
  significant productivity surge
  Mosaic Learning — Full Stack Software Engineer
  January 2021 - February 2022
  • Engaged in collaborative efforts with a cross-functional team of 10+ engineers to design, construct, and sustain
  numerous front-end services utilizing diverse frameworks such as EmberJS, ReactJS, and Moodle
  • Implemented a responsive design utilizing Bootstrap and Material UI to develop the login page for the Learning
  Management System (LMS)
  • Architected and implemented a REST API to facilitate the procedural aspects of generating, personalizing, and
  finalizing quiz content
  Hack Reactor — Associate Instructor of Software Engineering
  February 2020 - December 2020
  • Mentored and educated over 40 students on CS fundamentals and building modern full stack applications
  • Performed code reviews and debugging sessions with emphasis on engineering best practices
  • Collaborated with fellow instructors to provide one on one support for struggling students, preventing three
  students from failing and seeing their education through to its completion
  


  Write me a cover letter in less than 1300 characters for a ${jobTitle} role at ${company} with the following job description:
  
  ${jobDescription}`
}