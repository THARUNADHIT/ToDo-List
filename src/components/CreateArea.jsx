import React, { useState } from "react";

function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  function addTitle(event) {
    var t = event.target.value;
    setTitle(t);
  }

  function addNote(event) {
    var c = event.target.value;
    setNote(c);
  }
  return (
    <div>
      <form>
        <input
          onChange={addTitle}
          name="title"
          placeholder="Title"
          value={title}
        />
        <textarea
          onChange={addNote}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note}
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            props.adding(title, note);
            setTitle("");
            setNote("");
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
