import useDefaultstate from './DefaultStatehook';
import PhonebookContext from './PhonebookContext';

function PhonebookProvider({ children }) {
    
    const [phones, updatePhones] = useDefaultstate()

/*     const [phones, updatePhones] = useState([
        {
            id:"x01",
            name: "David",
            number: "+256704255XXX"
        },
        {
            id:"x02",
            name: "Lydia",
            number: "+256740550XXX"
        }
    ]); */

    const initialGlobalStateValues = { phones, updatePhones };

    return (
        <PhonebookContext.Provider value={initialGlobalStateValues}>
            {children}
        </PhonebookContext.Provider>
    )
}

export default PhonebookProvider
