import Header from './headers'
import Button from './Button'


const Register = () => {


    return(
        <div className = "container">
            <Header/>
            <form>
                <h1>Register</h1>

                <div class="mb-3">
                    <label htmlFor="firstname" class="form-label">Firstname</label>
                    <input type="text" class="form-control" id="firstname" />
                </div>

                <div class="mb-3">
                    <label htmlFor="lastname" class="form-label">Lastname</label>
                    <input type="text" class="form-control" id="lastname" />
                </div>

                <div class="mb-3">
                    <label htmlFor="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1"/>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div class="mb-3">
                    <label class="form-label" htmlFor="password">Phone</label>
                    <input type="text" class="form-control" id="exampleCheck1"/>
                </div>

                <div class="mb-3">
                    <label htmlFor="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>

                <div class="mb-3">
                    <label htmlFor="password" class="form-label">Confirm Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                
                <Button name="Register" check={true}/>
            </form>
        </div>
    )


}

export default Register