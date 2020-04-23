import { Request, Response} from 'express';
import EmailService from '../services/EmailService';

const users = [
    {name: 'Denis', email: 'denyssouza1@hotmail.com'}
];

export default {
    async index(req: Request, res: Response){
        return res.json(users);
    },

    async create(req: Request, res: Response){
        const emailService = new EmailService();

        emailService.SendMail({
            to: {
                name: 'Denis Souza', 
                email:'denyssouza1@hotmail.com'
            },
            message:
             {subject:'Bem-vindo ao sistema', 
             body:'Bem vindo ao sistema'
            }
        });

        return res.send();
    }
}