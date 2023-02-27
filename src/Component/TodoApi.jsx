import React, { PureComponent } from 'react'

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
        items && items.map(item => <tr><td>{item.id}</td><td>{item.todo}</td><td>{item.userId}</td></tr>) 
        }
    </tbody></table>
    </div>)
   
    
    
  }
}
