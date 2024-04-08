class TokenService {
	getToken(): string | null {
		return document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
		return localStorage.getItem("token");
	}

	hasToken(): boolean {
		const cookieToken =document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1")!=null||"";
		const hasCookieToken = cookieToken !== "";
		return hasCookieToken;
		return localStorage.getItem("token") != null;
		
	}
	deleteToken(){
		document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
		
		// localStorage.clear();
	}
}

export default new TokenService(); 