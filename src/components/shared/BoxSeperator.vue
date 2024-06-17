<template>
    <div :class="`flex justify-between ${colorOne}`">
        <span>|</span>
        <span :class="colorTwo">----------------------------------</span>
        <span>|</span>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    colorOne?: string | undefined,
    colorTwo?: string | undefined,
}>();

</script>