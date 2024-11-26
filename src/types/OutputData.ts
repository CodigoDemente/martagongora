import type { ImageMap } from "$lib/images";

export type OutputData = {
	images: ImageMap;
	translations: any;
};

export interface OutputDataMenu {
	translationsMenu: any;
	translationsFooter: any;
	lang: string;
	defaultLocale: string;
	locales: string[];
}