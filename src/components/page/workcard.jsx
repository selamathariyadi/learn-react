
import React from 'react';
import { NavLink } from "react-router-dom";
const workcard = (props) => {
  return (
    <div className="project-card">
        <img src={props.imgsrc} alt="" />
        <h2 className="project-tittle">{props.title}</h2>
            <div className="pro-details">
              <p>{props.text}</p>
                <div className="pro-btnss">
                    <NavLink to={props.view} className="btn">View</NavLink>
                    <NavLink to="url.com" className="btn">Source</NavLink>
                  </div>
              </div>       
    </div>
  )     
}
export default workcard;