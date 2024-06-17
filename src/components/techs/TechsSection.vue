<template>
    <div>
        <div v-for="(tech, i) of techs">
            <TechComponent :key="tech.id" :tech="tech" :is-last="techs.length === i + 1"/>
        </div>
    </div>
</template>
<script setup lang="ts">
    import TechComponent from './TechComponent.vue'
    import type ITech from '@/models/tech';
    import { useTechsStore } from '@/stores/techs';
    import type { Ref } from 'vue';
    import { ref, onMounted } from 'vue';

    const techsStore = useTechsStore();
    let techs: Ref<ITech[]> = ref([] as ITech[]);

    onMounted(async () => {
        techs.value = await techsStore.fetchTechs();
    })
</script>