<template>
    <v-row>
        <v-col cols="12">
            <HomeView />
        </v-col>
        <v-col cols="12">
            <ProjectsView />
        </v-col>
        <v-col cols="12">
            <AboutView />
        </v-col>
    </v-row>
</template>
<script setup lang="ts">
// MainView.vue
    import HomeView from './HomeView.vue';
    import ProjectsView from './ProjectsView.vue';
    import AboutView from './AboutView.vue';

</script>