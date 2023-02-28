import React, { PureComponent } from 'react'
import ReactDeleteRow from 'react-delete-row';


export default class TodoApi extends PureComponent {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    // del = id => {
    //     const newData = this.state.items && this.state.items.filter(item => item.id !== id);
    //     console.log("@@22",newData)
    //     this.setState({ items: newData });
    // }
    
  render() {
    // const items = this.props.todos.todos;
    // console.log(items);
   
    return (<div><table id = "table-wrapper">
        <thead>
            <tr>
                <th  onClick = {()=> this.props.sortBy('id')} >ID</th>
                <th  onClick = {()=> this.props.sortBy('todo')} >TASK</th>
                <th  onClick = {()=> this.props.sortBy('userId')} >USER ID</th>
            </tr>
        </thead>
        <tbody>
      {
            this.props.todos && this.props.todos.map(item =><tr><td>{item.id}</td><td>{item.todo}</td><td>{item.userId}</td><button onClick={()=>this.props.dlt(item.id)}>Delete</button></tr>)

            // items && items.map(item => <ReactDeleteRow key ={item.id} data = {items} deleteElement= {<i>Delete</i>} iconClassName='text-danger' onDelete={ item => { return window.confirm(`Are you sure you want to delete`) }}><td>{item.id}</td><td>{item.todo}</td><td>{item.userId}</td></ReactDeleteRow>)
        }
    </tbody></table>
    </div>)
   
    
    
  }
}
