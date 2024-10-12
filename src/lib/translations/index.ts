import { dev } from '$app/environment';
import { PUBLIC_BACKEND_URL } from '$env/static/public';
import type { Config } from 'sveltekit-i18n';
import I18n from 'sveltekit-i18n';

export const defaultLocale = 'es';

export const config: Config = {
	log: {
		level: dev ? 'debug' : 'error'
	},
	preprocess: 'none',
	translations: {
		en: {
			en: 'English',
			es: 'Spanish'
		},
		es: {
			en: 'Inglés',
			es: 'Español'
		}
	},
	loaders: [
		// English
		{
			locale: 'en',
			key: 'home',
			routes: ['/'],
			loader: async () =>
				fetch(`${PUBLIC_BACKEND_URL}/translation/en`)
					.then((res) => res.json())
					.then((data) => data['home'])
		},
		{
			locale: 'en',
			key: 'about',
			routes: ['/sobre-mi'],
			loader: async () =>
				fetch(`${PUBLIC_BACKEND_URL}/translation/en`)
					.then((res) => res.json())
					.then((data) => data['about'])
		},
		{
			locale: 'en',
			key: 'contact',
			routes: ['/contacto'],
			loader: async () =>
				fetch(`${PUBLIC_BACKEND_URL}/translation/en`)
					.then((res) => res.json())
					.then((data) => data['contact'])
		},
		{
			locale: 'en',
			key: 'gallery',
			routes: ['/galeria'],
			loader: async () =>
				fetch(`${PUBLIC_BACKEND_URL}/translation/en`)
					.then((res) => res.json())
					.then((data) => data['gallery'])
		},
		{
			locale: 'en',
			key: 'terms',
			routes: ['/terminos-condiciones'],
			loader: async () =>
				fetch(`${PUBLIC_BACKEND_URL}/translation/en`)
					.then((res) => res.json())
					.then((data) => data['terms'])
		},
		{
			locale: 'en',
			key: 'footer',
			loader: async () =>
				fetch(`${PUBLIC_BACKEND_URL}/translation/en`)
					.then((res) => res.json())
					.then((data) => data['footer'])
		},
		{
			locale: 'en',
			key: 'menu',
			loader: async () =>
				fetch(`${PUBLIC_BACKEND_URL}/translation/en`)
					.then((res) => res.json())
					.then((data) => data['menu'])
		},
		// Spanish
		{
			locale: 'es',
			key: 'home',
			routes: ['/'],
			loader: async () =>
				fetch(`${PUBLIC_BACKEND_URL}/translation/es`)
					.then((res) => res.json())
					.then((data) => data['home'])
		},
		{
			locale: 'es',
			key: 'about',
			routes: ['/sobre-mi'],
			loader: async () =>
				fetch(`${PUBLIC_BACKEND_URL}/translation/es`)
					.then((res) => res.json())
					.then((data) => data['about'])
		},
		{
			locale: 'es',
			key: 'contact',
			routes: ['/contacto'],
			loader: async () =>
				fetch(`${PUBLIC_BACKEND_URL}/translation/es`)
					.then((res) => res.json())
					.then((data) => data['contact'])
		},
		{
			locale: 'es',
			key: 'gallery',
			routes: ['/galeria'],
			loader: async () =>
				fetch(`${PUBLIC_BACKEND_URL}/translation/es`)
					.then((res) => res.json())
					.then((data) => data['gallery'])
		},
		{
			locale: 'es',
			key: 'terms',
			routes: ['/terminos-condiciones'],
			loader: async () =>
				fetch(`${PUBLIC_BACKEND_URL}/translation/es`)
					.then((res) => res.json())
					.then((data) => data['terms'])
		},
		{
			locale: 'es',
			key: 'footer',
			loader: async () =>
				fetch(`${PUBLIC_BACKEND_URL}/translation/es`)
					.then((res) => res.json())
					.then((data) => data['footer'])
		},
		{
			locale: 'es',
			key: 'menu',
			loader: async () =>
				fetch(`${PUBLIC_BACKEND_URL}/translation/es`)
					.then((res) => res.json())
					.then((data) => data['menu'])
		}
	]
};

export const {
	t,
	loading,
	locales,
	locale,
	translations,
	loadTranslations,
	addTranslations,
	setLocale,
	setRoute
} = new I18n(config);

loading.subscribe(($loading) => $loading && console.log('Loading translations...'));
