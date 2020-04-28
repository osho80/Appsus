export class SearchNote extends React.Component {
    state = {
        search: ''
    }

    

    render() {
        return(
            <input type="text" placeholder="Search Notes" onSearch={this.props.onSearch} />
        )
    }
}