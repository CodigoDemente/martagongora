import { fetchBlogImages } from '$lib/images';
import { fetchTranslation } from '$lib/api/translations';
import type { OutputData } from '../../types/OutputData';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad<OutputData> = async ({
	params
}: {
	params: { lang?: string };
}) => {
	const lang = params.lang || 'es';
	const translations = await fetchTranslation(lang, 'home');
	const images = await fetchBlogImages('home');

	return {
		images,
		translations
	};
};
