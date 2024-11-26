import { fetchLocales, fetchTranslation } from '$lib/api/translations';
import type { PageServerLoad } from './$types';
import type { OutputDataMenu } from '../../types/OutputData';

export const load: PageServerLoad<OutputDataMenu> = async ({
	params
}: {
	params: { lang?: string };
}) => {
	const availableLocales = await fetchLocales();

	const localeNames = availableLocales.map((locale) => locale.code);
	const defaultLocale = availableLocales.find((locale) => locale.isDefault)?.code || localeNames[0];

	const lang = params.lang || defaultLocale;
	const translationsMenu = await fetchTranslation(lang, 'menu');
	const translationsFooter = await fetchTranslation(lang, 'footer');

	return {
		translationsMenu,
		translationsFooter,
		lang,
		defaultLocale: defaultLocale,
		locales: localeNames
	};
};
