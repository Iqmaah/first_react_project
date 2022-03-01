

const Button = (props) => {
    const {name, check} = props

    function Submit () {
        alert("You clicked me")
    }

    return (check) ? <button onClick={Submit} className="btn btn-dark">{name} </button>
    : <button onClick={Submit} className="btn btn-danger">{name} </button>

    // return(
    //     // <div
    //     // </div>
    // )

}


export default Button