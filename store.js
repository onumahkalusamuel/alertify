import { writable } from 'svelte/store'

const title = writable('Alert')
const message = writable('')
const type = writable('neutral')
const showing = writable(false)

export { title, message, type, showing }
