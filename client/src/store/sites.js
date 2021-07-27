import {writable} from 'svelte/store'

export const nom = writable("")
export const adresse = writable("")
export const telephone = writable("")
export const email = writable("")
export const site = writable({})
export const sites = writable([])
// export const worker = writable({})
// export const workers = writable([])
// export const nom = writable("")
// export const prenom = writable("")

// export const codePostal = writable("")
// export const city = writable({})
// export const cities = writable([])
// export const phone = writable("")
// export const email = writable("")