import { useState, useEffect } from "react";

function UseRandomJoke(firstName, lastName) {
  const [joke, setJoke] = useState(" ");

  useEffect(() => {
    const fetchJoke = async () =>
      await fetch(
        `https://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`
      )
        .then((res) => res.json())
        .then((data) => {
          setJoke(data.value.joke);
        });

    fetchJoke();
  }, [firstName, lastName]);

  return joke;
}

export default UseRandomJoke;
