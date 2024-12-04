import { PUBLIC_BACKEND_URL } from '$env/static/public';
import { getPath } from '../JSONHelper';
import type { ApiLocale, Locale } from './types/translations';

export async function fetchTranslation(locale: string, key: string): Promise<string> {
	try {
		const res = await fetch(`${PUBLIC_BACKEND_URL}/translation/${locale}`);
		const data = await res.json();
		return data[key];
	} catch (err) {
		console.error(err);
		throw err;
	}
}

export async function fetchLocales(): Promise<Locale[]> {
	console.log('Fetching available locales');

	try {
		const res = await fetch(`${PUBLIC_BACKEND_URL}/api/graphql`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify({
				query:
					'query Languages($where: LanguageWhereInput!) { languages(where: $where) { code isDefault }}',
				variables: {
					where: {
						enabled: {
							equals: true
						}
					}
				}
			})
		});

		const response = await res.json();

		const apiLocales: ApiLocale = response.data;

		const locales: Locale[] = apiLocales.languages.map((lang) => ({
			code: lang.code,
			isDefault: lang.isDefault
		}));

		return locales;
	} catch (err) {
		console.error(err);
		throw err;
	}
}

export function tImage(alt: string, translations: Record<string, any>): string {
	const text = getPath(translations, alt) as string;
	return text || alt;
}
