<template>
    <div class="flex flex-row items-center p-0.5 gap-0.5 bg-[#F3F3F3] rounded-lg w-fit max-h-12 overflow-y-auto">
        <button
            v-for="status in statuses"
            :key="status.value"
            :class="{ active: selectedStatus === status.value }"
            class="button gap-1.5 rounded-md px-5 py-2 text-sm font-medium"
            @click="handleStatusChange(status.value)"
        >{{ status.label }}</button>
    </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';

const statuses = [
    { label: 'All', value: 'all' },
    { label: 'Submitted', value: 'submitted' },
    { label: 'In Progress', value: 'in_progress' },
    { label: 'Reviewing', value: 'reviewing' },
    { label: 'Completed', value: 'completed' },
];

const selectedStatus = ref('all');
const emit = defineEmits(['change']);

function handleStatusChange(status: string) {
    selectedStatus.value = status;
    emit('change', status);
}

</script>

<style scoped>
.button {
    @apply flex items-center cursor-pointer justify-center transition-all text-[#7B7B7B] hover:text-[#2F2F2F] border border-[#F3F3F3] whitespace-nowrap;
}

.active {
    @apply bg-[#FFFFFF] text-[#2F2F2F] border border-[#D5D7DA];
}
</style>