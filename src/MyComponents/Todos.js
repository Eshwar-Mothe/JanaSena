import React from 'react'
import { TodoItem } from "./TodoItem";
import Table from 'react-bootstrap/Table';


export const Todos = (props) => {
    let myStyle = {
        minHeight: "90vh",
        margin: "40px auto"

    }
    let headStyle = {
        width: "100%",
        background: "#a84343",
        color: "#fff",
        textAlign: "center",
        padding: "10px",
    }
    return (
        <>
            <header>
                <h1 style={headStyle}>Members List</h1>
            </header>

            <Table striped  >
                <thead>
                    <tr style={{ textAlign: 'center' }}>
                        <th>ID.no</th>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Village</th>
                        <th>Constituency</th>
                        <th>District</th>
                        <th>Pin Code</th>
                        <th style={{ width: '10px' }}>Email</th>
                    </tr>
                </thead>

            </Table>

            <div style={myStyle}>
                {props.todos.length === 0 ? "No Members to display" :
                    props.todos.map((todo) => {
                        console.log(todo.sno);
                        return (
                            <>


                                <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                            </>)
                    })
                }
            </div>
        </>
    )
}
