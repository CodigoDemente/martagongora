import { fetchLocales, fetchTranslation } from '$lib/api/translations';
import type { PageServerLoad } from './$types';
import type { OutputDataMenu } from '../../types/OutputData';

export const load: PageServerLoad<OutputDataMenu> = async ({
	params
}: {
	params: { lang?: string };
}) => {
	const availableLocales = await fetchLocales();

	console.log('availableLocales', JSON.stringify(availableLocales));

	const localeNames = availableLocales.map((locale) => locale.code);
	const defaultLocale = availableLocales.find((locale) => locale.isDefault)?.code || localeNames[0];

	console.log('Default locale', defaultLocale);

	console.log('Params reeceived', JSON.stringify(params));

	const lang = params.lang || defaultLocale;

	console.log('Lang', lang);

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
