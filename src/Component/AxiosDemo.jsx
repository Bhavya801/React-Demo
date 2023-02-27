import React from 'react';
import axios from 'axios';
import TodoApi from './TodoApi';
import PostsApi from './PostsApi';
import CommentsApi from './CommentsApi';

export default class AxiosDemo extends React.Component {
  constructor(){
    super()
    this.state={
      renderType: "posts",
      items:[]
    }
  }
  // state = {
  //   // carts:[],
  //   comments:[]
  
  // }
  componentDidMount(){
    axios.get(`https://dummyjson.com/${this.state.renderType}`)
    .then(res => {
      this.setState({items:res.data})

    })
  }
  componentDidUpdate(prevProp,prevState){
    if(prevState.renderType!=this.state.renderType){
    axios.get(`https://dummyjson.com/${this.state.renderType}`)
    .then(res => {
     
     
      this.setState({items:res.data})
    })
  }
  // if(this.state.renderType=="todo"){
  //   comment.body=item.todo
  // }

  }


  // fetchdata() {
  //   axios.get(`https://dummyjson.com/carts`)
  //   .then(res => {
  //     const carts = res.data
  //     console.log(carts);
  //   })


  // }

  render() {
    return (
     
      // <div>
      //   <h1>{data}</h1>
      // </div>
      <div>
       
      <button onClick={()=> this.setState({renderType:"comments"})}>COMMENTS</button>
      <button onClick={()=> this.setState({renderType:"posts"})}>POSTS</button>
      <button onClick={()=> this.setState({renderType:"todos"})}>TODO</button>
      {this.state.renderType==="posts" && <PostsApi posts = {this.state.items}/>} 
      {this.state.renderType==="comments" && <CommentsApi comments = {this.state.items}/>} 
      {this.state.renderType==="todos" && <TodoApi todos = {this.state.items}/>} 
     

     
      </div>

      // <button onClick={this.fetchdata}>Fetch Data</button>

    )
  }
}

// export default class AxiosDemo extends React.Component {
//   state = {
//     users:[]
  
//   }

//  componentDidMount() {
//     // axios.get(`https://dummyjson.com/comments`)
//     //   .then(res => {
//     //     const data = res.data;
//     //     console.log(data)
//     //   })
//     axios.get(`https://dummyjson.com/users`)
//     .then(res => {
//       const users = res.data
//       console.log(users);
//     })

//   }

//   render() {
//     return (
    
      // <ul>
      //   {
      //     this.state.users
      //     .map(users => <li key = {users.id}>{users.firstName}</li>
      //     )
      //   }
      // </ul>
//       <button onClick={this.fetchdata}>Fetch Data</button>
//     )
//   }
// }