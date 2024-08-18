import { writable } from 'svelte/store';

type ImageObject = {
	[key: string]: string;
};
export const mappedImages = (data: ImageInput) =>
	data.pictures.reduce((acc: { [key: string]: string }, picture) => {
		acc[picture.code] = picture.image.url;
		return acc;
	}, {});

const imageStore: ImageObject = {};

export default writable(imageStore);
