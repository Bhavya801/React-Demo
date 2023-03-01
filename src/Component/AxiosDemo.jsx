import React from 'react';
import axios from 'axios';
import TodoApi from './TodoApi';
import PostsApi from './PostsApi';
import CommentsApi from './CommentsApi';
import {Route,Routes} from 'react-router-dom';


export default class AxiosDemo extends React.Component {
  constructor(){
    super()
    this.state={
      renderType: "",
      items:[],
    }
  }

   onApply = (api)=> {
    axios.get(`https://dummyjson.com/${api}`)
    .then(res => {

      this.setState({items:res.data[`${api}`],renderType:api})
    });
  }

  compareBy = (key) => {
    
    return function(a, b) {
    if (a[`${key}`] < b[`${key}`]) return -1;
    if (a[`${key}`] > b[`${key}`]) return 1;
    return 0;
    };
  }

   
    sortBy = (key) => {
    let tmp = [...this.state.items];
    tmp.sort(this.compareBy(key))
    this.setState({
      items: tmp
    })
    
    }
    del = id => {
      const newData = this.state.items && this.state.items.filter(item => item.id !== id);
      this.setState({ items: newData });
  }


  render() {
    return (

      <div>
    
      <button onClick={()=> this.onApply('comments')}>COMMENTS</button>
      <button onClick={()=> this.onApply('posts')}>POSTS </button>
      <button onClick={()=> this.onApply('todos')}>TODO</button>
      
      {this.state.renderType==="posts" && <PostsApi posts = {this.state.items} sortBy = {this.sortBy} dlt = {this.del}/>}
      {this.state.renderType==="comments" && <CommentsApi comments = {this.state.items} sortBy = {this.sortBy} dlt = {this.del}/>}
      {this.state.renderType==="todos" && <TodoApi todos = {this.state.items} sortBy = {this.sortBy} dlt = {this.del}/>}
   
      </div>


    )
  }
}