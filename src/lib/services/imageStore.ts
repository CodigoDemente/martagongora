import { fetchBlogImages } from "$lib/api/media";
import type { ImageObject } from "../../types/imageObject";
import { checkCache, setCache } from "./localStorage";

const fiftyMinCache = 50 * 60 * 1000; // 50 minutes in milliseconds

const mappedImages = (data: ImageInput) =>
	data.pictures.reduce((acc: ImageObject, picture) => {
		acc[picture.code] = {
			src: picture.image.url,
			alt: picture.alt
		};
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
