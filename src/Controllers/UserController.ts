import {Request, Response} from 'express';
import EmailService, {IMailMessage, IMailTo} from "../Services/EmailService";

const users = [
    {name: 'Mauricio Rodrigues', email: 'mmauricio.vsr@gmail.com'},
    {name: 'Saulo Carmuça Janebro', email: null},
    {name: 'Sara Camurça', email: 'saracj@gmail.com'}
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },

    async notify(req: Request, res: Response) {
        const emailService = new EmailService();
        emailService.send({
            to: {
                name: 'Mauricio Rodrigues',
                email: 'mmauricio.vsr@gmail.com'
            },
            message: {
                subject: 'Esta é uma mensagem de teste',
                body: "Este é o corpo da mensagem que deverá ser enviada para o usuário"
            }
        });

        res.send(req.params);
    }
};