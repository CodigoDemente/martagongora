import { writable } from 'svelte/store';
import type { ImageObject } from '../../types/imageObject';

export const mappedImages = (data: ImageInput) =>
	data.pictures.reduce((acc: ImageObject, picture) => {
		acc[picture.code] = {
			src: picture.image.url,
			alt: picture.alt
		};
		return acc;
	}, {});

const imageStore: ImageObject = {};

export default writable(imageStore);
