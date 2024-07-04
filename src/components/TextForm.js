import { getElementError } from "@testing-library/react";
import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = " ";
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("On-change");
    setText(event.target.value);
  };

  const handleCopy = () => {
    console.log("copy the text");
    var textArea= document.getElementById("floatingTextarea");
    textArea.select();
    navigator.clipboard.writeText(textArea.value);
  }


  const [text, setText] = useState("");

  return (
    < div className="container" style={{ color:props.mode==='dark'?'white':'black' }}>
      <form>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            style={{ backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black' }}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            style={{ backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black' }}
          />
        </div>
        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            value={text}
            onChange={handleOnChange}
            rows="15" // Increase the number of rows
            style={{ height: "300px", backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black' }}
            
            id="floatingTextarea"
            
          ></textarea>
          <label htmlFor="floatingTextarea">Write text here</label>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Convert it
          </label>
        </div>
        <button
          type="button"
          className="btn btn-primary mx-3 my-1"
          onClick={handleUpClick}
        >
          Uppercase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-3 my-1"
          onClick={handleLoClick}
        >
          Lowercase
        </button>

        <button
          type="button"
          className="btn btn-primary mx-3 my-1"
          onClick={handleClearClick}
        >
          Clear ALL
        </button>

        <button
          type="button"
          className="btn btn-primary mx-3 my-1"
          onClick={handleCopy}
        >
          Copy All
        </button>

        <div className="container my-3">
          <h1> The summary of the text</h1>
          <p>There are {text.length} characters and {text.split(" ").filter((element)=>{return element.length!== 0}).length} words present in the written text</p>
          <p>Time to read the complete para is {0.008 * text.split(" ").length}</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Please write in the text area for preview of your content"}</p>
        </div>
      </form>
    </div>
  );
}
