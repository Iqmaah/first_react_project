

const Savings = (props) => {
    const data = props.iqmah
    return(

                <div className="card rounded-3 mb-3" style={{width: "18rem;"}}>
                    <div className="card-body">

                        <div className= "container">
                            <h5 className="card-title">{data.name}</h5>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="d-flex bd-highlight mb-3">
                                <div className="me-auto p-2 bd-highlight">0%</div>
                                <div className="p-2 bd-highlight">₦{data.amountToSave}</div>
                            </div>
                            <h5 className="badge bg-success text-wrap">Pending</h5>
                        </div><br/>

                        <div>
                                <div className="container">
                                    <div className="row row-cols-2">
                                        <div className="col">
                                            <p> Contribution</p>
                                            <p><b>₦{data.installmentalContribution}/Day </b> </p>
                                        </div>

                                        <div className="col">
                                            <p> Interest Rate</p>
                                            <p><b> {data.interestRate}% </b></p>
                                        
                                        </div>

                                        <div className="col">
                                            <p> Start Date</p>
                                            <p><b> {data.startDate} </b> </p>
                                        </div>

                                        <div className="col">
                                            <p> Maturity Date</p>
                                            <p><b> {data.estimatedTerminationDate} </b></p>
                                        </div>

                                    </div>
                                </div>
                        </div>

                    </div>
                </div>
               

    )
}

export default Savings