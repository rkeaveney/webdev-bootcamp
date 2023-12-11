import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { v4 as uuid } from "uuid";

function App() {
  const [notes, setNotes] = React.useState([]);

  function displayNote(note) {
    return <Note key={note.id} id={note.id} title={note.title} content={note.content} onClickDelete={deleteNote}/>;
  }

  function addNote(note) {
    setNotes((prevNotes) => {
      return [
        ...prevNotes,
        {
          id: uuid(),
          title: note.title,
          content: note.content,
        },
      ];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => {
        return note.id !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((note) => displayNote(note))}
      <Footer />
    </div>
  );
}

export default App;
