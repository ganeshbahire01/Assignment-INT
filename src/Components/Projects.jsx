import React, { useEffect, useState } from "react";
import Nav from "./Navbar";
import axios from "axios";
import Card from "./card";
const Projects = () => {
  const [sdata, setdata] = useState([]);
  const getRepo = async () => {
    let data = await axios.get(
      `https://api.github.com/search/repositories?q=user:ganeshbahire01+fork:true&sort=updated&per_page=10&type=Repositories`
    );
    setdata(data.data.items);
  };
  useEffect(() => {
    getRepo();
  }, []);
  console.log(sdata);
  return (
    <div>
      <Nav />
      {sdata.map((el) => (
        <Card {...el} />
      ))}
    </div>
  );
};

export default Projects;
