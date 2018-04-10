import { Carro } from './carro';
export class User {    
    
    
    public uid: any;
    public $key : string;

    constructor(
        public name : string,
        public email : string,
        public photo : string,
        public telefone: string,
        public facebookToken : string, 
        public uidFacebook: string,
        public carro: Carro,
    ){

    }
}