const porjects = [
  {
    name: "Activity Dash",
    description:
      "Activity Dash is a cloud-native interactive dashboard developed using Django, Pandas (data wrangling), and ReactJS. It aims to help managers analyze activity logs gathered from different data sources.",
    bodyItems: [
      {
        title: "Business Case Scenario",
        content:
          "A business contacts multiple service vendors(agencies) to outsource truck drivers, construction workers, translators, etc. ",
      },
      {
        title: "Goal",
        content:
          "To analyze the activity logs gathered from different data sources to identify trends and patterns.",
      },
      {
        title: "Problem",
        content: [
          "Not all vendors offer an online portal to download and interact with the data.",
          "All vendors offered to email a daily spreadsheet that needs data cleansing (time-consuming) before they are ready for analysis by a tool such as MS Excel.",
          "The data is not stored in a central data warehouse.",
        ],
      },
      {
        title: "Requirements",
        content: [
          "Can be accessed by multiple users, on any device (mobile, desktop).",
          "Parses emails sent by the vendors, cleanses the data, and stores it in a central data warehouse.",
          "Provides a dashboard to analyze the data.",
          "Cost-effective.",
        ],
      },
      {
        title: "Solution Pipeline",
        content: [
          "Cloud Run (serverless) responds to an email sent by the vendor, parses the data, and stores it in a storage bucket.",
          "Cloud Run (serverless) responds to a file upload event in the storage bucket, cleanse the data, and passes it to a cloud Django app.",
          "Cloud Django app stores the data in a Cloud SQL database and provides a REST API.",
          "ReactJS app consumes the REST API and provides an interactive dashboard.",
        ],
      },
    ],
    githubUrl: "",
    techStack: ["React", "Django", "Pandas", "Cloud-Native"],
    stackItems: [
      {
        title: "Backend",
        description: "Django, Django-REST, Pandas",
      },
      {
        title: "Frontend",
        description:
          "ReactJS, Material-UI, React Query, React Table, Apexcharts, ReCharts, Formik, Yup, Axios",
      },

      {
        title: "Cloud Services",
        description:
          "Google Cloud Platform, Cloud Run, Cloud SQL, Cloud Storage, Cloud Build, Eventarc, Secret Manager",
      },
      {
        title: "Other",
        description: "Docker, Git, GitHub",
      },
    ],
  },
  {
    name: "DPH Demographics Helper",
    description:
      "DPH Demographics Helper is a web app that helps users get the demographics of a population based on the data provided by the US Census; this data is required by the Department of Public Health (DPH) to determine the number of COVID-19 vaccines needed for a given population.",
    bodyItems: [
      {
        title: "Business Case Scenario",
        content:
          "A hospital needs to fill out the annual DPH Health Equity Report - Section 13 Demographics",
      },
      {
        title: "Goal",
        content:
          "Get the data from the US Census and fill out the DPH Health Equity Report - Section 13 Demographics",
      },
      {
        title: "Problem",
        content: "The Census data is not easy to understand and utilize",
      },
      {
        title: "Requirements",
        content: [
          "Can be accessed by multiple users, on any device (mobile, desktop).",
          "Provides an app that returns the demographics data in a format that matches the DPH Health Equity Report - Section 13 Demographics.",
          "User should be able to select the cities and states from a dropdown list (Service Area).",
        ],
      },
      {
        title: "Solution Architecture",
        content: [
          "Backend: Falsk app that consumes the US Census API and returns the data in a format that matches the DPH Health Equity Report - Section 13",
          "Frontend: ReactJS app that consumes the Flask app and provides a user interface",
          "Cloud Services: Google Cloud Platform, Cloud Run, Cloud Build",
        ],
      },
    ],
    githubUrl: "",
    techStack: ["React", "Material-UI", "Google Cloud Platform"],
    stackItems: [
      {
        title: "Backend",
        description: "Flask, US Census API",
      },
      {
        title: "Frontend",
        description: "ReactJS, Material-UI, Axios",
      },

      {
        title: "Cloud Services",
        description: "Google Cloud Platform, Cloud Run, Cloud Build",
      },
      {
        title: "Other",
        description: "Docker, Git, GitHub",
      },
    ],
  },
  {
    name: "Material Portfolio",
    description:
      "A portfolio website built using ReactJS and Material-UI. It is fully responsive and supports dark mode.",
    bodyItems: [
      {
        title: "Goal",
        content:
          "To create a portfolio website that can be used as a template and easily customized by anyone.",
      },
    ],
    githubUrl: "",
    techStack: ["React", "Material-UI", "Google Cloud Platform"],
    stackItems: [
      {
        title: "Frontend",
        description: "ReactJS, Material-UI",
      },
      {
        title: "Cloud Services",
        description: "Google Cloud Platform, Cloud Run, Cloud Build",
      },
    ],
  },
  // {
  //   name: "A Dealership Review App",
  //   description:
  //     "A Dealership Review App is a web app that helps users find and review car dealerships.",
  //   bodyItems: [],
  //   githubUrl: "",
  //   techStack: ["React", "Material-UI", "Google Cloud Platform"],
  //   stackItems: [],
  // },
  // {
  //   name: "eCourser",
  //   description:
  //     "eCourser is a web app that helps users find online courses. It is built using ReactJS and Material-UI. It is fully responsive and supports dark mode.",
  //   bodyItems: [],
  //   githubUrl: "",
  //   techStack: ["React", "Material-UI", "Google Cloud Platform"],
  //   stackItems: [],
  // },
];

export default porjects;
