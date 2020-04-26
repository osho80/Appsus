import { AddText } from './AddText.jsx'


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

        const field = target.name
        const value = target.value
        this.setState(prevState => {
            return {
                ...prevState,
                [field]: value
            }
        })
    }



    render() {
        const { note } = this.state
        // const { info } = note.info
        console.log('mynote is: ', note);
        console.log('note info: ', note.info);

        // const elEditor = 

        // const DynamicCmp = (note) => {
        //     switch (note.type) {
        //         case 'NoteText':
        //             return <AddText {...note} />
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
                    <input type="text" placeholder="Add Note:" onChange={this.handleInput} />
                    <button>list</button>
                    <button>img</button>
                    <button>Video</button>
                </section>
                <section className="note-editor" hidden>
                    <p>Note Editor</p>
                    {/* <NoteTools /> */}
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