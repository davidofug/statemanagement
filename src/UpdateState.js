import {useContext} from 'react'
import PhonebookContext from './PhonebookContext'

function UpdateState() {

    const { phones, updatePhones } = useContext(PhonebookContext);

    const additionalPhones = [
        { id:"x03", name: "Julius", number: "+256771444XXX" },
        { id:"x04", name: "Abudi", number: "+256704998XXX" },
        { id:"x05", name: "Janet", number: "+256763554XXX" }
    ];

    const handleClick = () => {

        let phoneIds = additionalPhones.map( additionalPhone => additionalPhone.id)

        if (phoneIds.length > 0) {
            let uniquePhones = phones.filter(phone => !phoneIds.includes(phone.id) )

            updatePhones([...uniquePhones, ...additionalPhones])
        }
    }

    return <button onClick={handleClick}>Update state</button>
}

export default UpdateState
