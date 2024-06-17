import { ref, computed, type Ref } from "vue";
import { defineStore } from "pinia";
import type ITech from "@/models/tech";
import type IProject from "@/models/project";

export const useProjectsStore = defineStore("projects", () => {
    const projects: Ref<IProject[]> =
        ref([
                {
                    id: 1,
                    name: 'swom corona pwa',
                    description: 'swom corona pwa',
                    client: 'studeren en werken op maat',
                    link: 'https://swomapp.nl',
                    usedTechIds: [1, 4, 5, 8, 10, 13]
                },
                {
                    id: 2,
                    name: 'switch-a-dish',
                    description: 'switch-a-dish',
                    client: 'crunch time',
                    usedTechIds: [1, 4, 8, 10, 13, 19]
                },
                {
                    id: 3,
                    name: 'avg stats app',
                    description: 'avg stats app',
                    client: 'openbaar ministerie',
                    usedTechIds: [2, 7, 13, 14, 16]
                },
                {
                    id: 4,
                    name: 'dubio (web)',
                    client: 'garage2020',
                    description: 'avg stats app',
                    usedTechIds: [2, 9, 13, 14]
                },
                {
                    id: 5,
                    name: 'dubio (desktop)',
                    client: 'garage2020',
                    description: 'avg stats app',
                    usedTechIds: [6, 7, 9, 14]
                },
                {
                    id: 6,
                    name: 'silicon framework',
                    client: 'fenêtre',
                    description: 'silicon framework',
                    usedTechIds: [1, 3, 12, 18, 13, 15]
                },
                {
                    id: 7,
                    name: 'silicon generator',
                    client: 'fenêtre',
                    description: 'silicon generator',
                    usedTechIds: [1, 3, 12, 18, 13, 15]
                },
            ]);

        const fetchProjects = () => {
            return projects
        }

        const fetchProjectsByIds = (projectIds: number[]) => {
            const filtered = projects.value.filter((x: IProject) => {
                if (x.id !== undefined) {
                    return projectIds.includes(x.id);
                }
            })
            return filtered
        }

        return {fetchProjects, fetchProjectsByIds}
    });