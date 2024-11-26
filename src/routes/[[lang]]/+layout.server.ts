
import { fetchTranslation } from '$lib/api/translations';
import type { PageServerLoad } from './$types';
import type { OutputDataMenu } from '../../types/OutputData';


export const load: PageServerLoad<OutputDataMenu> = async ({ params }: { params: { lang?: string } }) => {
	const lang = params.lang || 'es';
        const translationsMenu = await fetchTranslation(lang, 'menu');
        const translationsFooter = await fetchTranslation(lang, 'footer');

	return {
                translationsMenu,
                translationsFooter,
                lang,
                defaultLocale: 'es',
                locales: ['es', 'en']
	};
};