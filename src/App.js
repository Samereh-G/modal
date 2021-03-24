import React, { useState } from "react";
import "./App.css";
import List from "./components/List";
import Modal from "./components/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  // const handleCloseModal = () => {
  //   setIsOpen(false);
  // };

  //instead of handleOpenModal and handleCloseModal we can toggle it
  const handleToggleModal = () => {
    return !setIsOpen(false);
  };

  // a && b && c

  return (
    <div>
      just for testing
      <button onClick={handleOpenModal}>add user</button>
      {/* {isOpen && <Modal onClose={handleCloseModal} />} */}
      {isOpen && <Modal onClose={handleToggleModal} />}
      <hr />
      <List />
    </div>
  );
}

export default App;
