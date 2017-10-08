import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Input,Button } from 'antd';

import { commentsFetch,addComment } from '../actions/comments';

const { TextArea } = Input;

class CommentList extends Component {
    componentDidMount() {
        this.props.fetchData('http://599167402df2f40011e4929a.mockapi.io/items');
    }

    render() {
        return (
          <div>
              <TextArea  value={this.props.comment}  rows={4} />   
              <Button type="primary" onClick={this.props.addComment}>Primary</Button>   
            <ul>
                {this.props.comments.map((comment) => (
                    <li key={comment.id}>
                        {comment.label}
                    </li>
                ))}
            </ul>
          </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.comments,
        comment:state.comment
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(commentsFetch(url)),
        addComment:(e) => dispatch(addComment({id:100,label:'xxxxxx'}))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(CommentList);