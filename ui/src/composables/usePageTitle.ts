import { watch } from 'vue';
import { useRoute } from 'vue-router';

export function usePageTitle() {
    const route = useRoute();

    const updateTitle = (title?: string) => {
        const pageTitle = title || route.meta.title || 'HTV';
        document.title = typeof pageTitle === 'string' ? pageTitle : 'HTV';
    };

    watch(() => route.meta.title, (newTitle) => updateTitle(), { immediate: true });

    return {
        updateTitle
    };
} 