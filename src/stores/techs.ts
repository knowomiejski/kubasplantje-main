import { defineStore } from "pinia";
import type ITech from "@/models/tech";
import { TechCategories } from "@/models/enums/techCategories";

export const useTechsStore = defineStore("techs", () => {
  const techs: ITech[] = [
        {
          id: 1,
          name: 'vue',
          category: TechCategories.FRAMEWORK,
          skillRating: 8.5,
          usedInProjects: [1, 2, 6, 7]
        },
        {
          id: 2,
          name: 'angular 7',
          category: TechCategories.FRAMEWORK,
          skillRating: 6,
          usedInProjects: [3, 4]
        },
        {
          id: 3,
          name: '.net core',
          category: TechCategories.FRAMEWORK,
          skillRating: 6.5,
          usedInProjects: [6, 7]
        },
        {
          id: 4,
          name: 'expressjs',
          category: TechCategories.FRAMEWORK,
          skillRating: 7.5,
          usedInProjects: [1, 2]
        },
        {
          id: 5,
          name: 'quasar',
          category: TechCategories.FRAMEWORK,
          skillRating: 7,
          usedInProjects: [1]
        },
        {
          id: 6,
          name: 'javafx',
          category: TechCategories.FRAMEWORK,
          skillRating: 7,
          usedInProjects: [5]
        },
        {
          id: 7,
          name: 'java dropwizard',
          category: TechCategories.FRAMEWORK,
          skillRating: 7,
          usedInProjects: [3, 5]
        },
        {
          id: 8,
          name: 'mongodb',
          category: TechCategories.DATABASE,
          skillRating: 7.5,
          usedInProjects: [1, 2]
        },
        {
          id: 9,
          name: 'mariadb',
          category: TechCategories.DATABASE,
          skillRating: 7,
          usedInProjects: [4, 5]
        },
        {
          id: 10,
          name: 'adobe xd',
          category: TechCategories.DESIGN,
          skillRating: 8,
          usedInProjects: [1, 2]
        },
        {
          id: 11,
          name: 'figma',
          category: TechCategories.DESIGN,
          skillRating: 7.5,
          usedInProjects: []
        },
        {
          id: 12,
          name: 'axure',
          category: TechCategories.DESIGN,
          skillRating: 7.5,
          usedInProjects: [6, 7]
        },
        {
          id: 13,
          name: 'javascript',
          category: TechCategories.LANGUAGE,
          skillRating: 8,
          usedInProjects: [1, 2, 3, 4, 6, 7]
        },
        {
          id: 14,
          name: 'java',
          category: TechCategories.LANGUAGE,
          skillRating: 7.5,
          usedInProjects: [3, 4, 5]
        },
        {
          id: 15,
          name: 'c#',
          category: TechCategories.LANGUAGE,
          skillRating: 7,
          usedInProjects: [6, 7]
        },
        {
          id: 16,
          name: 'om api',
          category: TechCategories.OTHER,
          usedInProjects: [3]
        },
        {
          id: 17,
          name: 'spring',
          category: TechCategories.FRAMEWORK,
          skillRating: 6.5,
          usedInProjects: []
        },
        {
          id: 18,
          name: 'sql srver',
          category: TechCategories.FRAMEWORK,
          skillRating: 7,
          usedInProjects: [6, 7]
        },
        {
          id: 19,
          name: 'mollie',
          category: TechCategories.OTHER,
          usedInProjects: [2]
        },
      ];

      const fetchTechs = async () => {
        return techs;
      }

    const fetchTechsByIds = (techIds: number[]) => {
      const filtered = techs.filter((x: ITech) => {
          if (x.id !== undefined) {
              return techIds.includes(x.id);
          }
      })
      return filtered;
  }

    return {fetchTechs, fetchTechsByIds}
});