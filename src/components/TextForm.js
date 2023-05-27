import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [words, setWords] = useState(0);

  const removeAllClasses = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-danger");
  };

  const setStyle = () => {
    removeAllClasses();
    if (props.cls === null) {
      if (props.mode === "dark") {
        document.body.style.background = "#042743";
        document.body.style.color = "white";
      } else {
        document.body.style.background = "white";
        document.body.style.color = "black";
      }
    } else {
      document.body.classList.add("bg-" + props.cls);
    }
  };

  const handleUpClick = () => {
    console.log("Upper clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Uppercase done!!", "success");
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied!!", "success");
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);

    let input = event.target.value.trim();

    setWords(
      // Regex express to find all spaces including "\n"
      input.split(/\s+/).filter((elem) => {
        return elem.length !== 0;
      }).length
    );
  };

  return (
    <>
      <div
        // style={{
        //   color: props.mode === "light" ? "black" : "white",
        //   backgroundColor: props.mode === "light" ? "white" : "#042743",
        // }}
        style={setStyle()}
      >
        <div className="container my-3">
          <div className="mb-3">
            <label htmlFor="inputBox" className="form-label">
              Enter your text here
            </label>
            <textarea
              style={setStyle()}
              className="form-control"
              value={text}
              id="inputBox"
              onChange={handleOnChange}
              rows="6"
            ></textarea>
          </div>

          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1"
            onClick={handleUpClick}
          >
            Convert to uppercase
          </button>

          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1"
            onClick={handleCopyText}
          >
            Copy Text
          </button>
        </div>

        <div className="container my-3">
          <h2>Your Text Summary</h2>
          <p>
            {words} words and {text.length} characters
          </p>
        </div>
      </div>
    </>
  );
}
