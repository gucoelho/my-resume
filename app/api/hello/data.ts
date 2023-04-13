export const data: Resume = {
    name: "Gustavo Coelho Vieira da Costa",
    details :{
        birthdate: "1995-12-23",
        local: "São Paulo",
        country: "Brazil",
        contact: {
            phone: "+ 55 11 996835182",
            email: "gu_coelho011@hotmail.com",
            linkedin: "/in/gustavo-coelho",
            github: "gucoelho"
        },
    },
    education: [
        { course: "Solution Archtecture MBA", school: "FIAP", startYear: "2018", endYear: "2019"},
        { course: "Systems Analysis and Development", school: "FIAP", startYear: "2015", endYear: "2016"},
        { course: "Computer Technician Course", school: "Fundação Bradesco", startYear: "2014", endYear: "2015"}
    ],
    skills: [
        { name: "C# / .NET Core", category: "backend", years: 8 },
        { name: "SQL", category: "backend", years: 8 },
        { name: "Python", category: "backend", years: 3 },
        { name: "NodeJs", category: "backend", years: 2 },
        { name: "MongoDB", category: "backend", years: 2 },
        { name: "Redis", category: "backend", years: 2 },
        { name: "Git", category: "backend", years: 5 },
        { name: "TypeScript", category: "frontend", years: 5 },
        { name: "JavaScript", category: "frontend", years: 8 },
        { name: "React.js", category: "frontend", years: 5 },
        { name: "Angular", category: "frontend", years: 5 },
        { name: "Azure DevOps", category: "devops", years: 5 },
        { name: "Firebase", category: "devops", years: 2 },
        { name: "Docker", category: "devops", years: 5 },
        { name: "Microsoft Azure", category: "cloud", years: 5 },
        { name: "AWS", category: "cloud", years: 5 },
        { name: "GCP", category: "cloud", years: 5 },
        { name: "Unit testing", category: "concepts", years: 5 },
        { name: "Integration testing", category: "concepts", years: 5 },
        { name: "Acceptance/e2e testing", category: "concepts", years: 5 },
        { name: "CI / CD", category: "concepts", years: 5 },
        { name: "Scrum", category: "agile", years: 5 },
        { name: "Kanban", category: "agile", years: 5 },
    ],
    languages: [
        { name: "Portuguese", level: "native"},
        { name: "English", level: "advanced"}
    ],
    summary: `Graduated in Systems Analysis and Development and in Solutions 
Architecture MBA from FIAP, I have more than 7 years of experience in 
software development. I’m a Full Stack Developer and work primarily with 
C#/.NET Core, ReactJS and Angular, but I keep an open mind to other 
types of languages and tools to deliver value to demands. In the last 5 
years I have been working with agile methodologies and managing to 
guarantee continuous and quality deliveries in productive environments 
with best development practices, such as automated tests and DevOps 
techniques.`,
    experience: [
        {
            title: "Software Developer",
            company: "Lambda3",
            startPeriod: "July 2018",
            endPeriod: Date.now.toString(),
            isCurrent: true,
            details: [
                `Being part of self-managed and multidisciplinary developer teams, 
applying agile methodologies and prioritizing good software development 
practices. Serving customers of varied sizes and specialties and delivering 
solutions into production environments with distinct types of technologies:`,
                [
                    `Built a back-office application for an educational system of a large 
Brazilian institute, using Angular, .NET Core and SQL Server.`, 
`Node.js solution maintenance and develop multiple ReactJS and 
.NET Core applications, using SQL Server and MongoDB databases, 
for a Brazilian insurance company.`,
                    `Built a ReactJS PWA, ReactJS web application, .NET Core REST API 
with SQL Server and a SignalR notification system for a starting 
financial business focused on receivables prepayment.`,
                    `Development and maintenance of an Internet Banking system 
focused on companies, for a large international bank, written in 
Angular, multiple .NET Core services, SQL Server and Redis.`,
                    `Built a mobile application for currency exchange operations in React 
Native, supported by a .NET Core Web API with SQL Server database.`,
                    `Create and manage CI/CD pipelines in Azure DevOps.`,
                    `Deliver all solutions with automated unit and integration tests.`
                ],
                `Being part of developers hiring team, where I worked at all stages of the 
recruitment process, from the first contact, preparation and evaluation of 
technical tests and the final stages of proposals and feedback to 
candidates.`
            ]
        },
        {
            title: "Junior Backend Developer",
            company: "Wunderman Thompson Brasil",
            startPeriod: "Nov 2015",
            endPeriod: "July 2018",
            details: [
                `Worked at Data Engineering and Data Strategy departments, developing 
Python crawlers using web scraping techniques and endpoint 
interception, building ASP.NET Web APIs, C# console applications to help 
with internal processes, Python processes that consume digital marketing 
and analytics APIs. Writing SQL queries, procedures, and views and 
administrate resources on Google Cloud Platform`
            ]
        },
        {
            title: "Junior Programmer",
            company: "InfoSERVER / Wipro",
            startPeriod: "May 2015",
            endPeriod: "Oct 2015",
            details: [
                `Worked with maintenance and customization of sites in Microsoft 
SharePoint and with development of applications in C# for internal 
processes and data processing.`
            ]
        }
    ]
}

type Contact = {
  phone: string;
  email: string;
  linkedin: string;
  github: string;
};

type Education = {
  course: string;
  school: string;
  startYear: string;
  endYear: string;
};

type Skill = {
  name: string;
  category: "backend" | "frontend" | "mobile" | "devops" | "cloud" | "concepts" | "agile";
  years: number;
};

type Language = {
  name: string;
  level: "native" | "beginner" | "intermediate" | "advanced" | "fluent";
};

type Experience = {
  title: string;
  company: string;
  startPeriod: string;
  endPeriod: string;
  isCurrent?: boolean;
  details: (string | string[])[];
};

type Resume = {
  name: string;
  details: {
    birthdate: string;
    local: string;
    country: string;
    contact: Contact;
  };
  education: Education[];
  skills: Skill[];
  languages: Language[];
  summary: string;
  experience: Experience[];
};