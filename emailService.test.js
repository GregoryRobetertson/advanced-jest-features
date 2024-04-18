const {sendEmail} = require('./emailService')

jest.mock('./emailService', () => ({
    sendEmail: jest.fn().mockReturnValue('Email sent'),
}));

describe('sendEmail', () => {
    it('should call sendEmail is called with correct parameters', () => {
        const to = 'test@example.com';
        const subject = 'Test Subject';
        const body = 'Test Body';
        const result = sendEmail(to, subject, body);
        expect(sendEmail).toHaveBeenCalledWith(to, subject, body);

        expect(result).toBe(`Email sent`);

    })
})
