import { browser } from "$app/environment";
import type { Language } from "../../types/language";

export async function fetchTranslationLanguages(): Promise<Language[]> {
    const url = 'https://marta.cloud.alesanchez.es/language';
    
    try {
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });

        const data = await res.json();
        if (data) {
            return data;
        } else {
            throw new Error('Failed to fetch translation languages');
        }
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export async function fetchTranslationFiles(lang: string): Promise<any> {
    const url = `https://marta.cloud.alesanchez.es/translation/${lang}`;

    try {
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });

        const data = await res.json();
        if (data) {
            return data;
        } else {
            throw new Error('Failed to fetch translation files');
        }
    } catch (err) {
        console.error(err);
        throw err;
    }
}