import React, { useState } from "react";
// import AddCircleIcon from "@material-ui/icons/AddCircle";
// import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
// import AddBoxIcon from '@material-ui/icons/AddBox';
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";


function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  // Conditional Rendering
  const [isExpanded, setExpanded] = useState(false);
  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {/* // Add conditional rendering in form */}
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Write an idea..."
          rows={isExpanded ? "3" : "1"}
        />
        {/* Conditional Rendering on is expanded */}
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>

      </form>
    </div>
  );
}

export default CreateArea;
