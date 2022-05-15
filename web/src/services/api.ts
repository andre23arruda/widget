// const API_URL = import.meta.env.API_URL

const LOCAL = import.meta.env.VITE_LOCAL
const baseUrl = `http${ LOCAL ? '' : 's'}://${ import.meta.env.VITE_API_URL }/api/`

console.log(baseUrl)

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
