<template>
    <div class="bg-white rounded-md border border-[#EFEFEF] p-3 shadow-sm flex flex-col items-start">
        <div class="flex flex-row gap-1 mb-3 w-full">
            <span class="block flex-1 h-1 rounded-full bg-[#227C64]"></span>
            <span class="block flex-1 h-1 rounded-full bg-[#EFEFEF]"></span>
            <span class="block flex-1 h-1 rounded-full bg-[#EFEFEF]"></span>
            <span class="block flex-1 h-1 rounded-full bg-[#EFEFEF]"></span>
        </div>

        <div class="gap-2 mb-2 flex flex-row justify-between w-full">
            <span class="text-sm text-[#8e8e8e]">
                19 April, 2025, 19:35
            </span>

            <div class="flex flex-row -space-x-2">
                <img
                    src="https://github.com/anthonybudd.png"
                    alt="arrow-right"
                    class="w-7 h-7 rounded-full border-2 border-white"
                />
                <img
                    src="https://github.com/anthonybudd.png"
                    alt="arrow-right"
                    class="w-7 h-7 rounded-full border-2 border-white"
                />
            </div>
        </div>

        <h3 class="text-lg font-semibold mb-2 text-[#424242]">Google Ads Review</h3>
        <h4 class="text-sm font-medium text-gray-400 mb-1">Marketing / SEO and Content Optimization</h4>
        <p class="text-sm text-gray-500 mb-4">
            Lorem ipsum dolor sit amet consectetur. Nunc ullamcorper sed vel urna in sit nibh. Etiam duis praesent dolor elit morbi et augu
        </p>

        <div class="flex flex-row gap-2">
            <Badge variant="secondary">New</Badge>
            <Badge variant="secondary">Schedule Call</Badge>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Badge } from '@/components/ui/badge'

</script>
