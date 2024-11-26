import { fetchBlogImages, type ImageMap } from '$lib/images';
import { fetchTranslation } from '$lib/translations';
import type { PageServerLoad } from '../$types';
import type { OutputData } from '../../../types/OutputData';

export const load: PageServerLoad<OutputData> = async ({ params }: { params: { lang?: string } }) => {

	const lang = params.lang || 'es';
	const translations = await fetchTranslation(lang, 'about');
	const images = await fetchBlogImages('about');

	return {
		images,
		translations
	};
};
