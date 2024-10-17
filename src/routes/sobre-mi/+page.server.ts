import { fetchBlogImages, type ImageMap } from '$lib/images';
import type { PageServerLoad } from './$types';

type OutputData = {
	images: ImageMap;
};

export const load: PageServerLoad<OutputData> = async () => {
	return {
		images: await fetchBlogImages('about')
	};
};
