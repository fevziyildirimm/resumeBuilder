import React from "react";

function Header(props) {
  const {name,degree,tel,mail,adress,social1,social2,social3,file}=props.header
  return (
    <div>
      <div className="header">
        <div className="name-img">
          <span className="name">
            <h1>{name}</h1>
            <h3>{degree}</h3>
          </span>
          <div className="img-div">
            <img className="img" src={file} alt="pp" />
          </div>
        </div>
        <div className="contact">
          <div className="info-contact">
            <ul>
              <li>{adress}</li>
              <li>{tel}</li>
              <li>{mail}</li>
            </ul>
          </div>
          <div className="social">
            <ul>
              <li>{social1}</li>
              <li>{social2}</li>
              <li>{social3}</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="hr-header"/>
    </div>
  );
}

export default Header;
