import React, { useState, useRef } from "react";
import './style.css'


export function TodoItem({todo}) {

  const state = useRef()
  const todoidRef = useRef()
  const todoTaskRef = useRef()
  const { id, task } = todo;




  const eliminarPosit = () => {
    eliminarPosit(id);

    
  }

  return (
    <li className="mx-4">
      <a href="#">
        <div className="botonX" >
          <button onClick={eliminarPosit} className="botonX">X</button>
        </div>
        <h2>{id}</h2>
        <p>{task}</p>
      </a>
    </li>

  );
}