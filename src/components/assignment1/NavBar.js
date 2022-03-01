

const NavBar = () => {

    return(
                    <nav className="navbar navbar-light m-0 lh-0 py-0">
            <div className="container-fluid">
                <a  href="{#}" className="navbar-brand text-primary fs-2 fw-bold h4 p-2">facebook</a>
                <form className="d-flex">
                <input className=" me-2 rounded-3 p-2" type="search" placeholder="Email or Phone" aria-label="Search"/>
                <input className=" me-2 rounded-3 p-2" placeholder="Password" aria-label="Search"/>
                <button className="btn btn-primary me-2 rounded-3" type="submit">Log In</button>
                <a href="{#}" className="text-primary text-decoration-none mt-2 me-4">Forgotten account?</a>
                
                </form>
            </div>
            </nav>
        
    )
}








export default NavBar