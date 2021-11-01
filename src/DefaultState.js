// import { useContext } from 'react'
// import PhonebookContext from './PhonebookContext'
import usePhonebook from './Phonebookhook'

function DefaultState() {

    const { phones } = usePhonebook()

    return (
        <div>
            <h1>Default state</h1>
            {
               phones.slice(0,2).map(phone => <div key={phone.id}>{phone.name} - {phone.number}</div>)
            }
        </div>
    )
}

export default DefaultState
