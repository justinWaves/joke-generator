import "./App.css";
import { useState, useRef } from "react";
import UseRandomJoke from "./useRandomJoke";
import Background from "./Background";

function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  //Custom Hook
  const joke = UseRandomJoke(firstName, lastName);

  const generateJoke = (e) => {
    e.preventDefault();
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
  };

  return (
    <div className="app">
      {/*Background Animation*/}
      <Background />
      {/*JSX Return Render*/}
      <div className="container__glass">
        <h1 className="title__text">The Joke Generator</h1>
        <form className="input__container">
          <input
            className="input__firstName"
            placeholder="first name"
            ref={firstNameRef}
          />
          <input
            className="input__lastName"
            placeholder="last name"
            ref={lastNameRef}
          />
          <div class="break"></div>
          <button className="button__submit" onClick={generateJoke}>
            Generate Joke
          </button>
        </form>
        <h2 className="joke__text">{firstName ? joke : null}</h2>
      </div>
    </div>
  );
}

export default App;
