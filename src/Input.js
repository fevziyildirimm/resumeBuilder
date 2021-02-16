import React, { useState } from "react";

function Input(props) {
  const questions = ["name", "degree", "tel", "mail", "adress", "social1"];
  const [info, setInfo] = useState({ name: "" });
  const [experience, setExperience] = useState(["comp1"]);
  const [edu, setEdu] = useState(["edu1"]);
  const [skill, setSkill] = useState(["skill1"]);
  function addExperience() {
    setExperience([...experience, ""]);
  }

  function addEdu() {
    setEdu([...edu, ""]);
  }

  function addSkill() {
    setSkill([...skill, ""]);
  }

  const gonder = () => {
    props.al(info, experience.length, edu.length, skill.length, true);
  };

  function onChangeHandler(e) {
    setInfo((currentState) => ({
      ...currentState,
      [e.target.name]: e.target.value,
    }));
  }

  function onchangeImage(event) {
    setInfo((currentState) => ({
      ...currentState,
      file: URL.createObjectURL(event.target.files[0]),
    }));
  }

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <h3>Kişisel Bilgiler</h3>
        {questions.map((q, key) => (
          <input
            style={{ margin: "1em" }}
            key={key}
            name={q}
            type="text"
            placeholder={q.charAt(0).toUpperCase() + q.slice(1)}
            onChange={(e) => onChangeHandler(e)}
          />
        ))}
        <div >Lütfen bir resim Seçin</div>

        <input
        id="file"
          type="file"
          onChange={(e) => onchangeImage(e)}
          className="btn"
          required="required"
        />
        <h3>Hakkımda</h3>
        <textarea
          style={{ margin: "1em", resize: "none" }}
          cols="80"
          rows="8"
          name="about"
          onChange={(e) => onChangeHandler(e)}
          placeholder={"Kendinizi kısa bir şekilde tanıtın"}
        />
        <h3>Deneyim</h3>

        <div>
          {" "}
          {experience.map((e, key) => (
            <div style={{ display: "flex" }} key={key}>
              <div>
                <input
                  type="text"
                  placeholder="Şirket Adı"
                  name={"Companyname_" + key}
                  onChange={(e) => onChangeHandler(e)}
                  style={{ height: "1em", padding: "0.5em", margin: "0.5em" }}
                />
                <input
                  name={"Companyaddress_" + key}
                  onChange={(e) => onChangeHandler(e)}
                  type="text"
                  placeholder="Şirket Lokasyonu"
                  style={{ height: "1em", padding: "0.5em", margin: "0.5em" }}
                />
              </div>

              <textarea
                style={{ margin: "1em", resize: "none" }}
                cols="80"
                rows="8"
                name={"Companyinfo_" + key}
                onChange={(e) => onChangeHandler(e)}
                placeholder={
                  "Çalıştığınız şirketteki yer aldığınız projeler ve görevlerinizi burada belirtiniz "
                }
              />
            </div>
          ))}
          <button className="add" onClick={addExperience}>
            +
          </button>
        </div>

        <br />

        {/* Eğitim */}

        <h3>Eğitim Bİlgileri</h3>

        <div>
          {" "}
          {edu.map((e, key) => (
            <div style={{ display: "flex" }} key={key}>
              <div>
                <input
                  type="text"
                  placeholder="Okul Adı"
                  name={"eduName" + key}
                  onChange={(e) => onChangeHandler(e)}
                  style={{ height: "1em", padding: "0.5em", margin: "0.5em" }}
                />
                <input
                  name={"eduFaculty" + key}
                  onChange={(e) => onChangeHandler(e)}
                  type="text"
                  placeholder="Fakülte / Bölüm"
                  style={{ height: "1em", padding: "0.5em", margin: "0.5em" }}
                />
              </div>

              <input
                type="text"
                style={{ height: "1em", padding: "0.5em", margin: "0.5em" }}
                name={"eduInfo" + key}
                onChange={(e) => onChangeHandler(e)}
                placeholder={"AGNO, mezuniyet tarihi"}
              />
            </div>
          ))}
          <button className="add" onClick={addEdu}>
            +
          </button>
        </div>

        {/* Yetenek */}

        <h3>Yetkinlik Bİlgisi</h3>
        {skill.map((e, key) => (
          <div  key={key}>
            <div>
              <input
                type="text"
                placeholder="Örn: Python, Photoshop"
                name={"skill" + key}
                onChange={(e) => onChangeHandler(e)}
                style={{ height: "1em", padding: "0.5em", margin: "0.5em" }}
              />{" "}
            </div>{" "}
          </div>
        ))} <button className="add" onClick={addSkill}>
        +
      </button>
{/* ------------------------------------------------------------------------------ */}


        <button className="btn" onClick={() => gonder()} type="submit">
          Oluştur
        </button>
      </form>
    </div>
  );
}

export default Input;
