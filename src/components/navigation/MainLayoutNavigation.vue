<template>
    <div class="fixed nav-container">
        <div class="nav">
            <div>
                ------------------------------------
            </div>
            <div class="page-title">
                <span class="text-primary">k</span>uba's <span class="text-secondary">p</span>lantje
            </div>
            <div>
                ------------------------------------
            </div>
            <div class="flex justify-between">
                <div class="hover:text-primary hover:underline">
                    techs
                </div>
                <div>
                    /
                </div>
                <div class="hover:text-primary hover:underline">
                    projects
                </div>
                <div>
                    /
                </div>
                <div class="hover:text-primary hover:underline">
                    funfacts
                </div>
                <div>
                    /
                </div>
                <div class="hover:text-primary hover:underline">
                    contact
                </div>
            </div>
            <div>
                ------------------------------------
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
// a
</script>
<style lang="scss" scoped>
.nav-container {
    top: 0;
    left: 0;
    width: 100%;
    background-color: theme('colors.dark');
    .nav {
        text-align: center;
        margin: 0 auto;
        max-width: 320px;
        .page-title {
            font-size: larger;
            font-style: italic;
            text-align: center;
        }
    }
}
</style>