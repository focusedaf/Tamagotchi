import { Link } from "react-router-dom"

function Chat() {
  

    return (
      <>
       <h1>Hi! This is chat page</h1>
        <p>
            The users can chat freely with their pets here.
        </p>
        <Link to="/dashboard" >Back to Dashboard</Link>
      </>
    )
  }
  
  export default Chat
  