import React from 'react';
import {connect} from 'react-redux';


class CommentForm extends React.Component{
    handleSumit = (e) =>{
        e.preventDefault();  // เมื่อ Submit ให้ไม่เปลี่ยนแปลงหน้า  
        const name = this.getName.value
        const message = this.getMessage.value
        const data = {
            id : new Date(),
            name,
            message,
            editing:false
        }

        this.props.dispatch({
            type:"Add_Comment",
            data
        })

        this.getName.value =""
        this.getMessage.value =""
        console.log(data)
    }
    render(){
        return(
            <div>
                <h1>Add Comment</h1>
                <form onSubmit={this.handleSumit}>
                    <input required type="text" placeholder="ป้อนชื่อ" ref={(input)=>this.getName = input} /><br/>
                    <textarea required rows="5" cols="28" placeholder="ข้อความ" ref={(input)=>this.getMessage = input} /><br/>
                    <button>Comment</button>
                </form>
            </div>
        )
    }
}

export default connect()(CommentForm)