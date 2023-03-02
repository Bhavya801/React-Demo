import React from 'react'

export default function Reactdltrow(props) {
  return (
    <>

    <div>
      <table id = "table-wrapper">
        <thead>
            <tr>
                <th>ID</th>
                <th>TASK</th>
                <th>USER ID</th>
            </tr>
        </thead>
        <tbody>
      {
        props.todos.todos && props.todos.todos.map(item => <ReactDeleteRow key ={item.id} data = {items} deleteElement= {<i>Delete</i>} iconClassName='text-danger' onDelete={ item => { return window.confirm(`Are you sure you want to delete`) }}><td>{item.id}</td><td>{item.todo}</td><td>{item.userId}</td></ReactDeleteRow>)
      }
    </tbody>
      </table>
</div>
</>
  )
}

