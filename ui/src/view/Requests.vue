<template>
    <div class="container max-w-7xl mx-auto px-6 pt-6">

        <Banner class="mb-6" />

        <h1 class="text-2xl font-semibold text-htv-grey mb-4">
            Create Request
        </h1>
        <Dialog>
            <DialogTrigger as-child>
                <CardNewRequest />
            </DialogTrigger>
            <DialogContent class="sm:max-w-[425px]">

            </DialogContent>
        </Dialog>


        <h1 class="text-2xl font-semibold text-htv-grey mb-4">
            All Requests
        </h1>
        <div class="mb-6 gap-4 flex flex-col sm:flex-row justify-between">
            <div class="hidden sm:block">
                <RequestStatusButtonGroup />
            </div>

            <div class="flex flex-row items-center gap-2">
                <Search />
                <RequestsFilters />
            </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <CardRequest />
            <CardRequest />
            <CardRequest />
            <CardRequest />
            <CardRequest />
        </div>
    </div>
</template>

<script setup lang="ts">
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from '@/components/ui/dialog';


import Banner from '@/components/Banner.vue';
import CardRequest from '@/components/CardRequest.vue';
import CardNewRequest from '@/components/CardNewRequest.vue';
import RequestStatusButtonGroup from '@/components/RequestStatusButtonGroup.vue';
import Search from '@/components/Search.vue';
import RequestsFilters from '@/components/RequestsFilters.vue';
</script>