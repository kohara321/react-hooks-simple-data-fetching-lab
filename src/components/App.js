import React from "react";
import { useEffect, useState } from "react";

function App() {
const[images, setImages] = useState([])
const[loaded, setLoaded] = useState(false)

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(resp => resp.json())
        .then(data => {
            setImages(data.message)
            setLoaded(true)
        })
    },[])


    console.log(images)

    if(!loaded) return <p>Loading...</p>
    return (
        <img src={images} alt="A Random Dog"/>
    )
}

export default App;