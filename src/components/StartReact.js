import Button from './Button'
import Gender from './Gender'
import Header from './headers'


const StartReact = () => {

   

    return (<div className="container">
        <Header/>
        <h1>Login</h1><hr/>
        <form>
           <div> 
                <label htmlFor="firstname">Firstname:</label> &nbsp; 
                <input type ="text" id= "firstname" className="form-control"/><br/><br/>
            </div>
            <div>
                <label htmlFor= "lastname">Lastname:</label> &nbsp;
                <input type= "text" id="lastname" className="form-control"/><br/>
            </div>

            <Gender/><br/>
            <Button name="Login" check={false}/>

        </form>

    </div>
        )
}



export default StartReact