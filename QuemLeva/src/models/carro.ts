export class Carro {    
    
    public uid: any;
    public $key : string;

    constructor(
        public modelo : string,
        public placa : string,
        public cor : string,
        public vagas: number,
    ){

    }
}