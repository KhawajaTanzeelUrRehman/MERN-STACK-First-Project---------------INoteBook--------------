import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "6304d5f0b209fd2ee46b3d6c",
            "user": "6304c20a97a95ba7ea89b710",
            "title": "New Note Updated23",
            "description": "------------------------------------------",
            "tag": "Public",
            "date": "2022-08-23T13:28:16.390Z",
            "__v": 0
        },
        {
            "_id": "6305dde6c06eb3699a22c10d",
            "user": "6304c20a97a95ba7ea89b710",
            "title": "New Note",
            "description": "This is the New Note description",
            "tag": "Public",
            "date": "2022-08-24T08:14:30.945Z",
            "__v": 0
        },
        {
            "_id": "6305dde9c06eb3699a22c10f",
            "user": "6304c20a97a95ba7ea89b710",
            "title": "New Note",
            "description": "This is the New Note description",
            "tag": "Public",
            "date": "2022-08-24T08:14:33.627Z",
            "__v": 0
        },
        {
            "_id": "6305dde9c06eb3699a22c111",
            "user": "6304c20a97a95ba7ea89b710",
            "title": "New Note",
            "description": "This is the New Note description",
            "tag": "Public",
            "date": "2022-08-24T08:14:33.840Z",
            "__v": 0
        },
        {
            "_id": "6305ddeac06eb3699a22c113",
            "user": "6304c20a97a95ba7ea89b710",
            "title": "New Note",
            "description": "This is the New Note description",
            "tag": "Public",
            "date": "2022-08-24T08:14:34.077Z",
            "__v": 0
        },
        {
            "_id": "6305ddeac06eb3699a22c115",
            "user": "6304c20a97a95ba7ea89b710",
            "title": "New Note",
            "description": "This is the New Note description",
            "tag": "Public",
            "date": "2022-08-24T08:14:34.313Z",
            "__v": 0
        },
        {
            "_id": "6305ddeac06eb3699a22c117",
            "user": "6304c20a97a95ba7ea89b710",
            "title": "New Note",
            "description": "This is the New Note description",
            "tag": "Public",
            "date": "2022-08-24T08:14:34.701Z",
            "__v": 0
        },
        {
            "_id": "6305ddeac06eb3699a22c119",
            "user": "6304c20a97a95ba7ea89b710",
            "title": "New Note",
            "description": "This is the New Note description",
            "tag": "Public",
            "date": "2022-08-24T08:14:34.965Z",
            "__v": 0
        },
        {
            "_id": "6305ddebc06eb3699a22c11b",
            "user": "6304c20a97a95ba7ea89b710",
            "title": "New Note",
            "description": "This is the New Note description",
            "tag": "Public",
            "date": "2022-08-24T08:14:35.287Z",
            "__v": 0
        },
        {
            "_id": "6305ddebc06eb3699a22c11d",
            "user": "6304c20a97a95ba7ea89b710",
            "title": "New Note",
            "description": "This is the New Note description",
            "tag": "Public",
            "date": "2022-08-24T08:14:35.564Z",
            "__v": 0
        },
        {
            "_id": "6305ddebc06eb3699a22c11f",
            "user": "6304c20a97a95ba7ea89b710",
            "title": "New Note",
            "description": "This is the New Note description",
            "tag": "Public",
            "date": "2022-08-24T08:14:35.768Z",
            "__v": 0
        },
        {
            "_id": "6305ddebc06eb3699a22c121",
            "user": "6304c20a97a95ba7ea89b710",
            "title": "New Note",
            "description": "This is the New Note description",
            "tag": "Public",
            "date": "2022-08-24T08:14:35.922Z",
            "__v": 0
        },
        {
            "_id": "6305ddecc06eb3699a22c123",
            "user": "6304c20a97a95ba7ea89b710",
            "title": "New Note",
            "description": "This is the New Note description",
            "tag": "Public",
            "date": "2022-08-24T08:14:36.097Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(notesInitial);

    // Add a Note
    const addNote = (title, description, tag) => {
        //API CALL
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
    const deleteNote = () => {

    }

    // Edit a Note
    const editNote = () => {

    }

    return (
        <noteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </noteContext.Provider>)
}
export default NoteState;