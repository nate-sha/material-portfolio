import { Typography } from "@mui/material";
import { Box } from "@mui/system";

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
        ],
      },
      {
        title: "Solution",
        content: [
          "Developed a cloud-native full-stack app that can be accessed by multiple users.",
          "Parses emails sent by the vendors, cleanses the data, and stores it in a central data warehouse.",
        ],
      },
    ],
    githubUrl: "",
    techStack: ["React", "Django", "Pandas", "Cloud-Native"],
    stackItems: [
      {
        title: "Frontend",
        description:
          "ReactJS, Material-UI, React Query, React Table, Apexcharts, ReCharts, Formik, Yup, Axios",
      },
      {
        title: "Backend",
        description: "Django, Django-REST, Pandas",
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
    bodyItems: [],
    githubUrl: "",
    techStack: ["React", "Material-UI", "Google Cloud Platform"],
    stackItems: [],
  },
  {
    name: "A Dealership Review App",
    description:
      "A Dealership Review App is a web app that helps users find and review car dealerships.",
    bodyItems: [],
    githubUrl: "",
    techStack: ["React", "Material-UI", "Google Cloud Platform"],
    stackItems: [],
  },
  {
    name: "eCourser",
    description:
      "eCourser is a web app that helps users find online courses. It is built using ReactJS and Material-UI. It is fully responsive and supports dark mode.",
    bodyItems: [],
    githubUrl: "",
    techStack: ["React", "Material-UI", "Google Cloud Platform"],
    stackItems: [],
  },
  {
    name: "Material Portfolio",
    description:
      "A portfolio website built using ReactJS and Material-UI. It is fully responsive and supports dark mode.",
    bodyItems: [
      {
        title: "Goal",
        content:
          "To create a portfolio website that is fully responsive and supports dark mode.",
      },
    ],
    githubUrl: "",
    techStack: ["React", "Material-UI", "Google Cloud Platform"],
    stackItems: [
      {
        title: "Frontend",
        description: "ReactJS, Material-UI, React Query, Formik, Yup, Axios",
      },
      {
        title: "Cloud Services",
        description:
          "Google Cloud Platform, Cloud Run, Cloud Storage, Cloud Build, Eventarc, Secret Manager",
      },
    ],
  },
];

export default porjects;
