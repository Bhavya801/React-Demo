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

   onApply = (api)=> {
    axios.get(`https://dummyjson.com/${api}`)
    .then(res => {
      // const items = res.data
      // console.log(items);
      // console.log("axios12",res.data)
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
    // console.log("1111",key)
    // console.log('************state',this.state.items && this.state.items[`${find}`])
    // let arrayCopy = [...this.state.items[`${find}`]];
    // console.log("**2",arrayCopy)
    // console.log("message: ",this.state.items[`${find}`])
    let tmp = [...this.state.items];
    tmp.sort(this.compareBy(key))
    // this.state.items[`${find}`] && this.state.items[`${find}`].sort(this.compareBy(key));
  //  let x = {
  //   comments: [...tmp]
  //  }
   
    this.setState({
      items: tmp
    })
    // console.log("**33",arrayCopy)
    // this.setState({items:})

    // this.setState({items:this.state.items[`${find}`] && this.state.items[`${find}`].sort()});
    }
    del = id => {
      const newData = this.state.items && this.state.items.filter(item => item.id !== id);
      // console.log("@@22",newData)
      this.setState({ items: newData });
  }


  render() {
    // console.log("**********items",this.state.items)
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