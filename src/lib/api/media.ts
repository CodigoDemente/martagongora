export async function fetchInstagramMedia(id?: string): Promise<{ data: {media_url: string, media_type: string}[], next: string }> {
    let url = 'https://marta.cloud.alesanchez.es/instagram/media';
    if (id) {
        url += `?next=${id}`;
    }

    try {
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });

        const { data, next } = await res.json();
        if (Array.isArray(data)) {
            return { data, next };
        } else {
            throw new Error('Failed to fetch Instagram media');
        }
    } catch (err) {
        console.error(err);
        throw err;
    }
}