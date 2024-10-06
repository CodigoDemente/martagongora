import type { TranslationSection } from '../services/translationStore';
import { getPath } from './JSONHelper';

export function getAltText(altCodeOrText: string, translations: TranslationSection) {
	const translation = getPath(translations, altCodeOrText) as string | undefined;

	return translation || altCodeOrText;
}
