export default class EmailFilter extends React.Component {


    state = {
        filterBy: '',
    }

    handleFilter = ({ target }) => {
        
        const field = target.name
        const value = target.value

        this.setState(prevState => ({ filter: { ...prevState.filter, [field]: value } }), () => {
            this.props.onSetFilter(this.state.filter)
        })
    }

    onFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filter)
    }



    render() {
        const {filterBy} = this.state
        return (
            <React.Fragment>
            <form className="filter" onSubmit={this.onFilter}>
                <input placeholder="Search email" type="text" name="filterBy" value={filterBy} onChange={this.handleFilter} />
            </form>
            </React.Fragment>
        )
    }

}