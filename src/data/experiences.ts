import { ExperienceProps } from "@/proptypes";

const experiences: ExperienceProps[] = [
    {
        company: "Tesla",
        position: "Software Engineer Intern",
        startDate: "Aug 2023",
        endDate: "Jan 2024",
        description: `Automated manually scanning QR codes by designing and deploying a highly-performant Golang application to call Tesla factory APIs by ingesting data from a Kafka Topic that produces 26 million events per day. 
        Reduced future AWS costs by $30k/month by analysing critical lambda functions, migrating cloud resources into Tesla data centers, and creating a deployment plan that ultimately resulted in no downtime during cut-over.`,
        skills: ["Go", "Django", "Kubernetes", "ArgoCD", "Kafka"],
    },
    {
        company: "Groupr",
        position: "Team Lead",
        startDate: "Oct 2022",
        endDate: "May 2023",
        description: `Built a web app which gives users a Tinder-like UI to find group members for events such as hackathons.
        Led the development team of 4 as the sole experienced backend engineer to write a Django REST API.
        Deployed the application at hackathons allowing over 50 teams to be created from our matching algorithm.`,
        skills: ["React", "Typescript", "Django (DRF)", "SQLite", "Docker"]
    },
    {
        company: "Hitachi",
        position: "Software Analyst Intern",
        startDate: "May 2022",
        endDate: "Dec 2022",
        description: `Overhauled a safety-critical software tool used for visualizing and editing railway designs by updating the runtime environment to Electron, leveraging web sockets and shifting to ASP.NET with microservice architecture. 
        Architected a custom end-to-end testing library built on Playwright and integrated with the Jenkins CI/CD build pipeline, reducing regression testing time by 90%. 
        Boosted end-user productivity with the addition of 30+ new features, using VueJS to create custom components.`,
        skills: ["ASP.NET", "C#", "VueJS", "Jenkins", "Polymer"]
    },
    {
        company: "Farmlink",
        position: "Software Developer Intern",
        startDate: "Sep 2021",
        endDate: "Dec 2021",
        description: `Developed a full-stack application using Agile Scrum, VueJS, REST APIs, and CRUD operations with 90% test coverage via Jest and close collaboration with the product owner. 
        Reduced request latency by 40% by optimizing a MySQL database query using a Python script and custom SQL queries to partition 10+ million stale rows in the main MySQL table. 
        Employed web scraping to gather and clean geographical data points from dozens of government sources, resulting in a comprehensive set of map data points for geofencing applications.`,
        skills: ["Django", "VueJS", "MySQL"]
    },
]

export default experiences