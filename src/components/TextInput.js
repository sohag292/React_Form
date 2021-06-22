import React from 'react'
import PropTypes from "prop-types";
const TextInput= props=>(
    <div className="my-3">
        <label htmlFor={props.name}>{props.label}</label>
        <input  
        className={props.error ?'form-control is-invalid' : 'form-control'}
        onChange={props.onChange} 
        value={props.value} 
        id={props.name}
        type={props.type} 
        name={props.name}
        placeholder={props.placeholder}/>
        {props.error && <div className="invalid-feedback">{props.error}</div>}
    </div>

);
TextInput.propTypes={
    name:PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    errors:PropTypes.string,
    onChange:PropTypes.func.isRequired

}
TextInput.defaultProps = {
    type:"text",
    label:" ",
    palceholder:''
};

export default TextInput;