import { BACKEND_URL } from '$env/static/private';

type Image = {
	src: string;
	alt: string;
};

type ImageInput = {
	pictures: {
		code: string;
		alt: string;
		image: {
			fileSize: number;
			url: string;
		};
	}[];
};

export type ImageMap = {
	[key: string]: Image;
};

export async function fetchBlogImages(route: string): Promise<ImageMap> {
	console.log('Fetching images for route', route);

	try {
		const res = await fetch(`${BACKEND_URL}/api/graphql`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify({
				query: `query Pictures { pictures(where: { code: { startsWith: "${route}" } }) { code alt image { url filesize } } }`
			})
		});

		const response = await res.json();

		if (response.errors) {
			throw new Error(response.errors);
		}

		const imageData: ImageInput = response.data;

		const mappedData = imageData.pictures.reduce((acc: ImageMap, picture) => {
			const key = picture.code.split('.')[1] || picture.code; // If image key is not in format 'home.main' but in format 'home', use whole code as key

			acc[key] = {
				src: picture.image.url,
				alt: picture.alt
			};
			return acc;
		}, {});

		return mappedData;
	} catch (err) {
		console.error(err);
		throw err;
	}
}
