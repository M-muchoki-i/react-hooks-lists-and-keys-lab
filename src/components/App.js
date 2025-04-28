import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import ProjectList from "./ProjectList";
import user from "../data/user";

function App() {
   const projectList = [
     { id: 1, technologies: ["React", "Node.js", "MongoDB"] },
     { id: 2, technologies: ["Vue.js", "Express", "PostgreSQL"] },
     { id: 3, technologies: ["Angular", "Django", "MySQL"] },
   ];
  return (
    <div>
      <NavBar />
      <Home username={user.name} city={user.city} color={user.color} />
      <About bio={user.bio} links={user.links} />
      <ProjectList projects={projectList} />
    </div>
  );
}

export default App;
