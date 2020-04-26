// change the fucking thing!

import utilService from '../../services/utilService.js'


export default {
    query,
    getById
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
    return gEmails;
}

function getById(emailId) {
    const email = gEmails.find(email => email.id === emailId)
    return Promise.resolve(email);
}