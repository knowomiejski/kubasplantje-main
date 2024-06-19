<template>
    <div>
        <div v-for="(project, i) of projects">
            <ProjectComponent :key="project.id" :project="project" :is-last="projects.length === i + 1"/>
        </div>
    </div>
</template>
<script setup lang="ts">
    import ProjectComponent from './ProjectComponent.vue'
    import type IProject from '@/models/project';
    import { useProjectsStore } from '@/stores/projects';
    import type { Ref } from 'vue';
    import { ref, onMounted } from 'vue';

    const projectsStore = useProjectsStore();
    const projects: Ref<IProject[]> = ref([] as IProject[]);

    onMounted(async () => {
        projects.value = await projectsStore.fetchProjects()
    })
</script>