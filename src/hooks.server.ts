import type { Handle } from '@sveltejs/kit';

export const handle = (({ event, resolve }) => {
	const lang = event.params.locale || 'es';

	return resolve(event, {
		transformPageChunk: ({ html }) => {
			return html.replace('%lang%', lang);
		}
	});
}) satisfies Handle;
