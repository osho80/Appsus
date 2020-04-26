import storageService from '../../services/storageService.js'
import utilService from '../../services/utilService.js'

const KEEP_KEY = 'notes';

export default {
    query
}
var gNotes = [
    {
        id: "OXeMG8",
        type: "NoteText",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        id: "1y0Oqt",
        type: "NoteImg",
        info: {
            url: "https://store-images.s-microsoft.com/image/apps.6632.13914979749842905.9c677d6d-da11-477f-bc18-b44258890dc0.890a1e33-f92c-4690-a684-3fa619396282",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        id: "f4iuVm",
        type: "NoteList",
        info: {
            label: "How was it:",
            items: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]
        }
    }
];

saveNotesToStorage();

function saveNotesToStorage(){
    storageService.store(KEEP_KEY, gNotes)
}

function _craeteNote() {
    console.log('Creating a note...');
    
}

function query() {
    return gNotes;
}