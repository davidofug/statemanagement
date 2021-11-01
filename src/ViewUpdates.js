import {useContext} from 'react'
import PhonebookContext from './PhonebookContext'

function ViewUpdates() {

    const { phones } = useContext(PhonebookContext);
    
    return (
        <div>
            {
                phones.length > 2 &&
                <>
                    <h1>Updated state</h1>
                    {phones.map(phone => (
                        <div key={phone.id}>{phone.name} - {phone.number}</div>
                    ))
                    }
                </>
            }
        </div>
    )
}

export default ViewUpdates
