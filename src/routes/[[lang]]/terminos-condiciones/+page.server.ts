import { fetchBlogImages, type ImageMap } from '$lib/images';
import { fetchTranslation } from '$lib/api/translations';
import type { PageServerLoad } from '../$types';
import type { OutputData } from '../../../types/OutputData';

export const load: PageServerLoad<OutputData> = async ({ params }: { params: { lang?: string } }) => {
	
	const lang = params.lang || 'es';
	const translations = await fetchTranslation(lang, 'terms');
	const images = await fetchBlogImages('terms');

	return {
		images,
		translations
	};
	
}