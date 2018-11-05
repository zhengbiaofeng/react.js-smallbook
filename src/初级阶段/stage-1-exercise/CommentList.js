import React, { Component } from 'react';
import Comment from './Comment';

class CommentList extends Component {
  static defaultProps = {
    comments: []
  }
  constructor(props){
    super(props);
  }
  render() {
    console.log(this.props.comment);
    return (
      <div>{this.props.comment?this.props.comment.map((comment,i)=>{
        return (<Comment comment={comment} key={i}/>)
      }):''
      }</div>
    )
  }
}

export default CommentList;