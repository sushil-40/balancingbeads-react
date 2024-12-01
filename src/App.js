import "./App.css";
import { useState } from "react";
import { BeadList } from "./components/BeadList";
import { Form } from "./components/Form";
import { Display } from "./components/Display";

function App() {
  const [searchedbeads, setSearchedbeads] = useState([]);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const size = e.target.elements.sizeInput.value.trim();

    setSearchedbeads(filterBySize(beadsList, size));
  };
  // const [tyresize, setTyresize] = useState("");

  const beadsList = [
    {
      id: 1,

      size: "215-60-16",
      single: 3,
      dual: 4,
    },
    {
      id: 2,
      size: "225-45-17",
      single: 3,
      dual: 6,
    },
    {
      id: 3,
      size: "245-45-18",
      single: 4,
      dual: 6,
    },
    {
      id: 4,
      size: "195-65-15",
      single: 4,
      dual: 8,
    },
  ];

  const filterBySize = (beadsList, size) => {
    return beadsList.filter((bead) => bead.size === size);
  };

  return (
    <div className="wrapper">
      <h1 className="text-center mt-2 mb-2 container">Balancing Beads</h1>
      <hr className="container" />
      <Display searchedbeads={searchedbeads} />
      <Form onSubmit={handleOnSubmit} />
      <BeadList beadsList={beadsList} />
    </div>
  );
}

export default App;
