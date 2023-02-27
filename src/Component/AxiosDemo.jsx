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
      items:[],
    }
  }
  

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
  }


  render() {
    return (

      <div>
    
      <button onClick={()=> this.setState({renderType:"comments"})}>COMMENTS</button>
      <button onClick={()=> this.setState({renderType:"posts"})}>POSTS</button>
      <button onClick={()=> this.setState({renderType:"todos"})}>TODO</button>
      {this.state.renderType==="posts" && <PostsApi posts = {this.state.items} />} 
      {this.state.renderType==="comments" && <CommentsApi comments = {this.state.items} />} 
      {this.state.renderType==="todos" && <TodoApi todos = {this.state.items} />} 

      </div>


    )
  }
}