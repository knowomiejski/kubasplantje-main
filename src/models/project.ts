import type ITech from './tech.ts'

export default interface IProject {
    id?: number,
    name: string,
    description: string,
    client: string,
    link?: string,
    usedTechs?: ITech[]
    usedTechIds?: number[]
}