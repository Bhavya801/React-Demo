import React, { PureComponent } from 'react'
import ReactDeleteRow from 'react-delete-row';


export default class PostsApi extends PureComponent {
    
  render() {
    const items = this.props.posts.posts;
    console.log(items);
   
    return (<div><table  id = "table-wrapper">
        <thead>
            <tr>
              <th>ID</th>
              <th>TITLE</th>
              <th>BODY</th>
              <th>TAGS</th>

            </tr>

        </thead>
        <tbody>
      {
          items && items.map(item => <ReactDeleteRow key ={item.id} data = {items} deleteElement= {<i>Delete</i>} iconClassName='text-danger' onDelete={ item => { return window.confirm(`Are you sure you want to delete`) }}><td>{item.id}</td><td>{item.title}</td><td>{item.body}</td><td>{item.tags}</td></ReactDeleteRow>)

        }
    </tbody></table>
    </div>)
   
    
    
  }
}
