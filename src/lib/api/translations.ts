import { PUBLIC_BACKEND_URL } from '$env/static/public';



export async function fetchTranslation(locale: string, key: string): Promise<string> {
	try {
		const res = await fetch(`${PUBLIC_BACKEND_URL}/translation/${locale}`);
		const data = await res.json();
		return data[key];
	}
	catch (err) {
		console.error(err);
		throw err;
	}
}
