import { writable } from "svelte/store";

export const submission = writable({
    searchType:"time",
    input: "3.47",
    event: "333",
    type: "singles"
})