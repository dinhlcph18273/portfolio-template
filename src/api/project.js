import instance from "./instance"


export const list = async() => {
    const url = "/project"
    return instance.get(url)
}
export const read = async(id) => {
    const url = `/project/${id}`
    return instance.get(url)
}
export const create = async(project) => {
    const url = "/project"
    return instance.post(url,project)
}
export const remove = async(id) => {
    const url = `/project/${id}`
    return instance.delete(url)
}
export const update = async(project) => {
    const url = `/project/${project.id}`
    return instance.put(url,project)
}