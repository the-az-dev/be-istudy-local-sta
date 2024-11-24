export class CreateUserDto {
    name: string;
    surname: string;
    mail: string;
    login: string;
    password: string;
    userRole: number;
    confirmed: boolean = false;
}
