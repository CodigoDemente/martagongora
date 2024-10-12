import { loadTranslations, translations, getLang } from '$lib/translations';
import type { Translations } from '@sveltekit-i18n/base';
import type { LayoutServerLoad } from './$types';

type OutputData = {
	i18n: {
		locale: string;
		route: string;
	};
	translations: Translations.SerializedTranslations;
};

export const load: LayoutServerLoad<OutputData> = async (event) => {
	const { pathname } = event.url;

	const locale = getLang(event);

	await loadTranslations(locale, pathname); // keep this just before the `return`

	return {
		i18n: { locale, route: pathname },
		translations: translations.get() // `translations` on server contain all translations loaded by different clients
	};
};
