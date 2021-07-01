import React from 'react';
import {connect} from 'react-redux';


class EditFormComponent extends React.Component{
    handleSumit = (e) =>{
        e.preventDefault();  // เมื่อ Submit ให้ไม่เปลี่ยนแปลงหน้า  
        const newname = this.getName.value
        const newmessage = this.getMessage.value
        const data = {
            
            newname,
            newmessage
        }

        this.props.dispatch({
            type:"Update_Comment",
            id:this.props.comment.id,
            data:data
        })
        console.log(data)
    }
    render(){
        return(
            <div>
                <h1>Edit Comment</h1>
                <form onSubmit={this.handleSumit}>
                    <input required type="text" placeholder="ป้อนชื่อ" ref={(input)=>this.getName = input} defaultValue={this.props.comment.name}/><br/>
                    <textarea required rows="5" cols="28" placeholder="ข้อความ" ref={(input)=>this.getMessage = input} defaultValue={this.props.comment.message}/><br/>
                    <button>Update</button>
                </form>
            </div>
        )
    }
}

export default connect()(EditFormComponent)