<template>
    <div class="bg-white text-card-foreground flex flex-col rounded-xl border p-3 shadow-sm max-w-[195px] cursor-pointer mb-6 hover:bg-gray-100 transition-colors">
        <div class="flex gap-4 justify-between items-center">
            <SVGNewRequestIcon />
            <div class="flex flex-col justify-start h-full">
                <SVGIconPlus />
            </div>
        </div>
        <h6 class="text-htv-grey mt-4">
            New Request
        </h6>
    </div>
</template>

<script setup lang="ts">
import SVGNewRequestIcon from '@/assets/requests/new-request-icon.svg';
import SVGIconPlus from '@/assets/icon-plus.svg';
</script>