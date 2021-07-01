import React from "react";
import {connect} from "react-redux";

class Comment extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.comment.name}</h1>
                <p>{this.props.comment.message}</p>
                <button onClick={()=>this.props.dispatch({type:"Edit_Comment",id:this.props.comment.id })}>
                    แก้ไข
                </button>
                <button onClick={()=>this.props.dispatch({type:"Delete_Comment",id:this.props.comment.id })}>
                ลบ
                </button>
            </div>
        )
    }
}

export default connect()(Comment)