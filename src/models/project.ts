export default interface IProject {
    id?: number,
    name: string,
    description: string,
    client: string,
    link?: string,
    usedTechIds: number[]
}