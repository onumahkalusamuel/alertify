import { writable } from 'svelte/store'

const title = writable('Alert')
const message = writable('')
const type = writable('neutral')
const size = writable('small')
const showing = writable(false)

export { title, message, type, size, showing }
