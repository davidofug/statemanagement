import DefaultState from './DefaultState'
import ViewUpdates from './ViewUpdates'
import UpdateState from './UpdateState'
import OutsideComponent from './OutsideComponent'
import PhonebookProvider from './PhonebookProvider'
function App() {
    return (
        <>
           <h1> Testing rerender</h1>
            <PhonebookProvider>
                <UpdateState />
                <DefaultState />
                <ViewUpdates />
            </PhonebookProvider>
            <p>More information</p>
            <OutsideComponent />
        </>
    )
}

export default App
