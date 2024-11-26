export type Locale = {
	code: string;
	isDefault: boolean;
};

export type ApiLocale = {
	languages: Array<{
		code: string;
		isDefault: boolean;
	}>;
};
