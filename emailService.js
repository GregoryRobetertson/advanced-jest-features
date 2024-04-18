'use strict';

function sendEmail(to, subject, body) {
    return `Email sent to ${to}`;
}

module.exports = {sendEmail};