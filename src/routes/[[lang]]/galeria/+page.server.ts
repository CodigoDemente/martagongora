export const csr = true;

import { fetchTranslation } from '$lib/api/translations';
import type { PageServerLoad } from '../$types';
import type { OutputData } from '../../../types/OutputData';

export const load: PageServerLoad<OutputData> = async ({ params }: { params: { lang?: string } }) => {
	
	const lang = params.lang || 'es';
	const translations = await fetchTranslation(lang, 'gallery');

    return {
        images: {},
		translations
	};
	
}