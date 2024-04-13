import axiosInstance from "../core/interceptors/axios-interceptor";
import { BaseService } from "../core/services/base-service";
import { CreateProfileCommand, CreatedProfileResponse, GetByIdProfileResponse, UpdateProfileCommand, UpdatedProfileResponse } from "../models/profilemodels";
import { GetListProfileListItemDto } from "../models/responses/responses";

class ProfileService extends BaseService<
    GetListProfileListItemDto,
    GetByIdProfileResponse,
    CreateProfileCommand, 
    CreatedProfileResponse,
    UpdateProfileCommand, 
    UpdatedProfileResponse
> { 
    constructor() {
		super();
		this.apiUrl = "Profiles";
	}
    async CreateAccountProfile(profileId:number){
       return await axiosInstance.post("AccountProfiles",{profileId:profileId});
    }
}
export default new ProfileService();