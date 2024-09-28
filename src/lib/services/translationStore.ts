import { writable } from 'svelte/store';

export type TranslationKeys = 'home' | 'about' | 'contact' | 'diary' | 'footer' | 'gallery' | 'terms';

export type TranslationSection = {
	[key: string]: string | any;
};

const translationStore: { [key in TranslationKeys]: TranslationSection } = {
	home: {},
	about: {},
	contact: {},
	diary: {},
	footer: {},
	gallery: {},
	terms: {}
};

export default writable(translationStore);
