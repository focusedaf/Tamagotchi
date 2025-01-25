import {Link} from 'react-router-dom'

function Landing() {
  

    return (
      <>
       <h1>Hi! This is Landing page</h1>
       <p>
            This is the landing page of the Tamagotchi app. 
            You click the start button and it takes you to the form page.
       </p>
       <Link to="/form" >Form</Link>
      </>
    )
  }
  
  export default Landing