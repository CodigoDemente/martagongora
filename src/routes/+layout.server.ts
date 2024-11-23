import { loadTranslations, getLang } from '$lib/translations';
import type { LayoutServerLoad } from './$types';

type OutputData = {
	i18n: {
		locale: string;
		route: string;
	};
};

export const load: LayoutServerLoad<OutputData> = async (event) => {
	const { pathname } = event.url;

	const locale = getLang(event);

	await loadTranslations(locale, pathname); // keep this just before the `return`

	return {
		i18n: { locale, route: pathname }
	};
};
