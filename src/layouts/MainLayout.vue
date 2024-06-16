<template>
    <div>
        <MainLayoutNavigation></MainLayoutNavigation>
        <div>
            <RouterView v-slot="{Component, route}">
                <Transition name="fade" mode="out-in">
                    <Component :is="Component" :key="route.path"/>
                </Transition>
            </RouterView>
        </div>
    </div>
</template>
<script setup lang="ts">
import MainLayoutNavigation from '@/components/navigation/MainLayoutNavigation.vue';
</script>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.35s ease;
}

.fade-enter-from,
.fade-leave-active {
    opacity: 0;
}
</style>