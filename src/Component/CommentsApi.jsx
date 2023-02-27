import React, { PureComponent } from 'react'

export default class CommentsApi extends PureComponent {
    
  render() {
    const items = this.props.comments.comments;
    console.log(items);

    return (<div><table>
        <thead>
            <tr>
                <th>ID</th>
                <th>COMMENT</th>
                <th>POSTID</th>
                <th>USER</th>
            </tr>
        </thead>
        <tbody>
    {
        items && items.map(item => <tr><td>{item.id}</td><td>{item.body}</td><td>{item.postId}</td><td>{item.user.username}</td></tr>) 
        }
    </tbody></table>
    </div>)

    
    
  }
}
