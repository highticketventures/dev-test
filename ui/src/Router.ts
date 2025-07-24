import { createMemoryHistory, createRouter } from 'vue-router';

const router = createRouter({
    history: createMemoryHistory(),
    routes: [
        {
            path: '',
            component: () => import('./layouts/App.vue'),
            children: [
                {
                    path: '',
                    component: () => import('./view/Requests.vue'),
                    meta: {
                        title: 'Requests - HTV'
                    }
                },
                {
                    path: '/requests',
                    component: () => import('./view/Requests.vue'),
                    meta: {
                        title: 'Requests - HTV'
                    }
                },
            ],
        },
    ]
});


router.beforeEach((to, _, next) => {
    const title = to.meta.title || 'HTV';
    document.title = typeof title === 'string' ? title : 'HTV';
    next();
});

export default router;