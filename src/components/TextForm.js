import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{ // arrow function
      // console.log("uppercase was clicked" + text);
      let newText = text.toUpperCase();
      setText(newText);
    }

    const handleLoClick = ()=>{
      let newText = text.toLowerCase();
      setText(newText);
    }

    const handleClearClick = ()=>{
      let newText = "";
      setText(newText);
    }

    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
    }

    const handleConvertClick = ()=>{
      // let newText = text.reverseString();
      // setText(newText);

      let newText = text.trim();
      setText(newText);
    }

    const handleOnChange = (event)=>{
      setText(event.target.value);
    }

    const [text, setText] = useState(''); // array destructuring
    // // text = "new text"; // wrong way to change the state
    // setText("new text"); // correct way to change the state
    // console.log(useState('Enter text here2'));

  return (
    <>
      <div className="container mt-5">
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder='Enter Text Here'></textarea>
        </div>

        <button className="btn btn-primary me-3" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-secondary me-3" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary me-3" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary me-3" onClick={handleConvertClick}>Test</button>
        <button className="btn btn-primary" onClick={speak}>Speak</button>
      </div>

      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <p>{text.split("\n").length} Line Count</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  )
}

