class TokenService {
	getToken(): string | null {
		return document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
		return localStorage.getItem("token");
	}

	hasToken(): boolean {
		const cookieToken =document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1")!=null||"";
		const hasCookieToken = cookieToken !== "";
		return hasCookieToken
		return localStorage.getItem("token") != null;
	}
}

export default new TokenService();