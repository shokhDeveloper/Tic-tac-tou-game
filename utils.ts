const getItem = (key:string) => window.localStorage.getItem(key)
const setItem = (key:string, value:object|string) => window.localStorage.setItem(key,  typeof value === "object" ? JSON.stringify(value): value )