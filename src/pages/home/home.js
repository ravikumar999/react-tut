import { useState, useReducer } from "react";
import "./home.css"
import InfoTable from "../../component/info-table/info-table";

const Home = () => {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState(0);
  const [subject, setSubject] = useState("");
  const [studentInfo, setStudentInfo] = useState([
    {
      name: "John",
      roll: 35,
      subject: "Science"
    },
  ]);

  // const studentInfo = [
  //   {
  //     name: "John",
  //     roll: 35,
  //     subject: "Science"
  //   },
  //   {
  //     name: "Jony",
  //     roll: 45,
  //     subject: "Commerce"
  //   },
  //   {
  //     name: "Steffen",
  //     roll: 55,
  //     subject: "Arts"
  //   }
  // ];



  const changeName = (event) => {
    setName(event.target.value)
  }

  const storeData = () => {
    const info = {
      name:name,
      roll:roll,
      subject:subject
    }
    setStudentInfo(oldValue => [...oldValue, info]);
    setName("");
    setRoll(0);
    setSubject("");
  }

  return (
    <div className="info-wrapper">
      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll</th>
            <th>Subject</th>
          </tr>
        </thead>
        <tbody>
          {
            studentInfo.map((info, index) => {
              return (
                <InfoTable data={info} index={index} key={index} />
              )
            })
          }
        </tbody>
      </table>
      <div className="user-input">
        <div>
          <input type="text" placeholder="enter name" value={name} onChange={changeName} />
        </div>
        <div>
          <input type="text" placeholder="enter roll" value={roll} onChange={$event => setRoll($event.target.value)} />
        </div>
        <div>
          <input type="text" placeholder="enter subject" value={subject} onChange={$event => setSubject($event.target.value)} />
        </div>
        <button onClick={storeData}>Insert</button>
      </div>  
    </div>
  )
}

export default Home;