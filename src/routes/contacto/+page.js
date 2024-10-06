import { fetchTranslationLanguages } from "$lib/api/translations";
import { getImagesFiles } from "$lib/services/imageStore";
import { getTranslationFiles } from "$lib/services/translationStore";

export const csr = false;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;



export async function load() {
	const languages = await fetchTranslationLanguages();
    const currentLanguage = languages.find((lang) => lang.isDefault)?.code || 'es';;
    const text = await getTranslationFiles(currentLanguage);
    const images = await getImagesFiles();

	return {
        translations: text.contact,
        images: images.contact
	};
}