

const Card = (props) => {
    const OneObject = props.iqmah

    return(
        <div className="card">
                <div className="card-header">
                    Quote
                </div>
                <div className="card-body">
                    <blockquote class="blockquote mb-0">
                    <p>{OneObject.id}</p>
                    <p>{OneObject.type}</p>
                    <p>{OneObject.name}</p>
                    <footer className="blockquote-footer">{OneObject.ppu}</footer>
                    </blockquote>
                </div>
        </div> 
    ) 
}

export default Card