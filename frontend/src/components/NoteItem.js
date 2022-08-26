import React, { useContext } from 'react'
import noteContext from "../context/notes/noteContext";

function NoteItem(props) {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    return (
        <div className='col-md-3 my-3'>
            <div className="card">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h4 className="card-title">{note.title}</h4>
                        <i className="far fa-trash-alt mx-2" onClick={() => {
                            deleteNote(note._id);
                            props.showAlert("Deleted Successfully", "success")
                        }}></i>
                        <i className="far fa-edit mx-2" onClick={() => {
                            updateNote(note);
                        }}></i>
                    </div>
                    <div className="d-flex align-items-end flex-column mb-3">
                        <i className='mx-4'>{note.tag}</i>
                    </div>

                    <p className="card-text">{note.description}</p>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
