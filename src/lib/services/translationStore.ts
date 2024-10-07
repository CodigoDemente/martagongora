import { writable } from 'svelte/store';
import { checkCache, setCache } from './localStorage';
import { fetchTranslationFiles } from '$lib/api/translations';

export type TranslationKeys = 'home' | 'about' | 'contact' | 'diary' | 'footer' | 'gallery' | 'terms';

export type TranslationSection = {
	[key: string]: string | any;
};

const oneDayCache = 24 * 60 * 60 * 1000; // One day in milliseconds

export async function getTranslationFiles(lang: string): Promise<{ [key in TranslationKeys]: TranslationSection }> {
	const cachedData = checkCache(lang, oneDayCache);
	if (cachedData) {
		return cachedData;
	}
	const data = await fetchTranslationFiles(lang);
	setCache(lang, data);
	return data;
}
