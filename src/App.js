import "./App.css"
import React, { useEffect, useState } from "react"
import QuoteCard from "./components/QuoteCard"
import axios from "axios"

function App() {
    const [quote, setQuote] = useState({
        quote:
            "Why are you pleople avoiding me? Does my withered face remind you of the grim specter of death?",
        character: "Abe Simpson",
        image:
            "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FAbrahamSimpson.png?1497567511593",
        characterDirection: "Right",
    })

    const handleClick = () => {
        axios
            .get("https://simpsons-quotes-api.herokuapp.com/quotes")
            .then((response) => response.data)
            .then((data) => {
                setQuote(data[0])
            })
    }

    return (
        <div className="App">
            <QuoteCard key={quote._id} {...quote} />
            <button type="button" onClick={handleClick}>
                Get a new quote !
            </button>
        </div>
    )
}

export default App
