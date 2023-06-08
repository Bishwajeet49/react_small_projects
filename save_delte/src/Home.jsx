export default function Home() {
  const projectsData = [
    {
      id: 6,
      title: "You Tube Clone",
      description: "Lorem ipsum dolor am vitae voluptates expedita! ",
      imageUrl:'src/img/p1.webP'
    },
    {
      id: 1,
      title: "N-lvel comment widget",
      description: "N-lvel comment widget",
      imageUrl:'src/img/p2.jpg'
    },
    {
      id: 2,
      title: "Online Image Editor",
      description: "Online Image Editor",
      imageUrl:'src/img/p3.png'
    },

    {
      id: 3,
      title: "File-Uploader widget",
      description: "Description of Project 4",
      imageUrl:'src/img/p4.png'
    },
    {
      id: 4,
      title: "Online Resume Maker",
      description: "Description of Project 5",
      imageUrl:'src/img/p5.webP'
    },
    {
      id: 5,
      title: "Food Ordering App",
      description: "Description of Project 6",
      imageUrl:'src/img/p6.webP'
    }
  ];
  return (
    <div className="portfolio">
      <AboutMe />
      <h3>Projects</h3>
      <div className="projects">
        {projectsData.map((project) => (
          <div className="project" key={project.id}>
            <img src={project.imageUrl} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const AboutMe = () => {
  const name = "Bishwajeet Pandey";
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "ReactJS",
    "Node.js",
    "PHP",
    "AWS (elementry)"
  ];

  return (
    <div className="about-me">
      <h3>About Me</h3>
      <p>
        Hello! My name is {name}. I am a FullStack developer with experience in
        various technologies.
      </p>
      <h3>Skills</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};
