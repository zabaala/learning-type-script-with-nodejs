interface IMailTo {
    name: string
    email: string
}

interface IMailMessage {
    subject: string;
    body: string;
    attachment?: string[];
}

interface IMessageDTO {
    to: IMailTo,
    message: IMailMessage
}

interface IMailService {
    send(params: IMessageDTO) : void
}

export {
    IMailTo,
    IMailMessage,
    IMessageDTO
}

export default class EmailService implements IMailService {
    send({to, message}: IMessageDTO) {
        const output = `Send a e-mail to ${to.name}<${to.email}> 
                with subject '${message.subject}' and body: ${message.body}.`;

        console.log(output);
    }
}