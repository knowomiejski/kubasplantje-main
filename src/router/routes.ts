import MainLayoutVue from '@/layouts/MainLayout.vue'
import KubasPageVue from '@/pages/KubasPage.vue';

const routes = [
    {
        path: '/',
        name: '',
        component: KubasPageVue,
        meta: {
            layout: MainLayoutVue
        }
    }
]

export default routes;