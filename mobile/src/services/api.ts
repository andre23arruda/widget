const API_URL = `192.168.1.12:8000`

const baseUrl = `http://${ API_URL }/api/`


export async function postApi(route: string, formData: {}, auth='') {
    return fetch(
        baseUrl + route,
        {
            credentials: 'same-origin',
            method: 'POST',
            body: JSON.stringify(formData),
            headers: new Headers({
                'Authorization': auth,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            })
        }
    )
    .then(response => response.json())
}
