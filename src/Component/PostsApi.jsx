import React, { PureComponent } from 'react'

export default class PostsApi extends PureComponent {
    
  render() {
    const items = this.props.posts.posts;
    console.log(items);
   
    return (<div><table>
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
        items && items.map(item => <tr><td>{item.id}</td><td>{item.title}</td><td>{item.body}</td><td>{item.tags}</td></tr>) 
        }
    </tbody></table>
    </div>)
   
    
    
  }
}
