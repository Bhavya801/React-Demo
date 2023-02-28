import React from 'react';
import axios from 'axios';
import TodoApi from './TodoApi';
import PostsApi from './PostsApi';
import CommentsApi from './CommentsApi';

export default class AxiosDemo extends React.Component {
  constructor(){
    super()
    this.state={
      renderType: "",
      items:[],
    }
  }
  

  // componentDidMount(){
  //   // const api = "comments"
  //   axios.get(`https://dummyjson.com/${this.state.renderType}`)
  //   .then(res => {
  //     this.setState({items:res.data})
  //     console.log("axios11",this.state.items)

  //   })
  // }



  // componentDidUpdate(prevProp,prevState){
  //   if(prevState.renderType!=this.state.renderType){
  //   axios.get(`https://dummyjson.com/${this.state.renderType}`)
  //   .then(res => {
  //     this.setState({items:res.data})
  //     console.log("axios12",this.state.items)

  //   })
  //   }
  // }

   onApply(api) {
    axios.get(`https://dummyjson.com/${api}`)
    .then(res => {
      const items = res.data
      // console.log(items);
      console.log("axios12",items)
      this.setState({items:res.data,renderType:api})
    });
  }

  render() {
    console.log("axios13",this.state.items)
    return (

      <div>
    
      <button onClick={()=> this.onApply('comments')}>COMMENTS</button>
      <button onClick={()=> this.onApply('posts')}>POSTS </button>
      <button onClick={()=> this.onApply('todos')}>TODO</button>
      {this.state.renderType==="posts" && <PostsApi posts = {this.state.items}/>} 
      {this.state.renderType==="comments" && <CommentsApi comments = {this.state.items}/>} 
      {this.state.renderType==="todos" && <TodoApi todos = {this.state.items} />} 

      </div>


    )
  }
}