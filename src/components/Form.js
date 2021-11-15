import React, { useState } from "react";
export default function Form(props) {
	const [name, setName] = useState('');
	function handlesubmit(e){
		if(name==='')
			alert('empty task');
		else{
			e.preventDefault();
			props.addTask(name);
			setName('');
		}
	}
	function handlechange(e){
		setName(e.target.value);
	}
  return (<form onSubmit={handlesubmit}>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>{/* this is the label for the text box used to add tasks*/}
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value={name}
          onChange={handlechange}
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
  	
  	);
}