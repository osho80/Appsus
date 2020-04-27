export class AddText extends React.Component {
    
    

    render() {
        
        
        return (
            <div className="add-txt">
                <input type="text" placeholder="Title" name="title" />
                <input type="text" placeholder="Text" name ="info.txt" onChange={this.handleInput}/>
            </div>
        )
    }
}