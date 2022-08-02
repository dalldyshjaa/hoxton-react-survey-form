import { useState } from "react";
import AnswersList from "./AnswersList";
import { Form } from "./Form";

function Main() {
  // State for the challenge #3
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [bestFeatures, setBestFeatures] = useState([]);
  const [worstFeatures, setWorstFeatures] = useState([]);
  const [consistency, setConsistency] = useState();
  const [colour, setColour] = useState();
  const [logo, setLogo] = useState();
  const [timeSpent, setTimeSpent] = useState([]);
  const [review, setReview] = useState("");
  function resetState() {
    setUsername("");
    setEmail("");
    setBestFeatures([]);
    setWorstFeatures([]);
    setColour(null);
    setConsistency(null);
    setLogo(null);
    setTimeSpent([]);
    setReview("");
  }

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {
          <AnswersList
            username={username}
            email={email}
            bestFeatures={bestFeatures}
            worstFeatures={worstFeatures}
            consistency={consistency}
            colour={colour}
            logo={logo}
            timeSpent={timeSpent}
            review={review}
          />
        }
      </section>
      <section className="main__form">
        <Form
          setUsername={setUsername}
          setEmail={setEmail}
          setBestFeatures={setBestFeatures}
          setWorstFeatures={setWorstFeatures}
          setConsistency={setConsistency}
          setColour={setColour}
          setLogo={setLogo}
          setTimeSpent={setTimeSpent}
          setReview={setReview}
          resetState={resetState}
        />
      </section>
    </main>
  );
}

export default Main;
