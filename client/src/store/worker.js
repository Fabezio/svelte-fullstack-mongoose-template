import {writable} from 'svelte/store'

export const worker = writable({})
export const workers = writable([])
export const nom = writable("")
export const prenom = writable("")
export const phone = writable("")
export const email = writable("")