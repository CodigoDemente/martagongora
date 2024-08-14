import { browser } from "$app/environment";

const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds

export function checkCache(lang: string): any | null {
    const cacheKey = `translation_${lang}`;
    const cachedData = browser && window.localStorage.getItem(cacheKey);

    if (cachedData) {
        const { data, timestamp } = JSON.parse(cachedData);
        const isCacheValid = (Date.now() - timestamp) < oneDay;

        if (isCacheValid) {
            return data;
        }
    }
    return null;
}

export function setCache(lang: string, data: any): void {
    const cacheKey = `translation_${lang}`;
    if (browser) {
        window.localStorage.setItem(cacheKey, JSON.stringify({ data, timestamp: Date.now() }));
    }
}