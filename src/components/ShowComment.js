import React from "react";
import {connect} from "react-redux";
import Comment from "./Comment";
import EditFormComponent from "./EditFormComponent";

class ShowComment extends React.Component{
    render(){
        return(
            <div>
                <h1>All Comment</h1>
                {this.props.comments.map((comment)=>
                    <div key={comment.id}>
                        {
                          comment.editing ? <EditFormComponent comment={comment} key={comment.id} /> :
                            <Comment key={comment.id} comment={comment} /> 
                        }
                    </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        comments: state
    }
}
export default connect(mapStateToProps)(ShowComment)