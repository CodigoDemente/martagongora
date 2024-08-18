import type { Language } from '../../types/language';
import { PUBLIC_BACKEND_URL } from '$env/static/public';

export async function fetchTranslationLanguages(): Promise<Language[]> {
	const url = `${PUBLIC_BACKEND_URL}/language`;

	try {
		const res = await fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			}
		});

		const data = await res.json();
		if (data) {
			return data;
		} else {
			throw new Error('Failed to fetch translation languages');
		}
	} catch (err) {
		console.error(err);
		throw err;
	}
}

export async function fetchTranslationFiles(lang: string): Promise<any> {
	const url = `${PUBLIC_BACKEND_URL}/translation/${lang}`;

	try {
		const res = await fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			}
		});

		const data = await res.json();
		if (data) {
			return data;
		} else {
			throw new Error('Failed to fetch translation files');
		}
	} catch (err) {
		console.error(err);
		throw err;
	}
}
