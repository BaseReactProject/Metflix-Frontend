import { GetListResponseModel } from "../core/models/ResponseModels";

export interface CreateProfileCommand {
    
    name: string;
    password: string;
}
export interface DeleteProfileCommand {
    id: number;
}
export interface UpdateProfileCommand {
    id: number;
    name: string;
    imageId: number;
}
export interface GetByIdProfileResponse {
    id: number;
    name: string;
    imageId: number;
}
export interface CreatedProfileResponse {
    id:number;
    name: string;
    imageId: number;
}
export interface DeletedProfileResponse {
    id: number;
}
export interface UpdatedProfileResponse {
    name: string;
    imageId: number;
}