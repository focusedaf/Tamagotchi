import { Link } from "react-router-dom"

function Form() {
  

    return (
      <>
       <h1>Hi! This is the input/form page</h1>
        <p>
            After a successful submission, you are taken to the dashboard page.
        </p>
        <Link to="/" >Back to Home</Link>
        <Link to="/dashboard" >Dashboard</Link>
      </>
    )
  }
  
  export default Form
  