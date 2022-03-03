import Card from './Card'
import Empty from './Empty'


const Cards = () => {

    const AllObjects =[
        {
            "id": "0001",
            "type": "donut",
            "name": "Cake",
            "ppu": 0.55,
        },
        {
            "id": "0002",
            "type": "donut",
            "name": "Raised",
            "ppu": 0.55
        },
        {
            "id": "0003",
            "type": "donut",
            "name": "Old Fashioned",
            "ppu": 0.55
        }
]



    return(
        <div className='container'>
            {
                AllObjects.length>0 ? AllObjects.map(OneObject => <Card iqmah={OneObject}/>) : <Empty/>

            }
            

        </div>
    )
}

export default Cards