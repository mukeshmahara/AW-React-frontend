import { jwtCheck } from "./jwt-check";

export function authHeader(multipart, lang) {
	// return authorization header with jwt token
	let Token = jwtCheck();
	// if (Token) {
	//   return { Authorization: `Bearer ${Token}`, 'Content-Type': 'application/json' };
	// } else {
	//   return { 'Content-Type': 'application/json' };
	// }
	if (Token) {
		return multipart
			? {
					Authorization: `Bearer ${Token}`,
					"accept-language": lang === "ne" ? "ne-NP" : "en-US",
			  }
			: {
					Authorization: `Bearer ${Token}`,
					"Content-Type": "application/json",
					"accept-language": lang === "ne" ? "ne-NP" : "en-US",
			  };
	} else {
		return multipart
			? { "accept-language": lang === "ne" ? "ne-NP" : "en-US" }
			: {
					"Content-Type": "application/json",
					"accept-language": lang === "ne" ? "ne-NP" : "en-US",
			  };
	}
}
