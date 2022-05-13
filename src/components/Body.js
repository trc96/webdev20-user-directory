import React, { useState } from 'react';
import "./Body.css";
import NavButtons from "./NavButtons";
import People from "./People/People";

const Body = () => {
    const [index, setIndex] = useState(0)    

  return (
    <div className="body-background">
      <div className="body-main">
        <h2 className="person-counter">{People[index].id}/25</h2>
        <h2 className="person-name">{People[index].name}</h2>
        <div className="person-info">
          <h3>From: {People[index].from}</h3>
          <h3>Job Title: {People[index].jobTitle}</h3>
          <h3>Employer: {People[index].employer}</h3>
        </div>
        <div className="favorite-movies">
          <h3 className="favorite-thing">Favorite Movies:</h3>
          <ol className="favorites-list">
            <li className="favorite-list-item">{People[index].movie1}</li>
            <li className="favorite-list-item">{People[index].movie2}</li>
            <li className="favorite-list-item">{People[index].movie3}</li>
          </ol>
        </div>
      </div>
      <NavButtons index={index} setIndex={setIndex} />
    </div>
  );
};

export default Body;
