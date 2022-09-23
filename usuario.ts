export default class Usuario{
    private nombre:string;
    private email:string;
    private contrasenha:string;

    constructor(nombre:string, email:string, contrasenha:string){
        this.nombre=nombre;
        this.email=email;
        this.contrasenha=contrasenha;
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

    public getContrasenha(): string {
        return this.contrasenha;
    }

    public setContrasenha(contrasenha: string) {
        this.contrasenha = contrasenha;
    }

    public imprimir() :string{
        return `Usuario: ${this.getNombre()}, email: $${this.getEmail()}, contraseña: ${this.getContrasenha()}}`;
    }

}