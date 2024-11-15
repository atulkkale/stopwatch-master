import { useRef } from "react";
import { useState } from "react";

export default function Player() {
  const userName = useRef();
  const [name, setName] = useState(null);

  function handleClick() {
    setName(userName.current.value);
    userName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {name ?? "unknown entity"}</h2>
      <p>
        <input ref={userName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
