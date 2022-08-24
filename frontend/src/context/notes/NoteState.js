import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const s1 = {
        "name": "Tanzeel",
        "class": "5b"
    }
    const [state, setstate] = useState(s1);
    const update = () => {
        setTimeout(() => {
            setstate({
                "name": "Sharjeel",
                "class": "Mbbs"
            })
        }, 1000);
    }
    return (
        <noteContext.Provider value={{ state, update }}>
            {props.children}
        </noteContext.Provider>)
}
export default NoteState;