import { ExperienceProps } from "@/proptypes";

const experiences: ExperienceProps[] = [
    {
        company: "Tesla",
        position: "Software Engineer Intern",
        startDate: "Aug 2023",
        endDate: "Jan 2024",
        description: `Led the reduction of AWS costs by $30k/month after migrating critical lambda functions and cloud resources to an on-premises pub-sub solution using Golang, PostgreSQL, and Apache Kafka.
        Saved 100 hours of developer time per year by creating custom Github Actions across 5 different repositories to run integration tests and deploy to Kubernetes and ArgoCD.`,
        skills: ["Go", "Django", "Kubernetes", "ArgoCD", "Kafka"],
    },
    {
        company: "Groupr",
        position: "Team Lead",
        startDate: "Oct 2022",
        endDate: "May 2023",
        description: `Co-Founded a startup to create a match-making web app aiding in the formation of hundreds of total teams.
        Received repeat invitations to be utilized again in the following years after deploying the application at several
        hackathons, resulting in 50 teams being created from a complex match-making algorithm.
        Delivered a working prototype to market in 2 months after leading the development of the Django REST
        backend with 7 developers, designing the architecture, and directing weekly SCRUM meetings.`,
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