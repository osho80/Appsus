// change the fucking thing!

import utilService from '../../services/utilService.js'
import storageService from '../../services/storageService.js'

const STORAGE_KEY = 'emails'

export default {
    query,
    getById,
    remove,
    save
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

function remove(emailId) {
    const emailIdx = _getIdxById(emailId)
    gEmails.splice(emailIdx, 1)

    storageService.store(STORAGE_KEY, gEmails)
    return Promise.resolve()
}

function _getIdxById(emailId) {
    return gEmails.findIndex(email => email.id === emailId)
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

    }
}

function _createEmails() {
    gEmails = storageService.load(STORAGE_KEY, gDefaultEmails)
    storageService.store(STORAGE_KEY, gEmails)
}