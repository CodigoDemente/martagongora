import { fetchBlogImages } from '$lib/api/media';
import { writable } from 'svelte/store';
import { checkCache, setCache } from './localStorage';

type ImageObject = {
	[key: string]: string;
};

const fiftyMinCache = 50 * 60 * 1000; // 3,000,000 milliseconds

const mappedImages = (data: ImageInput) =>
	data.pictures.reduce((acc: { [key: string]: string }, picture) => {
		acc[picture.code] = picture.image.url;
		return acc;
	}, {});

export async function getImagesFiles() {
		const cachedData = checkCache('images', fiftyMinCache);
		if (cachedData) {
			return cachedData
		}
		const data = await fetchBlogImages();
		const mappedData = mappedImages(data);
		setCache('images', mappedData);

		return mappedData
}
