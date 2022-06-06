import { LoginI } from "./login.interface";

export interface ResponseI{
    dataUser:{
        sms: string,
        accessToken: string,
        user: LoginI
    }
 
}