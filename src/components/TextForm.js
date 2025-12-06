import React, { useState } from 'react'

export default function TextForm({mode}) {

    const [toggle, settoggle] = useState("Enable dark mode")

    const [Text, setText] = useState("");
    const [style, setstyle] = useState({
        color:'black',
        backgroundColor:'white'
    })
    const change = ()=>{
        if (style.color==="black"){
            setstyle({color:'white',
            backgroundColor:'black'})
        settoggle("Enable Light Mode")
    }
        else{
            setstyle({color:'black',
            backgroundColor:'white'})
            settoggle("Enable Dark Mode ")
        }
    }
    const handleClick = () => {
        console.log("YOU CLICKED ")
        let newText = Text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        // console.log("yOU CLICKED ")
        let newText = Text.toLowerCase();
        setText(newText);
    }

    const handleChange = (event) => {
        console.log("" + Text)
        setText(event.target.value)
    }

    const handleClear = () => {
        setText("")
    }

    const handleCapsClick=() =>{
        let newText1=Text.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase()+word.slice(1)).join(" ");
        setText(newText1);
    }

    const handlereverseClick=() =>{
        let newText="";
        for (let char of Text){
            if (char ===char.toUpperCase()){
                newText+=char.toLowerCase();
            }
            else{
                newText+=char.toUpperCase();
            }
    }
    setText(newText);
}
    return (
        <>
            <div className="container my-3 border border-2 border-primary rounded" style={style}>
                <h1>Enter your Text</h1>
                <div>

                    <div className="mb-3 my-3">
                        <textarea className="form-control" style={style}id="myBox" rows="8" cols="8" placeholder='Enter your text to convert' value={Text} onChange={handleChange} ></textarea>
                    </div>
                    <button className="btn btn-primary mx-3 mt-2 mb-2 " onClick={handleClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary mx-3 mt-2 mb-2" onClick={handleLoClick}>Convert to Lowercase</button>
                    <button className="btn btn-primary mx-3 mt-2 mb-2" onClick={handleCapsClick}>Captalized Case</button>
                    <button className="btn btn-primary mx-3 mt-2 mb-2" onClick={handlereverseClick}>Toggle Case</button>
                    <button className="btn btn-success mx-3 mt-2 mb-2" onClick={handleClear}>Clear</button>
                    <button className='btn btn-primary mt-2 mb-2'onClick={change}>{toggle}</button>
                </div>
            </div>
            <div className={`container my-3 bg-${style} text-${mode === "light" ? "dark" : "light"}`}>

                <h1>Your text Summary</h1>
                <p>{Text.split(" ").length} words and {Text.length} characters</p>
                <p>{0.008 * Text.split(" ").length}Minutes read</p>
                <h2>Preview</h2>
                <p>{Text}</p>
            </div>

        </>
    )
}
