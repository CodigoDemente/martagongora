import { writable } from 'svelte/store';

export type TranslationKeys = 'about' | 'contact' | 'diary' | 'footer' | 'gallery';


export type TranslationSection = {
  [key: string]: string | any ;
};
    
const translationStore: { [key in TranslationKeys]: TranslationSection } = {
  about: {},
  contact: {},
  diary: {},
  footer: {},
  gallery: {}
};

export default writable(translationStore);