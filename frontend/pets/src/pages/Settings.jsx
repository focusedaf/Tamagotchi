import { Link } from "react-router-dom"

function Settings() {
  

    return (
      <>
       <h1>Hi! This is settings and cuztomization page</h1>
        <p>
            Incase users want to change the name of the pet, pet image, music, etc they can do so here.
        </p>
        <Link to="/dashboard" >Back to Dashboard</Link>
      </>
    )
  }
  
  export default Settings
  