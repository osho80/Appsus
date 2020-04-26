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

var gEmails = [{
        subject: 'hello world',
        id: utilService.makeId(),
        body: 'hello world, its a beautiful day',
        isRead: false,
        sentAt: Date.now(),
    },
    {
        subject: 'goodbye world',
        id: utilService.makeId(),
        body: 'goodbye world, its a an awfal day',
        isRead: false,
        sentAt: Date.now(),
    },
    {
        subject: 'SPRINT 3',
        id: utilService.makeId(),
        body: 'here we go again',
        isRead: false,
        sentAt: Date.now(),
    }
]

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
}