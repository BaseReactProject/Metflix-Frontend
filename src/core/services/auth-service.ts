import axios from "axios";
import { BASE_API_URL } from "../../environment/environment";
import axiosInstance from "../interceptors/axios-interceptor";
import { UpdateUserPasswordDto, UserForLoginDto, UserForRegisterDto } from "../models/UserModels";
import { VerifyEmailAuthenticatorModel } from "../models/EmailModels";
import toastr from 'toastr'
import tokenService from "./token-service";
import { GetListAccountListItemDto, GetListProfileListItemDto } from "../../models/responses/responses";
import { GetListModel } from "../models/ResponseModels";

class AuthService {
	Register(model: UserForRegisterDto) {
		return axios.post(BASE_API_URL + "Auth/Register", model);
	}
	async Login(model: UserForLoginDto,locationlink:string) {
		return await axios.post(BASE_API_URL + "Auth/Login", model).then((r) => {
			toastr.success("Giriş işlemi Başarılı Tebrikler ... ");
			tokenService.setToken(r.data.accessToken.token);
			setTimeout(() => {
				window.location.href = "/" + locationlink; 
			}, 500);
		}).catch((e) => {
			toastr.error("Bir hata oluştu lütfen tekrar deneyin");
		});
	}
	async ForgetPassword(email: string) {
		return await axios.get(BASE_API_URL + "Auth/ForgetPassword/"+email).then((r) => {
			toastr.success("Mail Adresinize bir şifre değiştirme bağlantısı gönderdik. ");
		}).catch((e) => {
			toastr.error("Bir hata oluştu lütfen tekrar deneyin");
		});
	}
	async UpdatePassword(updateUserCommand: UpdateUserPasswordDto,locationlink:string) {
		return await axios.post(BASE_API_URL + "Auth/UpdatePassword",updateUserCommand).then((r) => {
			toastr.success("Şifreniz Başarılı Bir Şekilde Giriş Yapabilirsiniz Yönlendiriliyorsunuz. ");
			setTimeout(() => {
				window.location.href = "/" + locationlink; 
			}, 500);
		}).catch((e) => {
			toastr.error("Bir hata oluştu lütfen tekrar deneyin");
		});
	}
	VerifyEmailAuthenticator(model: VerifyEmailAuthenticatorModel) {
		return axiosInstance.get("Auth/VerifyEmailAuthenticator?ActivationKey=" + model.activationKey);
	}
	LogOut(locationlink:string){
		tokenService.deleteToken();
		tokenService.deleteMainToken();
		toastr.success("Başarılı Bir Şekilde Çıkış Yapılıyor");
		setTimeout(() => {
			window.location.href = "/" + locationlink; 
		}, 300);
	}
	async GetProfiles(){
		return await axiosInstance.get("Auth/GetProfiles").then((r:any)=>{return r.data.items[0].accountProfiles}).catch(r=>console.log(r));
	}
	async ProfileLogin(profileId:number,password:string){
		return await axiosInstance.post("Auth/ProfileLogin",{profileId:profileId,password:password}).then((r)=>{
			tokenService.setMainToken(r.data.accessToken.token);
			toastr.success("Giriş işlemi Başarılı Tebrikler ... ");
			setTimeout(() => {
				window.location.href = "/" + "mainpage"; 
			}, 500);
		}).catch((r)=>{alert("Bir Sorun Oluştu")});
	}
	ProfileLogOut(locationlink:string){
		tokenService.deleteMainToken();
		toastr.success("Başarılı Bir Şekilde Çıkış Yapılıyor");
		setTimeout(() => {
			window.location.href = "/" + locationlink; 
		}, 300);
	}
}

export default new AuthService();