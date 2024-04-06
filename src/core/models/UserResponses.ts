export interface UserForRegisterDto {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}
export interface UserForLoginDto {
    email: string;
    password: string;
    authenticatorCode: string | null;
}