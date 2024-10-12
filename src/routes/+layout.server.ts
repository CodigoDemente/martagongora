import { locales, loadTranslations, translations, defaultLocale } from '$lib/translations';
import type { Translations } from '@sveltekit-i18n/base';
import type { LayoutServerLoad } from './$types';

type OutputData = {
	i18n: {
		locale: string;
		route: string;
	};
	translations: Translations.SerializedTranslations;
};

export const load: LayoutServerLoad<OutputData> = async ({ url, cookies, request }) => {
	const { pathname } = url;

	// Try to get the locale from cookie
	let locale = (cookies.get('lang') || '').toLowerCase();

	// Get user preferred locale
	if (!locale) {
		locale =
			`${`${request.headers.get('accept-language')}`.match(/[a-zA-Z]+?(?=-|_|,|;)/)}`.toLowerCase();
	}

	// Get defined locales
	const supportedLocales = locales.get().map((l) => l.toLowerCase());

	// Use default locale if current locale is not supported
	if (!supportedLocales.includes(locale)) {
		locale = defaultLocale;
	}

	await loadTranslations(locale, pathname); // keep this just before the `return`

	return {
		i18n: { locale, route: pathname },
		translations: translations.get() // `translations` on server contain all translations loaded by different clients
	};
};
