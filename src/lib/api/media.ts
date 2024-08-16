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

export async function  fetchBlogImages(): Promise<{ data: {url: string}[] }> {
    try {
        const res = await fetch('https://marta.cloud.alesanchez.es/api/graphql', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: `query Pictures { pictures { code image { url filesize } } }`
            })
        });

        const { data } = await res.json();
        return data;
    } catch (err) {
        console.error(err);
        throw err;
    }
}
// PREGUNTAS ALE 
// se puede hacer llamada api normal ? 
// traducciones, eliminar diary y pasarlo a gallery ?
// para la home, va a subir las imagenes al cms ? 
// submit form endpoint ?
// repasar project tareas