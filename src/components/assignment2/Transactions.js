


const Transactions =(props) => {
    const transact = props.data
    return(
        <div className="card rounded-3 mb-3"  style={{width: "18rem;"}}>
                    <div className="card-body">

                        <div className= "container">
                            <h5 className="card-title">{transact.name}</h5>
                            <div className="progress">
                                <div className="progress-bar bg-success" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="d-flex bd-highlight mb-3">
                                <div className="me-auto p-2 bd-highlight">100%</div>
                                <div className="p-2 bd-highlight">₦{transact.amount}</div>
                            </div>
                            <h5 className="badge bg-success text-wrap">In Progress</h5>
                        </div><br/>

                        <div>
                                <div className="container">
                                    <div className="row row-cols-2">
                                        <div className="col">
                                            <p> Total Saved</p>
                                            <p><b>₦{transact.amount}/Day </b> </p>
                                        </div>

                                        <div className="col">
                                            <p> Interest Rate</p>
                                            <p><b> {transact.interestRate}% </b></p>
                                        
                                        </div>

                                        <div className="col">
                                            <p> Start Date</p>
                                            <p><b> {transact.creationDate} </b> </p>
                                        </div>

                                        <div className="col">
                                            <p> Maturity Date</p>
                                            <p><b> {transact.estimatedTerminationDate} </b></p>
                                        </div>

                                    </div>
                                </div>
                        </div>

                    </div>
                </div>
               

    )
}

 export default Transactions 