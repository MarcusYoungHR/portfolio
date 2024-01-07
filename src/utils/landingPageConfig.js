const landingPageConfig = {
  navBar: {
    links: [
      "Banner",
      "Value",
      "Services",
      "Portfolio",
      "Process",
      "Projects",
      "Testimonials",
      "FAQ",
    ],
    containerId: "portfolio",
    logo: "https://marcus-portfolio-static-files.s3.us-west-2.amazonaws.com/assets/innova-logo-2.png",
    classes: {
      logoClass: "",
    },
  },
  banner: {
    header: ["BUSINESS SOLUTIONS", "CRAFTED "],
    highlight: "MASTERFULLY",
    missionStatement: `Nova Rising delivers digital excellence, creating exceptional, functional,
     and visually captivating websites to propel businesses forward. Our mission is to empower
      clients with dynamic online presences, driving growth and success in 
      the digital world. Let's build your digital future together.`,
    buttonText: "Get your free quote today",
    styles: {
      containerStyle: undefined,
    },
    classes: {
      missionStatementClass: "fw-bold",
    },
  },
  statistics: {
    stats: [
      {
        prefix: "%",
        num: 9900,
        suffix: "",
        text: "Average ROI for a business website",
      },
      {
        prefix: "%",
        num: 81,
        suffix: "",
        text: "Of consumers choose to research a business online",
      },
      {
        prefix: "%",
        num: 75,
        suffix: "",
        text: "Of people judge a business's credibility based on its website",
      },
    ],
    classes: {
      prefixClass: "fs-c4",
    },
  },
  uniqueValue: {
    header: ["Introducing:", "React"],
    highlight: "NOVA",
    subHeader: `What is ReactNova and why is it superior to the alternatives such as WordPress and Square Space?
    Imagine the difference between a filet mignon and a fast food cheese burger. Sure, the burger will
    satiate your appetite in a much shorter time frame, but many would agree that a filet mignon is well 
    worth the wait. Well, with our proprietary in house development kit dubbed 'ReactNova', you can
    have a filet mignon in the same time it takes to make a cheese burger, and for the same price too.`,
    image:
      "https://marcus-portfolio-static-files.s3.us-west-2.amazonaws.com/assets/super-nova.png",
    keyPoints: [
      {
        image:
          "https://marcus-portfolio-static-files.s3.us-west-2.amazonaws.com/assets/lightning.jpeg",
        header: "Lightning fast load speeds",
        text: "Lightning-fast load speeds greatly enhance user experience by providing instant access to content, reducing wait times, and improving website performance, essential for user engagement and satisfaction.",
      },
      {
        image:
          "https://marcus-portfolio-static-files.s3.us-west-2.amazonaws.com/assets/custom.jpeg",
        header: "Fully Customizable layout and UI",
        text: "Fully customizable layout and UI empowers users to personalize the software's appearance and functionality. Tailor colors, fonts, and layout to suit individual needs and preferences, enhancing the user experience.",
      },
      {
        image:
          "https://marcus-portfolio-static-files.s3.us-west-2.amazonaws.com/assets/data.jpeg",
        header: "Frequently Published Updates",
        text: "Frequently published updates ensure the software stays current with the latest features and security enhancements. Regular improvements and bug fixes keep the application efficient, secure, and user-friendly.",
      },
      {
        image:
          "https://marcus-portfolio-static-files.s3.us-west-2.amazonaws.com/assets/tools.jpeg",
        header: "Complete integration with your tools",
        text: "Frequently published updates keep the software up-to-date with new features and security enhancements. This ensures ongoing improvement and bug fixes, leading to a consistently smooth and evolving experience for users.",
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
    header: ["Adding Value To Your Organization"],
    servicesDisplay: "carousel",
    autoPlay: true,
    text: "At Innova Prime, we specialize in a variety of web development services to meet your unique needs. From creating eye-catching landing pages and custom business websites to engaging blogs and robust e-commerce sites, we have the skills to realize your vision. We also excel in designing impactful websites for non-profits, ensuring your message connects with your audience. Our expert team tailors each project to ensure your online presence is distinctive and effective.",
    cards: [
      {
        image:
          "https://marcus-portfolio-static-files.s3.us-west-2.amazonaws.com/assets/landing-page.jpeg",
        header: "Landing Page",
        description: `Landing pages are tailored web pages designed for specific marketing goals. They engage visitors with focused content, driving actions like sign-ups or sales, and are key in digital marketing, linking ads to conversions.`,
      },
      {
        image:
          "https://marcus-portfolio-static-files.s3.us-west-2.amazonaws.com/assets/funnel.jpeg",
        header: "Click Funnel",
        description: `ClickFunnels are automated online sales systems designed to guide potential customers through a buying journey. They efficiently convert visitors into leads and sales through a series of optimized web pages, reducing marketing effort and increasing revenue.`,
      },
      {
        image:
          "https://marcus-portfolio-static-files.s3.us-west-2.amazonaws.com/assets/business-site.jpeg",
        header: "Business Site",
        description: `Business websites serve as a digital storefront, offering a comprehensive view of a company's services, ethos, and contact information. They're essential for credibility, customer engagement, and providing a platform for e-commerce and content marketing.`,
      },
      {
        image:
          "https://marcus-portfolio-static-files.s3.us-west-2.amazonaws.com/assets/e-commerce.jpeg",
        header: "E-commerce",
        description: `E-commerce websites are online platforms where businesses sell products or services directly to customers. They feature product catalogs, shopping carts, and secure payment systems, essential for convenient shopping and global reach.`,
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
        description: `Non-profit websites showcase an organization's mission, impact, and needs. They focus on storytelling, donor engagement, and volunteer recruitment, providing a hub for information, donations, and community involvement.`,
      },
    ],
  },
  portfolio: {
    header: "Our Past Work",
    subHeader:
      "Discover our diverse portfolio of cutting-edge web solutions and creative digital campaigns, each reflecting our commitment to excellence and client vision.",
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
      },
    ],
  },
  ourProcess: {
    header: "Working With Us Is Easy As A-B-C ",
    subHeader: "Our streamlined, three step process ensures satisfaction",
    processes: [
      {
        header: "Get a free quote",
        text: "Schedule a discovery call to learn how we may best fit your needs",
        lottie: "incoming-call",
      },
      {
        header: "Fill out our onboarding form",
        text: "Our simple, 15 minute form ensures that we have all of the information we need to build your website masterfully",
        lottie: "checklist",
      },
      {
        header: "Sit back and relax!",
        text: "This is your main priority! Get as comfortable as you can and watch the magic happen!",
        lottie: "sleep",
      },
    ],
    classes: {
      processClasses: {
        lottieClass: "lottie",
      },
    },
  },

  testimonials: {
    header: "See What Clients Have To Say",
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
  projects: {
    header: "Some Fun Stuff",
    subHeader:
      "Here are some additional projects we've build out along the way",
    projects: [
      {
        header: "Productivity Tracker",
        text: "Productivity Tracker is a sleek, React-based application designed for setting and tracking productivity goals. It utilizes Node.js, Express, MySQL, Bootstrap, CSS, HTML, and AWS for robust performance and a responsive design. Users can set goals in three categories: time elapsed, steps completed, and checkboxes for tasks. The app calculates daily progress percentages and averages across all tasks, offering a clear view of overall productivity. Ideal for both individuals and teams, this tool helps efficiently monitor and enhance productivity.",
        image:
          "https://fight-watch-photos.s3.us-west-2.amazonaws.com/productivity.png",
        link: "/productivity",
      },
      {
        header: "MMA Upcoming Bouts",
        text: "MMA Upcoming Bouts is a dynamic application for MMA fans, built with React, Bootstrap, HTML5, CSS3, Node, Express, MySQL, and hosted on AWS. It tracks favorite athletes, updating every 24 hours with their latest images, upcoming bout dates, and opponent details. The app scrapes an MMA database, ensuring current information. Features include a user-friendly interface, efficient data management with MySQL, and reliable performance thanks to its robust tech stack. Ideal for staying up-to-date with MMA events, it offers a seamless experience for both desktop and mobile users",
        image:
          "https://fight-watch-photos.s3.us-west-2.amazonaws.com/fight-watch-thumbnail.png",
        link: "/fight-watch",
      },
      {
        header: "Zero Intercept Ratio Graph",
        text: "InterceptGrapher is a web application for calculating and graphing zero intercept values. Developed with Ember.js, HTML5, and CSS3, it offers a user-friendly interface and responsive design. Users input data and visualize zero intercepts using an HTML canvas graph. Hosted on AWS S3, the app ensures reliable performance and accessibility. Ideal for educational, analytical, or personal use.",
        image:
          "https://fight-watch-photos.s3.us-west-2.amazonaws.com/over+recovery.png",
        link: "https://www.graph.marcusmyoung.com",
      },
    ],
  },
  faq: {
    items: [
      {
        question: "How much does a new website cost?",
        answer:
          "Website costs vary based on complexity, number of pages, and special features. Basic sites start at a few thousand dollars, while more complex sites cost more. We provide transparent, detailed quotes tailored to your specific needs.",
      },
      {
        question: "Will my website be mobile-friendly?",
        answer:
          "Every website we build is mobile-friendly, using responsive design to ensure a seamless experience across all devices. This approach is crucial for user experience and search engine rankings.",
      },
      {
        question: "Can you help with SEO and increasing website traffic?",
        answer:
          "Our SEO services include keyword research, content optimization, backlink building, and local SEO for targeted traffic. We provide regular performance reports and adjust strategies to align with the latest SEO trends.",
      },
      {
        question: "Do you provide content for the website?",
        answer:
          "We offer content creation services, including SEO-optimized text, visuals, and videos, tailored to your brand’s voice. We can also optimize existing content to enhance your website's effectiveness and engagement.",
      },
      {
        question:
          "What kind of support do you offer after the website goes live?",
        answer:
          "We offer ongoing support post-launch, including technical issues resolution, security updates, performance optimization, content updates, and SEO monitoring. Our support packages are customizable to fit your needs, ensuring your website remains efficient and effective.",
      },
    ],
  },
  footer: {
    company: "Nova Rising LLC",
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
