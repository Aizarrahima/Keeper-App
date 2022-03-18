import React from "react";
import Header from "./Header";
import Note from "./Note";
import notes from "../Notes";
import Footer from "./Footer";

function App() {
    return (
        <div>
            <Header />
            {notes.map(item => (
                <Note
                    key={item.key}
                    title={item.title}
                    content={item.content}
                />
            ))}
            <Footer />
        </div>
    );
}

export default App;

// item = forEach