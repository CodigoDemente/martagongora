
import { fetchTranslation } from '$lib/translations';
import type { PageServerLoad } from './$types';
import type { OutputData } from '../../types/OutputData';


export const load: PageServerLoad<OutputData> = async ({ params }: { params: { lang?: string } }) => {
	const lang = params.lang || 'es';
        const translations = await fetchTranslation(lang, 'menu');

	return {
        translations,
        lang,
        defaultLocale: 'es',
        locales: ['es', 'en']
	};
};