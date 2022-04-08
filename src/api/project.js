import instance from "./instance"


export const list = async() => {
    const url = "/project"
    return instance.get(url)
}