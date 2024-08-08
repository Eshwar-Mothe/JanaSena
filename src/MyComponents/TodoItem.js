import React from 'react'
import Table from 'react-bootstrap/Table';

export const TodoItem = ({ todo, onDelete }) => {
    return (
        <>
            <div>
                <Table striped >
                    {/* <thead>
                        <tr>
                            <th>ID.no</th>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>Village</th>
                            <th>Constituency</th>
                            <th>District</th>
                            <th>Pin Code</th>
                        </tr>
                    </thead> */}
                    <tbody>
                        <tr style={{ textAlign: 'center' }}>
                            <td>{todo.sno}</td>
                            <td>{todo.fname}</td>
                            <td>{todo.mobile}</td>
                            <td>{todo.village}</td>
                            <td>{todo.constituency}</td>
                            <td>{todo.district}</td>
                            <td>{todo.pin}</td>
                            <td style={{ width: '10px' }}>{todo.email}</td>
                            {/* <AddTodo AddTodo={submit(e)} /> */}
                            <td><button className="btn btn-sm btn-danger" onClick={() => { onDelete(todo) }}>Delete</button></td>

                        </tr>
                    </tbody>

                </Table>
                {/* <h4>{todo.title}</h4>
                <p>{todo.desc}</p> */}
            </div>


            {/* <table>
                <thead>
                    <tr>
                        <th>ID.no</th>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Village</th>
                        <th>Constituency</th>
                        <th>District</th>
                        <th>Image Preview</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Sample data, replace with actual data -->
                    <tr>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>1234567890</td>
                        <td>johndoe@example.com</td>
                        <td>Village1</td>
                        <td>Constituency1</td>
                        <td>District1</td>
                        <td><img src="bg-removebg-preview.png" alt="Image Preview" class="image-preview" /></td>
                    </tr>
                </tbody>
            </table> */}
        </>
    )
}
