import React from "react";

function Education(props) {
  const arr=new Array(props.edulenght);
  arr.fill("")
  return (
    <div>
    
      <h2 className="title">
      ✎ Eğitim <hr className="hr-header" />
      </h2>

    {arr.map((i,key)=>
    
      <div className="sub-title" key={key}>
        <h3>{props.info["eduName"+key]}</h3>
        <div className="sub-title-info edu-info">
          <h4 >{props.info["eduFaculty"+key]}</h4>
          <p>GNO: {props.info["eduInfo"+key]} </p>
          <p>09.2015 - 08.2019</p>
        </div>
      </div>)}

 {/*
      <div className="sub-title">
        <h3>ANADOLU ÜNİVERSİTESİ</h3>
        <div className="sub-title-info edu-info">
          <h4 >Lisans - Havacılık Yönetimi</h4>
          <p>GNO: 2.95 /4 </p>
          <p>09.2016 -</p>
        </div>
      </div> */}
    </div>
  );
}

export default Education;
