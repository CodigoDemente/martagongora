// we don't need any JS on this page, though we'll load

import { fetchTranslationLanguages } from "$lib/api/translations";
import { getImagesFiles } from "$lib/services/imageStore";
import { getTranslationFiles } from "$lib/services/translationStore";

// it in dev so that we get hot module replacement
export const csr = false;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;




export async function load() {
	const languages = await fetchTranslationLanguages();
    const currentLanguage = languages.find((lang) => lang.isDefault)?.code || 'es';;
    const images = await getImagesFiles();
    const text = await getTranslationFiles(currentLanguage);

	return {
        images: images.about,
        translations: text.about 
	};
}