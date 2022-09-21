export default class Usuario{
    private nombre:string;
    private email:string;

    constructor(nombre:string, email:string){
        this.nombre=nombre;
        this.email=email;
    }

    public getNombre(): string{
        return this.nombre;
    }

    public setNombre(nombre: string) {
        this.nombre = nombre;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string) {
        this.email = email;
    }



}