export interface User{
    id?: number,
    username?: string,
    password?: string,
    nombre: string,
    apellido: string,
    email: string,
    telefono: string,
    enabled?: boolean,
    perfil: string
}