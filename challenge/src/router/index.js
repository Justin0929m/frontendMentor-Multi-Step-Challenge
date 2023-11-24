// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/HomeView.vue';
import About from '@/views/AboutView.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/plan', name: 'plan', component: () => import('@/components/StepTwoComp.vue')},
    { path: '/addons', name: 'addons', component: () => import('@/components/StepThreeComp.vue')},
    { path: '/summary', name: 'summary', component: () => import('@/components/StepFourComp.vue')}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
