import React from "react";

function Skills(props) {
  const arr=new Array(props.skillLenght);
  arr.fill("")
  return (
    <div>
      <h2 className="title">
       
       ⚙️ Yetkinlikler <hr className="hr-header" />
      </h2>
      <div className="skills">
{arr.map((i,key)=>
      <h3  key={key} className="sub-title skill">{props.info["skill"+key]} </h3>
    )}
  
      
      </div>
  



    </div>
  );
}

export default Skills;
