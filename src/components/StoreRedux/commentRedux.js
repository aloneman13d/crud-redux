
const commentReducer = (state =[], action) =>{
    switch (action.type) {
        case "Add_Comment":
            return state.concat([action.data])
        case "Update_Comment":
            return state.map((comment)=>
                {
                    if(comment.id===action.id){
                        return {
                            ...comment,
                            name:action.data.newname,
                            message:action.data.newmessage,
                            editing: !comment.editing
                        }
                    } else return comment
                }
            )
        case "Edit_Comment":
            return state.map((comment)=>comment.id===action.id ? {...comment,editing:!comment.editing}:comment)
        case "Delete_Comment":
            return state.filter((comment)=>comment.id !== action.id) // ใช้เมทธอด filter เลือกค่าใน Array  state !== action  จริงเอาออก
        default:
        return state
    }
}
export default commentReducer