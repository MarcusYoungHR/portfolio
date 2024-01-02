const landingPageConfig = {
  navBar: {
    links: ["Banner", "Value", "Services", "Testimonials", "FAQ"],
    containerId: "portfolio",
    logo: "https://marcus-portfolio-static-files.s3.us-west-2.amazonaws.com/assets/innova-logo-2.png",
    classes: {
      logoClass: "",
    },
  },
  banner: {
    header: ["BUSINESS SOLUTIONS", "CRAFTED "],
    highlight: "MASTERFULLY",
    missionStatement: `Innova Prime delivers digital excellence, creating exceptional, functional, and visually captivating websites to propel businesses forward. Our mission is to empower clients with dynamic online presences, driving growth and success in the digital world. Let's build your digital future together.`,
    buttonText: "Get your free quote today",
    styles: {
      containerStyle: undefined,
    },
    classes: {
      missionStatementClass: "fw-bold",
    },
  },
  uniqueValue: {
    header: ["Introducing:", "React"],
    highlight: "NOVA",
    subHeader:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae velit vulputate tortor sollicitudin feugiat et non velit. Praesent fringilla, sem eleifend congue luctus, orci orci posuere lectus, vel sagittis eros lectus sit amet nunc. Curabitur nec justo diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque sit tortor. ",
    image:
      "https://marcus-portfolio-static-files.s3.us-west-2.amazonaws.com/assets/super-nova.png",
    keyPoints: [
      {
        image:
          "https://marcus-portfolio-static-files.s3.us-west-2.amazonaws.com/assets/lightning.jpeg",
        header: "Lightning fast load speeds",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin dapibus pellentesque. Nulla pulvinar nunc sit amet tincidunt interdum. Integer ut consequat massa. Nam rutrum molestie mi. ",
      },
      {
        image:
          "https://marcus-portfolio-static-files.s3.us-west-2.amazonaws.com/assets/custom.jpeg",
        header: "Fully Customizable layout and UI",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin dapibus pellentesque. Nulla pulvinar nunc sit amet tincidunt interdum. Integer ut consequat massa. Nam rutrum molestie mi. ",
      },
      {
        image:
          "https://marcus-portfolio-static-files.s3.us-west-2.amazonaws.com/assets/data.jpeg",
        header: "Frequently Published Updates",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin dapibus pellentesque. Nulla pulvinar nunc sit amet tincidunt interdum. Integer ut consequat massa. Nam rutrum molestie mi. ",
      },
      {
        image:
          "https://marcus-portfolio-static-files.s3.us-west-2.amazonaws.com/assets/tools.jpeg",
        header: "Complete integration with your tools",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin dapibus pellentesque. Nulla pulvinar nunc sit amet tincidunt interdum. Integer ut consequat massa. Nam rutrum molestie mi. ",
      },
    ],
    classes: {
      headerClass: "bg-dark text-light rounded-4 text-center p-2",
      textColClass: "justify-content-center align-items-start d-flex",
      subHeaderClass:
        "fw-semibold bg-white rounded-4 p-3 d-flex align-items-center mb-0",
    },
    keyPointClasses: {
      imageClass:
        " object-fit-cover rounded-circle border border-dark border-5",
    },
  },
  services: {
    header: ["Adding value to your organization"],
    servicesDisplay: "carousel",
    autoPlay: true,
    text: "At Innova Prime, we specialize in a variety of web development services to meet your unique needs. From creating eye-catching landing pages and custom business websites to engaging blogs and robust e-commerce sites, we have the skills to realize your vision. We also excel in designing impactful websites for non-profits, ensuring your message connects with your audience. Our expert team tailors each project to ensure your online presence is distinctive and effective.",
    cards: [
      {
        image:
          "https://marcus-portfolio-static-files.s3.us-west-2.amazonaws.com/assets/landing-page.jpeg",
        header: "Landing Page",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat eleifend finibus. Praesent quis blandit odio. Integer vitae arcu felis. Morbi convallis tristique augue, ac tempus quam posuere. `,
      },
      {
        image:
          "https://marcus-portfolio-static-files.s3.us-west-2.amazonaws.com/assets/business-site.jpeg",
        header: "Business Site",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat eleifend finibus. Praesent quis blandit odio. Integer vitae arcu felis. Morbi convallis tristique augue, ac tempus quam posuere. `,
      },
      {
        image:
          "https://marcus-portfolio-static-files.s3.us-west-2.amazonaws.com/assets/e-commerce.jpeg",
        header: "E-commerce",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat eleifend finibus. Praesent quis blandit odio. Integer vitae arcu felis. Morbi convallis tristique augue, ac tempus quam posuere. `,
      },
      {
        image:
          "https://marcus-portfolio-static-files.s3.us-west-2.amazonaws.com/assets/blog.jpeg",
        header: "Blogs and Portfolios",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat eleifend finibus. Praesent quis blandit odio. Integer vitae arcu felis. Morbi convallis tristique augue, ac tempus quam posuere. `,
      },
      {
        image:
          "https://marcus-portfolio-static-files.s3.us-west-2.amazonaws.com/assets/non-profit.jpeg",
        header: "Non Profit Organizations",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat eleifend finibus. Praesent quis blandit odio. Integer vitae arcu felis. Morbi convallis tristique augue, ac tempus quam posuere. `,
      },
    ],
  },
  portfolio: {
    header: "Our past work",
    subHeader:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id interdum diam. Sed rutrum, ex quis efficitur pharetra, risus ligula laoreet duis. ",
    tiles: [
      {
        image:
          "https://marcus-portfolio-static-files.s3.us-west-2.amazonaws.com/assets/defaultuser.jpg",
        link: "#",
        text: "This could be you!",
      },
      {
        image:
          "https://marcus-portfolio-static-files.s3.us-west-2.amazonaws.com/assets/wandersolarlogo.jpg",
        link: "https://wandersolar.ca/",
        text: "Wander Solar",
      },
      {
        image:
          "https://marcus-portfolio-static-files.s3.us-west-2.amazonaws.com/assets/defaultuser.jpg",
        link: "#",
        text: "This could be you!",
      },
      {
        image:
          "https://marcus-portfolio-static-files.s3.us-west-2.amazonaws.com/assets/defaultuser.jpg",
        link: "#",
        text: "This could be you!",
      }
    ],
  },
  testimonials: {
    header: "See what clients have to say about us",
    cardClasses: {
      containerClass: "",
      cardClass: "",
    },
    reviews: [
      {
        name: "Joe Dispenza",
        company: "Encephelon",
        industry: "Meditation",
        stars: 5,
        image:
          "https://markgroves.com/wp-content/uploads/2023/04/Dr-Joe-Dispenza-Headshot-1.png",
        text: "Marcus Young is the best, oh my God I love Marcus Young he is so cool. Marcus Young is the best meditator I've ever seen by far and Innova Prime is the name to pick. Scott should give Marcus all of his money",
      },
      {
        name: "Some Guy",
        company: "A Company",
        industry: "Industry",
        stars: 5,
        image:
          "https://marcus-portfolio-static-files.s3.us-west-2.amazonaws.com/assets/non-profit.jpeg",
        text: "w0w",
      },
      {
        name: "ya boi",
        company: "idk",
        industry: "Industry",
        stars: 5,
        image:
          "https://marcus-portfolio-static-files.s3.us-west-2.amazonaws.com/assets/non-profit.jpeg",
        text: "this is just dandy this is just dandy this is just dandy this is just dandy this is just dandy this is just dandy this is just dandy this is just dandy this is just dandy this is just dandy this is just dandy this is just dandy this is just dandy this is just dandy this is just dandy ",
      },
      {
        name: "Lorem ipsum",
        company: "dolor sit",
        industry: "aliquam",
        stars: 5,
        image:
          "https://marcus-portfolio-static-files.s3.us-west-2.amazonaws.com/assets/non-profit.jpeg",
        text: " elit. Morbi luctus porta nunc a hendrerit. Mauris id metus ac tortor rhoncus sagittis nec sit amet elit. Vivamus ut pharetra ligula. Donec mollis nisi quis venenatis sodales. Vestibulum blandit ante vel odio euismod, vel condimentum  ",
      },
      {
        name: "Lorem ipsum",
        company: "dolor sit",
        industry: "aliquam",
        stars: 5,
        image:
          "https://marcus-portfolio-static-files.s3.us-west-2.amazonaws.com/assets/non-profit.jpeg",
        text: "elit. Morbi luctus porta nunc a hendrerit. Mauris id metus ac tortor rhoncus sagittis nec sit amet elit. Vivamus ut pharetra ligula. Donec mollis nisi quis venenatis sodales. Vestibulum blandit ante vel odio euismod, vel condimentum  ",
      },
    ],
  },
  faq: {
    items: [
      {
        question: "Lorem ipsum dolor sit amet, conse",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus porta nunc a hendrerit. Mauris id metus ac tortor rhoncus sagittis nec sit amet elit. Vivamus ut pharetra ligula. Donec mollis nisi quis venenatis sodales. Vestibulum blandit ante vel odio euismod, vel condimentum magna ultrices. Quisque nunc risus, elementum eu posuere ut justo. ",
      },
      {
        question: "Lorem ipsum dolor sit amet, conse",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus porta nunc a hendrerit. Mauris id metus ac tortor rhoncus sagittis nec sit amet elit. Vivamus ut pharetra ligula. Donec mollis nisi quis venenatis sodales. Vestibulum blandit ante vel odio euismod, vel condimentum magna ultrices. Quisque nunc risus, elementum eu posuere ut justo. ",
      },
      {
        question:
          "Lorem ipsum dolor sit amet, conse psum dolor sit amet, consectetur adipis",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus porta nunc a hendrerit. Mauris id metus ac tortor rhoncus sagittis nec sit amet elit. Vivamus ut pharetra ligula. Donec mollis nisi quis venenatis sodales. Vestibulum blandit ante vel odio euismod, vel condimentum magna ultrices. Quisque nunc risus, elementum eu posuere ut justo. ",
      },
      {
        question: "Lorem ipsum dolor sit amet, conse",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus porta nunc a hendrerit. Mauris id metus ac tortor rhoncus sagittis nec sit amet elit. Vivamus ut pharetra ligula. Donec mollis nisi quis venenatis sodales. Vestibulum blandit ante vel odio euismod, vel condimentum magna ultrices. Quisque nunc risus, elementum eu posuere ut justo. ",
      },
      {
        question: "Lorem ipsum dolor sit amet, conse",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus porta nunc a hendrerit. Mauris id metus ac tortor rhoncus sagittis nec sit amet elit. Vivamus ut pharetra ligula. Donec mollis nisi quis venenatis sodales. Vestibulum blandit ante vel odio euismod, vel condimentum magna ultrices. Quisque nunc risus, elementum eu posuere ut justo. ",
      },
    ],
  },
  footer: {
    company: "Innova Prime",
    copyrightDate: "2023",
    address: "12316 SE Sequoia Ave Milwaukie, OR 97222",
    logo: "https://marcus-portfolio-static-files.s3.us-west-2.amazonaws.com/assets/innova-logo-2.png",
    callToAction: "LET'S GET STARTED!",
    phone: "+1 (971) 381 0572",
    socialMedia: [
      {
        name: "twitter-x",
        link: "",
      },
      {
        name: "instagram",
        link: "",
      },
      {
        name: "facebook",
        link: "",
      },
      {
        name: "linkedin",
        link: "",
      },
    ],
    servicesLinks: [
      {
        name: "Landing Pages",
        link: "",
      },
      {
        name: "Business Sites",
        link: "",
      },
      {
        name: "E-commerce",
        link: "",
      },
      {
        name: "Blogs and Portfolios",
        link: "",
      },
      {
        name: "Non Profit Organizations",
        link: "",
      },
    ],
    helpfulLinks: [
      { name: "About", link: "" },
      { name: "FAQs", link: "" },
      { name: "Become an Affiliate", link: "" },
      { name: "Client Login", link: "" },
    ],
  },
};

export default landingPageConfig;
