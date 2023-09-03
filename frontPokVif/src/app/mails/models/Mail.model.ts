import {MailSentimentModel} from "./MailSentiment.model";
import {MailCategorieModel} from "./MailCategorie.model";

export class MailModel {
constructor(public id:string, public subject:string, public dateReceive:Date, public body:string, public sentiment:MailSentimentModel, public categories:MailCategorieModel[]){
}
}
