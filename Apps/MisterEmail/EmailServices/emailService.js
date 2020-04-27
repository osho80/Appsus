import utilService from '../../services/utilService.js'
import storageService from '../../services/storageService.js'

const STORAGE_KEY = 'emails'

export default {
    query,
    getById,
    remove,
    save,
    getNextPrevEmail
}

const gDefaultEmails = [{
        from: 'Almog',
        subject: 'hello world',
        id: utilService.makeId(),
        body: 'hello world, its a beautiful day',
        isRead: false,
        sentAt: Date.now(),
    },
    {
        from: 'Almog',
        subject: 'goodbye world',
        id: utilService.makeId(),
        body: 'goodbye world, its a an awfal day',
        isRead: false,
        sentAt: Date.now(),
    },
    {
        from: 'Almog',
        subject: 'SPRINT 3',
        id: utilService.makeId(),
        body: 'here we go again',
        isRead: false,
        sentAt: Date.now(),
    }
]

var gEmails = null

_createEmails()

function query() {
    var emails = gEmails
    return Promise.resolve(emails);
}

function getById(emailId) {
    const email = gEmails.find(email => email.id === emailId)
    return Promise.resolve(email);
}


function _getIdxById(emailId) {
    const emailIdx = gEmails.findIndex(email => email.id === emailId)
    return Promise.resolve(emailIdx)
}

function save(emailToSave) {
    var savedEmail = emailToSave
    savedEmail = _createEmail(emailToSave.subject, emailToSave.body)
    gEmails.push(savedEmail)
    storageService.store(STORAGE_KEY, gEmails)
    console.log(gEmails);
    return Promise.resolve(savedEmail)

}

function _createEmail(subject, body) {
    return {
        from: 'Almog',
        subject,
        body,
        id: utilService.makeId(),
        sentAt: Date.now(),
        isRead: false,
        isStarred:false

    }
}

function _createEmails() {
    gEmails = storageService.load(STORAGE_KEY, gDefaultEmails)
    storageService.store(STORAGE_KEY, gEmails)
}

function remove(emailId) {
    const emailIdx = _getIdxById(emailId)
    console.log(emailIdx);

    gEmails.splice(emailIdx, 1)

    storageService.store(STORAGE_KEY, gEmails)
    return Promise.resolve()
}

function getNextPrevEmail(emailId) {
    const emailIdx = _getIdxById(emailId)
        .then(idx => {
            if (idx === 0) {
                var prevId = gEmails[idx].id
            } else {
                var prevId = gEmails[idx - 1].id;
            }
            var nextId = gEmails[idx + 1].id;
            return {
                nextId,
                prevId
            }
        })
    return emailIdx
}