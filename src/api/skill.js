import instance from "./instance"


export const list = async() => {
    const url = "/skill"
    return instance.get(url)
}