<template>
    <div class="relative w-full sm:w-auto">
        <Input
            placeholder="Search..."
            class="pl-8"
        />
        <span class="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
                <circle
                    cx="11"
                    cy="11"
                    r="7"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                />
                <line
                    x1="16.5"
                    y1="16.5"
                    x2="21"
                    y2="21"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                />
            </svg>
        </span>
    </div>
</template>

<script setup lang="ts">
import { Input } from '@/components/ui/input';
</script>
