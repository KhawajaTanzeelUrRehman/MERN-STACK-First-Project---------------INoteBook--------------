import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const host = "http://localhost:5000";
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial);

    // Get all Notes
    const getNotes = async () => {
        //API CALL
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMwNGMyMGE5N2E5NWJhN2VhODliNzEwIn0sImlhdCI6MTY2MTI1NjU2MH0.CVZM79imrxDHZgazkz4Y-aY_ufnMRS3KapNuS4AMM0A',
            }
        });
        const json = await response.json()
        console.log(json)
        setNotes(json)

    }



    // Add a Note
    const addNote = async (title, description, tag) => {
        //API CALL
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMwNGMyMGE5N2E5NWJhN2VhODliNzEwIn0sImlhdCI6MTY2MTI1NjU2MH0.CVZM79imrxDHZgazkz4Y-aY_ufnMRS3KapNuS4AMM0A',
            },
            body: JSON.stringify({ title, description, tag })
        });






        console.log("Adding a new note")
        const note = {
            "_id": "6304d5f0b209fd2ee46b3d6c",
            "user": "6304c20a97a95ba7ea89b710",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2022-08-23T13:28:16.390Z",
            "__v": 0
        };
        setNotes(notes.concat(note));

    }

    // Delete a Note
    const deleteNote = async (id) => {
        // API CALL
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMwNGMyMGE5N2E5NWJhN2VhODliNzEwIn0sImlhdCI6MTY2MTI1NjU2MH0.CVZM79imrxDHZgazkz4Y-aY_ufnMRS3KapNuS4AMM0A',
            }
        });
        const json = response.json();
        console.log(json)


        console.log("Deleting the note with note ID: " + id);
        const newNotes = notes.filter((note) => { return note._id !== id });
        setNotes(newNotes);

    }

    // Edit a Note
    const editNote = async (id, title, description, tag) => {
        // API Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMwNGMyMGE5N2E5NWJhN2VhODliNzEwIn0sImlhdCI6MTY2MTI1NjU2MH0.CVZM79imrxDHZgazkz4Y-aY_ufnMRS3KapNuS4AMM0A',
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = response.json();


        //Logic to edit in front end
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.tag = tag;
                element.description = description;
            }
        }
    }

    return (
        <noteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </noteContext.Provider>)
}
export default NoteState;