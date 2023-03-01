import React, { PureComponent } from 'react'
import ReactDeleteRow from 'react-delete-row';

export default class CommentsApi extends PureComponent {

    constructor(props){
        super(props)
        this.state = {
        }
    }
    render() {

    return (<div><table className='styled-table'>
        <thead>
            <tr>
                <th onClick = {()=> this.props.sortBy('id')} >ID </th>
                <th onClick = {()=> this.props.sortBy('body')}>COMMENT</th>
                <th onClick = {()=> this.props.sortBy('postId')}>POSTID</th>
                <th>USER</th>
            </tr>
        </thead>
        <tbody>
        {
        this.props.comments && this.props.comments.map(item =><tr><td>{item.id}</td><td>{item.body}</td><td>{item.postId}</td><td>{item.user.username}</td><td><button className='btn' onClick={()=>this.props.dlt(item.id)}>Delete<i class="bi bi-trash"></i></button></td></tr>)
        }

    </tbody></table>
    </div>
    )
    }
}