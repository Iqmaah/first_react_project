

const CreateNew = () => {
    return(
                    <div className="card text-center rounded-3 my-5 d-flex">
                        <div class="card-body p-5">
                            <a href="{#}" className="card-text ms-4 text-success"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 16 16">
                                   <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>
                                    </svg></a>
                            <h5 className="card-text text-success">Create new savings</h5>
                        </div>
                    </div>
    
    )
}

export default CreateNew