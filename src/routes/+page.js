import { fetchTranslationLanguages } from "$lib/api/translations";
import { getImagesFiles } from "$lib/services/imageStore";
import { getTranslationFiles } from "$lib/services/translationStore";

export const csr = false;
export const prerender = true;

export async function load() {
	const languages = await fetchTranslationLanguages();
	const currentLanguage = languages.find((lang) => lang.isDefault)?.code || 'es';;
	return {
		images: await getImagesFiles(),
		translations: await getTranslationFiles(currentLanguage),
	};
}