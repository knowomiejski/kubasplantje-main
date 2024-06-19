<template>
    <div class="my-1">
        <div>
            <div class="text-center">+----------------------------------+</div>
            <div class="flex justify-between">
                <div class="">|</div>
                <div class="w-full">
                    <span class="text-primary ml-1">-&nbsp;</span><span class="text-white ml-1">name:</span><span class="text-white ml-1">{{ tech.name }}</span>
                </div>
                <div class="">|</div>
            </div>
            <div class="flex justify-between">
                <div class="">|</div>
                <div class="w-full">
                    <span class="text-white ml-1">+&nbsp;</span><span class="text-white ml-1">category:</span><span class="text-white ml-1">{{ tech.category }}</span>
                </div>
                <div class="">|</div>
            </div>
            <div class="flex justify-between">
                <div class="">|</div>
                <div class="w-full">
                    <span class="text-secondary ml-1">*&nbsp;</span><span class="text-white ml-1">skillRating:</span><span class="text-white ml-1">{{ tech.skillRating }}</span>
                </div>
                <div class="">|</div>
            </div>
            <div class="flex justify-between">
                <div class="">|</div>
                <div class="w-full">
                    <span class="text-primary ml-1">>&nbsp;</span><span class="text-white ml-1">used in projects:</span>
                </div>
                <div class="">|</div>
            </div>
            <div class="flex justify-between" v-for="project of projectsOfTech">
                <div class="">|</div>
                <div class="w-full">
                    <div class="text-white ml-10"><span class="text-primary ml-1">-&nbsp;</span>{{ project.name }}</div>
                </div>
                <div class="">|</div>
            </div>
            <div v-if="isLast" class="text-center">+----------------------------------+</div>
        </div>
    </div>
</template>
<script setup lang="ts">
import type IProject from '@/models/project';
import type ITech from '@/models/tech';
import { useProjectsStore } from '@/stores/projects';
import type { Ref } from 'vue';
import { onBeforeMount } from 'vue';
import { ref } from 'vue';

    const props = defineProps<{
        tech: ITech,
        isLast: boolean,
    }>();

    const projectsStore = useProjectsStore();
    const projectsOfTech: Ref<IProject[]> = ref([]);
    onBeforeMount(() => {
        projectsOfTech.value = projectsStore.fetchProjectsByIds(props.tech.usedInProjects)
    })
</script>