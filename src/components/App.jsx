import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [arr, setArr] = useState([
    {
      title: "Some",
      cont: "Some",
    },
  ]);

  function add(head, content) {
    setArr((prev) => {
      return [...prev, { title: head, cont: content }];
    });
    console.log("Fine");
  }

  function dltItem(id) {
    setArr((prev) => {
      return prev.filter((val, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea adding={add} />
      {arr.map((val, index) => (
        <Note
          key={index}
          id={index}
          title={val.title}
          content={val.cont}
          delete={dltItem}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
