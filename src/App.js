import React, { useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import About from "./About";
import "./App.css";
import Education from "./Education";
import Experience from "./Experience";
import Header from "./Header";
import Input from "./Input";
import Skills from "./Skills";

const App = () => {
  const componentRef = useRef();
  const [info, setInfo] = useState("");
  const [experiencelenght, setExperiencelenght] = useState();
  const [educationlenghts, setEducationlenghts] = useState();
  const [skilllenghts, setSkillLenghts] = useState();
  const [shows, setSows] = useState();

  function asd() {
    return <Input al={al} />;
  }

  function al(gelen, exlenght = 1, edulenght = 1,skilllenght=1,show=false) {
    const nasme = gelen;
    setInfo((info) => (info = nasme));
    setExperiencelenght((experiencelenght) => (experiencelenght = exlenght));
    setEducationlenghts((educationlenghts) => (educationlenghts = edulenght));
    setSkillLenghts((skilllenghts) => (skilllenghts = skilllenght));
    setSows((shows) => (shows = show));
  }
  return (
    <div>
      <div>
        {asd()}

        <div className="header">
          <ReactToPrint
            trigger={() => <button className="btn">Yazdır</button>}
            content={() => componentRef.current}
            documentTitle={info.name + " ozgecmis"}
          />
          {shows&&(
          <div ref={componentRef}>
            <Header header={info} />
            <About about={info.about} />
            <Experience exlenght={experiencelenght} info={info} />
            <div className="bottom-area">
              <Education edulenght={educationlenghts} info={info}/>
              <Skills skillLenght={skilllenghts}  info={info}/>
            </div>
          </div>)}
        </div>
      </div>
    </div>
  );
};
export default App;
