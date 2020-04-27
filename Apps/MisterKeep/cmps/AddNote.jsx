// import { AddText } from './AddText.jsx'
import {NoteTools} from './NoteTools.jsx' 


export class AddNote extends React.Component {
    state = {
        note: {
            type: 'NoteText',
            isPinned: false,
            title: '',
            info: {
                txt: ''
            }
        }
    }

    // openEditor = ({ target }) => {
    //     this.openEditor
    // }

    handleInput = ({ target }) => {
        document.querySelector('.note-editor').hidden = false;
        document.querySelector('.note-title').hidden = false;
        // this.DynamicCmp();
        const field = target.name
        const value = target.value
        console.log('field: ', field);
        console.log('value: ', value);

        this.setState(prevState => {
            return {
                ...prevState,
                [field]: value
            }
        })
    }

    setNoteType = (type) => {
        console.log('Type: ', type);
        // this.setState
        
    }

    // DynamicCmp = (note) => {
    //     console.log('dynamic', note);
        
    //     switch (note.type) {
    //         case 'NoteText':
    //             return
                
    //                 <input type="text" placeholder="Text" name ="info.txt" onChange={this.handleInput}/>
                
    //         // case 'NoteText':
    //         //     return <AddText {...note} />
    //         //         case 'NoteImg':
    //         //             return <AddImg {...note} />
    //         //         case 'NoteList':
    //         //             return <AddList {...note} />
    //         //         case 'NoteVideo':
    //         //             return <AddVideo {...note} />
    //     }
    // }


    render() {
        const { note } = this.state
        // const { info } = note.info
        console.log('mynote is: ', note);
        console.log('note info: ', note.info);

        // const elEditor = 

        // const DynamicCmp = (note) => {
        //     switch (note.type) {
        //         case 'NoteText':
        //             return
                    
        //                 <input type="text" placeholder="Text" name ="info.txt" onChange={this.handleInput}/>
                    
                // case 'NoteText':
                //     return <AddText {...note} handleinput=  />
                //         case 'NoteImg':
                //             return <AddImg {...note} />
                //         case 'NoteList':
                //             return <AddList {...note} />
                //         case 'NoteVideo':
                //             return <AddVideo {...note} />
        //     }
        // }

        return (
            <React.Fragment>
                <section className="add-note">
                    <div className="note-input">
                        <input type="text" className="note-title" placeholder="Title" name="title" onChange={this.handleInput} hidden/>
                        <input type="text" placeholder="Add Note:" name ="info.txt" onChange={this.handleInput}/>
                    </div>
                    <button onClick={()=>this.setNoteType('NoteList')}>list</button>
                    <button>img</button>
                    <button>Video</button>
                </section>
                <section className="note-editor" hidden>
                    <p>Note Editor</p>
                    {/* <NoteTools note = {...note}/> */}
                    {/* {DynamicCmp(note)} */}
                </section>
                {/* <section className="add-img-note" hidden>
                    <p>Add Image Note</p>
                </section>
                <section className="add-list-note" hidden>
                    <p>Add List Note</p>
                </section>
                <section className="add-video-note" hidden>
                    <p>Add Video Note</p>
                </section> */}

            </React.Fragment>
        )
    }
}