

const TransactionHistory = (props) => {
    const data = props.iqmah

    return(

        <div>
            

                                        
                <div className="container">
                    <div className="col">

                        <div className="row">

                            <div className="container">
                                <div className="row">
                                    <div class="col-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-file-lock2-fill bg-info" viewBox="0 0 16 16">
                                            <path d="M7 6a1 1 0 0 1 2 0v1H7V6z"/>
                                            <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-2 6v1.076c.54.166 1 .597 1 1.224v2.4c0 .816-.781 1.3-1.5 1.3h-3c-.719 0-1.5-.484-1.5-1.3V8.3c0-.627.46-1.058 1-1.224V6a2 2 0 1 1 4 0z"/>
                                        </svg>
                                    </div>
                                    <div className="col-7">
                                        <h6>{data.name}</h6>
                                        <p>{data.creationDate} - Fund</p>

                                    </div>
                                    <div className="col-3">
                                    <h6>₦{data.amount}</h6>
                                    </div>
                                </div>
                            </div><hr/>

                        </div>

                    </div>
                </div>
        </div>
    )
}

export default TransactionHistory