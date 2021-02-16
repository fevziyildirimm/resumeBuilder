import React from "react";

function Experience(props) {
  const arr=new Array(props.exlenght);
  arr.fill("")
  return (
    <div>
      <h2 className="title">
      💻 Deneyim <hr className="hr-header" />
      </h2>
      {/* company-1 */ }
      <div className="sub-title">
        {arr.map((i,key)=>(
        <div key={key}>
        <h3>{props.info["Companyname_"+key]}</h3>
        <div className="sub-title-info">
          <p className="comp-info">{props.info["Companyaddress_"+key]}</p>
          <p>
          {props.info["Companyinfo_"+key]}
          </p>
        </div>
        </div>))}
      </div>


    </div>
  );
}

export default Experience;
