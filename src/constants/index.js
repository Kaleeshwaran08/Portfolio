import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg"

export const HERO_CONTENT = `Welcome to my portfolio. I am a data science and machine learning enthusiast with a strong foundation in statistical analysis and data-driven decision-making. My academic journey at the University of East London and professional experience as a software tester have equipped me with the skills to analyze large datasets, develop predictive models, and create insightful visualizations.

I have applied advanced regression techniques, classification, and clustering methods to predict outcomes and extract meaningful patterns from data. My proficiency in Python, SQL, Power BI, and matplotlib enables me to present data-driven insights clearly and effectively. My dedication to continuous learning and passion for data science drive me to deliver high-quality, impactful results.`;

export const ABOUT_TEXT = `At the University of East London, I focused on statistical analysis, machine learning, and data science. I'm skilled in finding patterns and insights to inform strategic choices, having finished projects involving the analysis of huge datasets using Python and SQL. I know how to use Power BI and matplotlib to create graphics that clearly convey findings to stakeholders. My capstone project greatly improved my skills in classification and clustering challenges by applying regression analysis and feature engineering to anticipate house prices. I developed expertise in developing and carrying out test cases, debugging Python scripts, and guaranteeing software performance and quality while working as a software tester at DataTracks. My ability to pay close attention to detail, solve problems, and be proficient in Python were all refined in this role—qualities that are crucial for a career in data science and machine learning.`;

export const EXPERIENCES = [
  {
    year: "11/2020 - 06/2022",
    role: "Software testing And Document Specialist",
    company: "DataTracks - India , Chennai",
    description: `Developed and executed detailed test plans and test cases using Python testing frameworks like pytest and unittest. Conducted thorough manual and automated testing, ensuring software functionality, performance, and security. Utilized CI/CD pipelines for regression testing. Gained proficiency in XBRL and iXBRL standards. Ensured accuracy and completeness through meticulous document review and organization.`,
    technologies: ["Testing", "CI/CD", "Test Plan Development", "XBRL/iXBRL "],
  },
  // {
  //   year: "2022 - 2023",
  //   role: "Frontend Developer",
  //   company: "Adobe",
  //   description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
  //   technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  // },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "Sentiment Analysis of Twitter Data Using NLP",
    image: project1,
    description:
      "The goal is to develop a sentiment analysis model tailored to Twitter and evaluate its effectiveness in capturing nuanced sentiment. Using the Sentiment140 dataset with 1.6 million annotated tweets, the methodology includes data collection, preprocessing, feature extraction, model development, and evaluation. Machine learning algorithms like Naive Bayes, SVM, and RNNs are employed. The model's performance is compared using accuracy, precision, recall, and F1 score.",
    technologies: [" Sentiment Analysis", " Machine Learning", "Data Preprocessing", "Node.js", "Model Evaluation"],
  },
  {
    title: "Detecting Social Media Scams Using Deep Learning",
    image: project2,
    description:
      "This project focuses on implementing a robust deep learning solution for detecting and classifying spam content on Twitter. The approach involves comprehensive preprocessing of textual data, which includes removing URLs, user mentions, hashtags, and special characters. By utilizing advanced tokenization and padding techniques, the model is optimized using binary cross-entropy loss and the Adam optimizer. This research aims to significantly enhance online security and user experience by effectively identifying and mitigating spam across various social media platforms, thereby contributing to a safer and more user-friendly digital environment.",
    technologies: ["Deep Learning", "NLP", "Model Optimization", "Data Security"],
  },
  {
    title: "Clustering Method and Multi Classifier Incorporating Ensemble Techniques",
    image: project3,
    description:
      "This project focuses on developing a clustering or recommendation system using Pyspark's clustering library to implement a KMeans model, emphasizing feature selection for optimal performance. It includes an overview of a real-time streaming application, addressing Legal, Social, and Ethical (LSE) considerations. The project aims to apply unsupervised learning techniques, integrating a recommendation system or clustering methodology with a metaclassifier using ensemble techniques. By enabling data-driven decisions, it provides insights into customer financial management and repayment patterns for both customers and financial institutions.",
    technologies: ["Clustering Algorithms", "Feature SelectionCSS", "Real-Time Data Streaming", "Data-driven Decision Making"],
  },
  {
    title: "Data-science-Image-classification",
    image: project4,
    description:
      "The Sports Person Image Classification project focuses on accurately identifying and categorizing sports celebrities using advanced machine learning techniques. Our initiative provides specialized image classification models designed for researchers, developers, and sports enthusiasts. Powered by Flask, our platform enables easy deployment of these models, supporting applications in sports analytics and fan engagement.Our approach emphasizes scalability and accuracy, making it ideal for diverse use cases in sports media and marketing. With ongoing updates and community support, we ensure continuous improvement and relevance in sports technology.",
    technologies: ["Python", "Data analysis", "Machine learning", "Image processing"],
  },
  {
    title: "House-predictions-Data-Science",
    image: project5,
    description:
      "Drawing from my knowledge and experience in Machine Learning, I have studied various approaches to solve ML problems, including selecting relevant columns, addressing missing data, repairing categorical columns, testing data in various ways based on our initial hypotheses, and utilizing modules to forecast the result. In order to manage tasks like preparation and output calculation for the test data, I also built a pipeline. The data is present in train.csv. To understand the data, please read data_description.txt. Download the repository, making sure that train.csv and Housing Price Analysis.ipynb are in the same folder. Now you can run the whole Notebook (Housing Price Analysis.ipynb) from top to bottom.",
    technologies: ["Python", "Future Engineering", "Data analysis", "Machine learning"],
  },
  {
    title: "HR-Data-Analytics-Tableau",
    image: project6,
    description:
      "The goal of this Tableau project on HR analytics is to give HR managers and corporate executives a thorough method to track, analyze, and make decisions about hiring, development, and retention of employees based on data.HR managers can use the trendline and target line features to monitor their progress in lowering attrition. Charts displaying the employee distribution and attrition rate by age group, gender, work satisfaction, and educational field are included. HR managers can delve deeper and examine the data further with the help of interactive filters and legends on the chart.",
    technologies: ["Advance Excel", "Tableau", "Statistics"],
  },

];


export const EDUCATION = [
  {
    year: "08/2022 - 08/2023",
    place: "University of East London, London, United Kingdom",
    // collage: "University of East London 2022",
    subject: "MSC. Artificial Intelligence",
    skills: [" Data science", " Data analytics", "Machine Learning", "AI",]
  },
  {
    year: "01/2017 - 01/2020",
    place: " Alagappa university, India, Tamil Nadu",
    // collage: "Alagappa university",
    subject: "Bachelor of Computer Application",
    skills: ["Programming", "SQL", "HTML", "Python", "Software"],
  },

];

export const CONTACT = {
  address: "Ilford, London ",
  phoneNo: "+447733851085 ",
  email: "kaleesharjun008@gmail.com",
};
