// import CreateNew from './CreateNew'

import CreateNew from "./CreateNew"
import Savings from "./Savings"


const Buddies = () => {

    const datas = [
        {
            "id": "01",
            "name": "Vacation",
            "savingsID": "e090ce43-315b-4852-bcca-ee5a1f4223ba",
            "amountToSave": 50000.000000000000000000,
            "amountSaved": 0.000000000000000000,
            "totalInterestEarned": 0,
            "estimatedTerminationDate": "2022-03-08T00:00:00",
            "startDate": "2022-02-26T00:00:00",
            "savingsType": 1,
            "status": 1,
            "imageURL": "",
            "interestRate": 15.50,
            "schedule": 1,
            "installmentalContribution": 5000.000000000000000000,
            "isPaused": false
        },
        {
            "id": "02",
            "name": "Testing Personal Target",
            "savingsID": "72824131-b4ae-49d0-bcae-29e553deb51c",
            "amountToSave": 2000.000000000000000000,
            "amountSaved": 2500.000000000000000000,
            "totalInterestEarned": 10.616438356164383561643835616,
            "estimatedTerminationDate": "2022-02-23T00:00:00",
            "startDate": "2022-02-20T00:00:00",
            "savingsType": 1,
            "status": 2,
            "imageURL": "",
            "interestRate": 15.50,
            "schedule": 1,
            "installmentalContribution": 666.666666666666666667,
            "lastPaymentDate": "2022-02-20T00:00:00",
            "isPaused": true
        },
        {
            "id": "03",
            "name": "G Challenge Weekly",
            "savingsID": "c6a1f776-ab92-4c89-aceb-9fdcfc70abb2",
            "amountToSave": 2000.000000000000000000,
            "amountSaved": 0.000000000000000000,
            "totalInterestEarned": 0,
            "estimatedTerminationDate": "0001-01-01T00:00:00",
            "startDate": "0001-01-01T00:00:00",
            "savingsType": 5,
            "status": 1,
            "imageURL": "https://wealthbuddytestdiag.blob.core.windows.net/wealthbuddy-group-challenge-savings/22fe2b2b-46ab-4971-8a87-72da6085e09b.jpeg",
            "interestRate": 12.50,
            "schedule": 2,
            "installmentalContribution": 250.000000000000000000,
            "isPaused": false
        },
        {
            "id": "04",
            "name": "G challenge week",
            "savingsID": "286c453f-3910-4df7-9b02-87ae6d9844e2",
            "amountToSave": 5000.000000000000000000,
            "amountSaved": 0.000000000000000000,
            "totalInterestEarned": 0,
            "estimatedTerminationDate": "0001-01-01T00:00:00",
            "startDate": "0001-01-01T00:00:00",
            "savingsType": 5,
            "status": 1,
            "imageURL": "https://wealthbuddytestdiag.blob.core.windows.net/wealthbuddy-group-challenge-savings/897b9d7a-5030-446b-99b2-7248e80e9a95.jpeg",
            "interestRate": 12.50,
            "schedule": 1,
            "installmentalContribution": 166.666666666666666667,
            "isPaused": false
        },
        {
            "id": "05",
            "name": "G challenge",
            "savingsID": "87c9042a-16a7-4e31-80c4-1f805fa4c1b5",
            "amountToSave": 2000.000000000000000000,
            "amountSaved": 0.000000000000000000,
            "totalInterestEarned": 0,
            "estimatedTerminationDate": "0001-01-01T00:00:00",
            "startDate": "0001-01-01T00:00:00",
            "savingsType": 5,
            "status": 1,
            "imageURL": "https://wealthbuddytestdiag.blob.core.windows.net/wealthbuddy-group-challenge-savings/e8db900b-60b2-46e8-b980-5a274df81582.jpeg",
            "interestRate": 12.50,
            "schedule": 3,
            "installmentalContribution": 500.000000000000000000,
            "isPaused": false
        },
        {
            "id": "06",
            "name": "GroupTargetTest2",
            "savingsID": "d16d61ac-3f62-437c-bf10-a8bb5b83b090",
            "amountToSave": 10000.000000000000000000,
            "amountSaved": 3333.333333333333333334,
            "totalInterestEarned": 0,
            "estimatedTerminationDate": "2021-02-26T00:00:00",
            "startDate": "2021-02-23T22:45:51.57",
            "savingsType": 4,
            "status": 5,
            "imageURL": "",
            "interestRate": 12.75,
            "schedule": 1,
            "installmentalContribution": 1666.666666666666666667,
            "lastPaymentDate": "2021-02-23T23:46:04.65",
            "isPaused": false
        },
        {
            "id": "07",
            "name": "CheckTargetTest",
            "savingsID": "d5393a07-6b61-46fd-9948-ed3d1404b55e",
            "amountToSave": 5000.000000000000000000,
            "amountSaved": 1666.666666666666666666,
            "totalInterestEarned": 0,
            "estimatedTerminationDate": "2021-02-26T00:00:00",
            "startDate": "2021-02-23T22:33:26.8333333",
            "savingsType": 4,
            "status": 5,
            "imageURL": "",
            "interestRate": 12.75,
            "schedule": 1,
            "installmentalContribution": 833.333333333333333333,
            "lastPaymentDate": "2021-02-24T00:00:00",
            "isPaused": false
        },
        {
            "id": "08",
            "name": "TestChallengeCheck",
            "savingsID": "1ed6b0ce-92c9-4e6c-8b3e-2ccb94fba89b",
            "amountToSave": 2000.000000000000000000,
            "amountSaved": 2000.000000000000000001,
            "totalInterestEarned": 0.684931506849315069,
            "estimatedTerminationDate": "2021-02-26T00:00:00",
            "startDate": "2021-02-23T22:00:36.87",
            "savingsType": 5,
            "status": 5,
            "imageURL": "",
            "interestRate": 12.50,
            "schedule": 1,
            "installmentalContribution": 666.666666666666666667,
            "isPaused": false
        }
    ]




    return(
        // parent div
        <div className="border  bg-light">
            <hr/> 

            <div className="container-fluid row ">
                <div className=" col-4" >
                    <div className="container row-2 border rounded-3 p-5">
                        <p>Total saved</p>
                        <h2>₦2,500</h2>
                    </div><br/>
                    <div className="container row-8 border rounded-3 p-5" >
                        <h5>Transaction history</h5> <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        <div className=" text-center">
                            <h5>Nothing to see here yet</h5>
                            <h5 className="text-secondary">Find any of your savings plan and see your transactions history here</h5>
                        </div>
                        
                    </div>
                    <div className="container row-2" ></div>
                </div>


                <div className="col-8" >
                        <div className="container d-flex align-content-stretch flex-wrap">
                                <div className="row">
                                    <div className="col bg-white" >
                                        <CreateNew/>
                                    </div>
                                    <div className="col container">
                                        {
                                            datas.map(data  => <Savings key={datas.id} iqmah= {data}/>) 
                                        }
                                        
                                    </div>
                                </div>
                        </div>
                    
                </div>

            </div>

        </div> //end of parent div
         


    )
}

export default Buddies