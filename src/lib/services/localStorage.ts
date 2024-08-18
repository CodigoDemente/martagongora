import { browser } from '$app/environment';

export function checkCache(key: string, duration: number): any | null {
	const cacheKey = `${key}`;
	const cachedData = browser && window.localStorage.getItem(cacheKey);

	if (cachedData) {
		const { data, timestamp } = JSON.parse(cachedData);
		const isCacheValid = Date.now() - timestamp < duration;

		if (isCacheValid) {
			return data;
		}
	}
	return null;
}

export function setCache(key: string, data: any): void {
	const cacheKey = `${key}`;
	if (browser) {
		window.localStorage.setItem(cacheKey, JSON.stringify({ data, timestamp: Date.now() }));
	}
}
