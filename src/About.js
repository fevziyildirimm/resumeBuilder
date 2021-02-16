import React from "react";

function About(props) {
  return (
    <div>
      <h2 className="title">
        Hakkımda <hr className="hr-header" />
      </h2>
      <div className="sub-title-info">
        <p>
         {props.about}
        </p>
      </div>
    </div>
  );
}

export default About;
