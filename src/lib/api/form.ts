import { PUBLIC_BACKEND_URL } from '$env/static/public';

export async function postContactInfo(form: { [key: string]: string }): Promise<any> {
	try {
		const res = await fetch(`${PUBLIC_BACKEND_URL}/contact`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify(form)
		});

		return res;
	} catch (err) {
		console.error(err);
		throw err;
	}
}
