import NavBar from "./NavBar"
import Footer from "./Footer"


const Facebook = () =>{

  return(
<div>
        <NavBar/>

    <div className="container-fluid" style={{backgroundColor: "lightgray"}}>
      <div class="row">
        <div class="col">
          
        </div> 
        <div class="col">
          
                <div className="p-5 bg-light my-5 rounded-3 ">
                    <h3>Find Your Account</h3>
                    <hr/> 
                    <p>Please enter your email address or mobile number to search for your account</p>
                    <input className="form-control me-2 " placeholder="Email address or mobile number" />
                    <hr/>
                    <div className="d-flex">
                      <button className="btn btn-secondary me-2 mx-auto" type="submit">Cancel</button>&nbsp; &nbsp;
                      <button className="btn btn-primary " type="submit">Search</button>
                    </div>
                </div>
        </div>
        <div class="col">

        </div>
      </div>
    </div>


    <div style={{height:"200px"}}></div>

    <Footer/>

  
</div>

  )
}


export default Facebook



