import React from "react";
import Header from "./Header";
import Note from "./Note";
// import notes from "../Notes";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import { useState } from "react";

function App() {
    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }

    return (
        // <div>
        //     <Header />
        //     {notes.map(item => (
        //         <Note
        //             key={item.key}
        //             title={item.title}
        //             content={item.content}
        //         />
        //     ))}
        //     <Footer />
        // </div>
        <div>
            <Header />
            <CreateArea onAdd={addNote} />
            {notes.map((noteItem, index) => {
                return (
                    <Note
                        key={index}
                        id={index}
                        title={noteItem.title}
                        content={noteItem.content}
                        onDelete={deleteNote}
                    />
                )
            })}
            <Footer />
        </div>
    );
}

export default App;

// item = forEach