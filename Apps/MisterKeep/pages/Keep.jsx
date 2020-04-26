const { NavLink, Route } = ReactRouterDOM



export class Keep extends React.Component {
    state = {
        notes: null,
        selectedNote: null,
        filterBy: null,
        search: null,
        noteIdToEdit: null
    }
    
    
    render() {
        return (
            <main className="keep-main">
                <header className="keep-header">
                    <h1>My Brother's Keeper </h1>
                    <input type="text" placeholder="Search Notes"/>
                    <select name="note-type" id="">

                    </select>
                    {/* <NavLink/> */}
                </header>
                <div className="pinned-notes">

                </div>
                <div className="other-notes">

                </div>
            </main>


        )
    }

} 