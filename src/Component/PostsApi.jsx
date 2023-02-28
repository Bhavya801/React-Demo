import React, { PureComponent } from 'react'
import ReactDeleteRow from 'react-delete-row';


export default class PostsApi extends PureComponent {
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
    // const items = this.props.posts.posts;
    // console.log("postapi",items);
   
    return (<div><table  id = "table-wrapper">
        <thead>
            <tr>
              <th  onClick = {()=> this.props.sortBy('id')} >ID</th>
              <th  onClick = {()=> this.props.sortBy('title')} >TITLE</th>
              <th  onClick = {()=> this.props.sortBy('body')} >BODY</th>
              <th  onClick = {()=> this.props.sortBy('tags')} >TAGS</th>

            </tr>

        </thead>
        <tbody>
        {
        this.props.posts && this.props.posts.map(item =><tr><td>{item.id}</td><td>{item.title}</td><td>{item.body}</td><td>{item.tags}</td><button onClick={()=>this.props.dlt(item.id)}>Delete</button></tr>)
        }

      {/* {
          items && items.map(item => <ReactDeleteRow key ={item.id} data = {items} deleteElement= {<i>Delete</i>} iconClassName='text-danger' onDelete={ item => { return window.confirm(`Are you sure you want to delete`) }}><td>{item.id}</td><td>{item.title}</td><td>{item.body}</td><td>{item.tags}</td></ReactDeleteRow>)

        } */}
    </tbody></table>
    </div>)
   
    
    
  }
}
