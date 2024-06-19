<template>
    <div class="my-1">
        <div>
            <div class="text-center">+----------------------------------+</div>
            <div class="flex justify-between">
                    <div class="w-full">
                        <span class="text-primary ml-1">-&nbsp;</span><span class="text-white ml-1">name:</span><span class="text-white ml-1">{{ project.name }}</span>
                    </div>
            </div>
            <div class="flex justify-between">
                <div class="">|</div>
                <div class="w-full">
                    <span class="text-white ml-1">+&nbsp;</span><span class="text-white ml-1">description:</span><span class="text-white ml-1">{{ project.description }}</span>
                </div>
                <div class="">|</div>
            </div>
            <div class="flex justify-between content-text" :ref="(el) => clientRef = el">
                <div class="w-full ">
                    <span class="text-secondary ml-1">*&nbsp;</span><span class="text-white ml-1">client:</span><span class="text-white ml-1 ">{{ project.client }}</span>
                </div>
            </div>
            <div class="flex justify-between">
                <div class="">|</div>
                <div class="w-full">
                    <span class="text-primary ml-1">>&nbsp;</span><span class="text-white ml-1">link:</span><span class="text-primary ml-1">{{ project.link }}</span>
                </div>
                <div class="">|</div>
            </div>
            <div class="flex justify-between">
                <div class="">|</div>
                <div class="w-full">
                    <span class="text-primary ml-1">=&nbsp;</span><span class="text-white ml-1">used in projects:</span>
                </div>
                <div class="">|</div>
            </div>
            <div class="flex justify-between" v-for="tech of techsOfProject">
                <div class="">|</div>
                <div class="w-full">
                    <div class="text-white ml-10"><span class="text-primary ml-1">-&nbsp;</span>{{ tech.name }}</div>
                </div>
                <div class="">|</div>
            </div>
            <div v-if="isLast" class="text-center">+----------------------------------+</div>
            </div>
        </div>
</template>
<script setup lang="ts">
import type ITech from '@/models/tech';
import type IProject from '@/models/project';
import { useTechsStore } from '@/stores/techs';
import type { Ref } from 'vue';
import { onBeforeMount } from 'vue';
import { ref } from 'vue';
import { onMounted } from 'vue';

    const props = defineProps<{
        project: IProject,
        isLast: boolean,
    }>();

    const techsStore = useTechsStore();
    const techsOfProject: Ref<ITech[]> = ref([]);
    const clientRef: Ref<any | null> = ref(null);
    onBeforeMount(() => {
        techsOfProject.value = techsStore.fetchTechsByIds(props.project.usedTechIds)
    })

    onMounted(() => {
        let remainingString: string = clientRef.value.textContent;
        let splitValue = [];
        for (let i = 0; i < 34; i++) {
            if (i === 33) {
                let slicedString = remainingString.slice(0, 34);
                splitValue.push(slicedString);

                remainingString = remainingString.slice(34);
                if (remainingString.length >= 34) {
                    i = 0;
                } else if (remainingString.length > 0) {
                    splitValue.push(remainingString);
                } else {
                    break;
                }
            }
        }
        let newSting = '';
        for (let value in splitValue) {
            newSting = newSting + '|' + splitValue[value] + '|'
        }
        console.log('splitValue', splitValue)
        clientRef.value.textContent = newSting;
    })

</script>
<style lang="scss">
.content-text {
    white-space: pre-line;
}
</style>