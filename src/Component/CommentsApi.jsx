import React, { PureComponent } from 'react'
import ReactDeleteRow from 'react-delete-row';

export default class CommentsApi extends PureComponent {

    constructor(props){
        super(props)
        this.state = {
        }
    }
    // componentDidMount(){
    //     this.setState({items:this.props.comments && this.props.comments.comments})
    // }
  
    
    // del=(id)=>{
    //     console.log(id);
    //     const items = this.props.comments.comments;
    //     console.log("**11",items)
    //     const newitems=items.filter(li=>li.id!==id)
    //     console.log("**22",newitems)
    //     this.setState({items:newitems})
    //     }

      
//     compareBy = (key) => {
//     console.log("222")
//     return function(a, b) {
//     if (a[key] < b[key]) return -1;
//     if (a[key] > b[key]) return 1;
//     return 0;
//     };
//   }
   
//     sortBy = (key) => {
//     console.log("1111",key)
//     let arrayCopy = [...this.state.items];
//     console.log("**2",arrayCopy)
//     arrayCopy.sort(this.compareBy(key));
//     this.setState({items: arrayCopy});
//     }

        

   render() {
    // const items = this.props.comments.comments;
    // console.log("***",this.props.comments);
    // console.log(items);

    return (<div><table>
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
        this.props.comments && this.props.comments.map(item =><tr><td>{item.id}</td><td>{item.body}</td><td>{item.postId}</td><td>{item.user.username}</td><td><button onClick={()=>this.props.dlt(item.id)}>Delete</button></td></tr>)
        // this.props.comments && this.props.comments.comments && this.props.comments.comments.map(item => console.log("********items",item))
        }

    </tbody></table>
    </div>)

    
    
  }
}