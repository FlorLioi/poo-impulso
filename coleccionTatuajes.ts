import Tatuaje from "./tatuaje";

export default class ColeccionTatuajes{
    private tatuajes:Tatuaje[]

    constructor(){
        this.tatuajes = [];
    }

    public addTatuaje(tatuaje:Tatuaje):void{
        try{
            if(tatuaje){
                this.tatuajes.push(tatuaje);
            }else{
                throw new Error (`No se recibio ningun tatuaje valido`);
            }
        }catch(error){
            console.log(`Error en alta: ${error.message}`);
        }
    }

    public delTatuaje(posicion:number):void{
        try{
            if(posicion>=0){
                this.tatuajes.splice(posicion,1);
            }else{
                throw new Error(`No se recibio una posicion valida`);
            }
        }catch(error){
                console.log(`Error en eliminacion: ${error.message}`);
        }
    }

    public updTatuaje(tatuaje:Tatuaje, posicion:number):void{
        try{
            if(tatuaje && posicion>=0){
                this.tatuajes[posicion]=tatuaje;
            }else if (posicion<0){
                throw new Error (`No se recibio una posicion valida`);
            }else{
                throw new Error(`No se recibio un tatuaje valido`);
            }
        }catch (error){
            console.log(`Error en la actualizacion: ${error.message}`);
        }
    }
}

