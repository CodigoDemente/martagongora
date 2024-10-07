
export const csr = true;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;


import { fetchTranslationLanguages } from "$lib/api/translations";
import { getTranslationFiles } from "$lib/services/translationStore";


export async function load() {
	const languages = await fetchTranslationLanguages();
	const currentLanguage = languages.find((lang) => lang.isDefault)?.code || 'es';;
	const text = await getTranslationFiles(currentLanguage);
    return {
		translations: text.gallery
	};
}