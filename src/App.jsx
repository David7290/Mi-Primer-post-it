
import React, { Fragment, useState, useRef } from "react";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";


export function App() {
    const [todos, setTodos] = useState([
        { id: "", task: "", completed: false }
    ])



    const todoidRef = useRef()
    const todoTaskRef = useRef()
    const importantRef = useRef();


    const Agregar = () => {
        const id = todoidRef.current.value
        const task = todoTaskRef.current.value

        if (id === '') return
        setTodos((prevTodos) => {
            return [...prevTodos, { id, task, completed: false }]
        })
    }

    return (
        <Fragment>

            <div className="container mt-4">
                <h1>Mi simulador de post it!!!!</h1>
                <div className="row m-4">

                    <div className="col-4">
                        <input ref={todoidRef} type="text" className="form-control" placeholder="Titulo" />
                    </div>

                    <div className="col-4">
                        <input ref={todoTaskRef} type="text" className="form-control" placeholder="Descripcion" />

                    </div>

                    <div className="col-4">
                        <div className="col-2">
                            <div className="form-check">
                                <input ref={importantRef} className="form-check-input" type="checkbox" />
                                <label className="form-check-label text-light">
                                    ¡Importante!
                                </label>
                                <div className="col-2">
                                    <button onClick={Agregar} className="btn btn-dark">Agregar</button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                



                <TodoList todos={todos} />
            </div>


        </Fragment>
    )
}
