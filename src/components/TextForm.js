import React, { useState } from "react";
export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    if (text.length<1) {
      props.showAlert("Enter some text first", "warning");
    }
    else{
      props.showAlert("Text converted to Upper Case", "success");
    }
  };
  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    if (text.length<1) {
      props.showAlert("Enter some text first", "warning");
    }else{
    props.showAlert("Text converted to Lower Case", "success");
    }
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    if (text.length<1) {
      props.showAlert("Enter some text first", "warning");
    }else{props.showAlert("Text Cleared", "success");}
  };
  const handleProperClick = () => {
    let newText = text
      .split(". ")
      .map((e) => e.charAt(0).toUpperCase() + e.substring(1).toLowerCase())
      .join(". ");
    setText(newText);
    if (text.length<1) {
      props.showAlert("Enter some text first", "warning");
    }else{
    props.showAlert("Text converted to Proper Case", "success");
    }
  };
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    if (text.length<1) {
      props.showAlert("Enter some text first", "warning");
    }else{
    props.showAlert("Text copied", "success");
    }
  };
  const filterText = text.split(/[ ]+/).join(' ');
  const handleSpacesClick = () => {
    const filterText = text.split(/[ ]+/).join(' ');
    setText(filterText);
    if (filterText.length<1) {
      props.showAlert("Enter some text first", "warning");
    }else{
    props.showAlert("All extra spaces removed","success");
    }
  };
  let words = filterText.split(" ").length;
  let characters = filterText.length;
  // if (        ){}
  let sentences = filterText.split(". ").length;
  if (characters < 1) {
    words = words - 1;
    sentences = sentences - 1;
  }

  return (
    <>
      <div className="container">
        <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {props.heading}
        </h1>
        <div className="my-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            rows="8"
            placeholder="Enter text here:-"
            style={{
              backgroundColor: props.mode === "dark" ? "#e0e4e9" : "white",
              color: props.mode === "dark" ? "rgba(0,0,0,0.6)" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Upper Case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowerClick}>
          Convert to Lower Case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleProperClick}>
          Proper Case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleSpacesClick}>
          Remove extra spaces
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Cleear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summerey:-</h2>
        <p>
          {words} words and {characters} characters and {sentences} sentences.
        </p>
        <p>
          Time to read these words (average WPM):- {(0.008 * words).toFixed(2)}{" "}
          Minutes to read.
        </p>
        <h3>Preview:- </h3>
        <p style={{ fontSize: "20px" }}>
          {filterText.length > 0 ? filterText : "Enter something above to preview"}
        </p>
      </div>
    </>
  );
}
