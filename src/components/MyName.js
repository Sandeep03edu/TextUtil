import React from "react";
import PropTypes from "prop-types";

export default function MyName(props) {

  const removeAllClasses = ()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
  }

  const setStyle = ()=>{
    removeAllClasses();
    if(props.cls===null){
      if (props.mode === "dark") {     
        document.body.style.background = "#042743";
        document.body.style.color ="white"
      } else {
        document.body.style.background = "white";
        document.body.style.color ="black"
     }
    }
    else{
      document.body.classList.add('bg-' + props.cls)
    }
  }

  return (
    <div>
      <h1
        style={setStyle()}
      >
        Hello {props.myName}
      </h1>
    </div>
  );
}

// Prop type checking, it will give error when we will have diff type
// With "isRequired" we are adding compulsory mark to prop for that variable
MyName.propTypes = {
  myName: PropTypes.string.isRequired,
};

MyName.defaultProps = {
  myName: "Text",
};
