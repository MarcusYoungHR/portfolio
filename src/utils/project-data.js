const projectData = [
  {
    title: "Productivity Tracker",
    description:
      "This is a productivity tracker designed to support users in setting a diverse range of goals. " +
      "Progress for each goal is meticulously tracked, culminating in the calculation of a daily completion " +
      "percentage for each individual goal, as well as an overall completion rate. Chart.JS is used to visualize the data " +
      "in an engaging, aesthetically appealing manner.",
    image:
      "https://fight-watch-photos.s3.us-west-2.amazonaws.com/productivity.png",
    link: "/productivity",
    imageStyle: {
      objectPosition: "left top",
    },
  },
  {
    title: "MMA Upcoming Bouts",
    description:
      "Leveraging the Google API, a single comprehensive MMA database website is indexed to accurately " +
      "fetch pertinent links. These links are subsequently loaded and meticulously examined using Cheerio.JS, ensuring " +
      "you have the latest information about your preferred MMA athletes, including data about their opponents and " +
      "upcoming fight dates. To keep all data updated, a Node.JS Cron job operates on a daily cycle, continuously " +
      "refreshing the data every 24 hours.",
    image:
      "https://fight-watch-photos.s3.us-west-2.amazonaws.com/fight-watch-thumbnail.png",
    link: "/fight-watch",
  },
  {
    title: "Zero Intercept Ratio Graph",
    description: "Built using Ember.JS, this tool calculates and graphs the zero intercept implied ratio from the user's input.",
    image:
      "https://fight-watch-photos.s3.us-west-2.amazonaws.com/over+recovery.png",
    link: "https://www.graph.marcusmyoung.com",
    imageStyle: {
      objectPosition: "center top",
    },
  },
];

export default projectData;
