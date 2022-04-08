import instance from "./instance"


export const list = async() => {
    const url = "/profile"
    return instance.get(url)
}
export const read = async(id) => {
    const url = `/profile/${id}`
    return instance.get(url)
}
export const create = async(profile) => {
    const url = "/profile"
    return instance.post(url,profile)
}
export const remove = async(id) => {
    const url = `/profile/${id}`
    return instance.delete(url)
}
export const update = async(profile) => {
    const url =`/profile/${profile.id}`
    return instance.put(url,profile)
}