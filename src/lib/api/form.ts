export async function postContactInfo(form: {[key: string]: string}): Promise<any> {
    try {
        const res = await fetch('https://marta.cloud.alesanchez.es/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(form)
        });
      
        return res
    } catch (err) {
        console.error(err);
        throw err;
    }
}