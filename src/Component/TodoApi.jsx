import React, { PureComponent } from 'react'
import ReactDeleteRow from 'react-delete-row';


export default class TodoApi extends PureComponent {
    
  render() {
    const items = this.props.todos.todos;
    console.log(items);
   
    return (<div><table id = "table-wrapper">
        <thead>
            <tr>
                <th>ID</th>
                <th>TASK</th>
                <th>USER ID</th>
            </tr>
        </thead>
        <tbody>
      {
            items && items.map(item => <ReactDeleteRow key ={item.id} data = {items} deleteElement= {<i>Delete</i>} iconClassName='text-danger' onDelete={ item => { return window.confirm(`Are you sure you want to delete`) }}><td>{item.id}</td><td>{item.todo}</td><td>{item.userId}</td></ReactDeleteRow>)
        }
    </tbody></table>
    </div>)
   
    
    
  }
}
