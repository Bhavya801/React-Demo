import React, { PureComponent } from 'react'
import ReactDeleteRow from 'react-delete-row';

export default class CommentsApi extends PureComponent {

    constructor(props){
        super(props)
        this.state = {
            items:this.props.comments.comments
        }
    }
    del = id => {
        const newData = this.state.items.filter(item => item.id !== id);
        console.log("@@22",newData)
        this.setState({ items: newData });
    }
    
    // del=(id)=>{
    //     console.log(id);
    //     const items = this.props.comments.comments;
    //     console.log("**11",items)
    //     const newitems=items.filter(li=>li.id!==id)
    //     console.log("**22",newitems)
    //     this.setState({items:newitems})
    //     }

        

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
        this.state.items && this.state.items.map(item =><tr><td>{item.id}</td><td>{item.body}</td><td>{item.postId}</td><td>{item.user.username}</td><td><button onClick={()=>this.del(item.id)}>Delete</button></td></tr>)
        }

    </tbody></table>
    </div>)

    
    
  }
}