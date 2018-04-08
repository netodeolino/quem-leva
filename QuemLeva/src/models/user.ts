export class User {    
    
    
    public uid: any;
    public $key : string;

    constructor(
        public name : string,
        public nickname : string,
        public email : string,
        public photo : string,
        public facebookToken : string, 
        public uidFacebook: string,
    ){

    }
}