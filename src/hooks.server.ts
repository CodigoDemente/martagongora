import type { Handle } from '@sveltejs/kit';
import { getLang } from './lib/translations';

export const handle = (({ event, resolve }) => {
	return resolve(event, {
		transformPageChunk: ({ html }) => {
			return html.replace('%lang%', getLang(event));
		}
	});
}) satisfies Handle;
