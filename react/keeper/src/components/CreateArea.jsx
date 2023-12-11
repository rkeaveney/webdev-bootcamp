import React from "react";

function CreateArea(props) {
  const [newNote, setNewNote] = React.useState({
    id: null,
    title: "",
    content: "",
  });

  function updateNewNote(event) {
    const { name, value } = event.target;

    setNewNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <form
        onSubmit={(event) => {
          props.addNote(newNote);
		  setNewNote({
				id: null,
				title: "",
				content: "",
			});
          event.preventDefault();
        }}
      >
        <input
          onChange={updateNewNote}
          name="title"
          placeholder="Title"
          value={newNote.title}
        />
        <textarea
          onChange={updateNewNote}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={newNote.content}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
