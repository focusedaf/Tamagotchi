import { Link } from "react-router-dom"

function Dashboard() {
  

    return (
      <>
       <h1>Hi! This is Dashboard Page</h1>
        <p>
            Main page. Users can click on the pet image or the button to go to the chat page.
        </p>
        <Link to="/settings" >Settings</Link>
        <Link to="/chat" >Chat with Pet</Link>
        <Link to="/form" >Back to Form</Link>
      </>
    )
  }
  
  export default Dashboard
  