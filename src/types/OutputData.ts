import type { ImageMap } from "$lib/images";

export type OutputData = {
	images?: ImageMap;
	translations: any;
};

export interface OutputDataMenu extends OutputData {
	lang: string;
	defaultLocale: string;
	locales: string[];
}