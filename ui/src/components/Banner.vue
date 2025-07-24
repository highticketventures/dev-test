<template>
    <div class="htv-banner relative w-full h-[200px] rounded-lg overflow-hidden">
        <div class="absolute inset-0">
            <img
                class="background"
                src="@/assets/request-page-banner-background.png"
            >
        </div>
        <div class="relative h-full px-8 lg:px-12 flex items-center">
            <div class="flex flex-col lg:flex-row items-center justify-between w-full">
                <div class="max-w-2xl text-center lg:text-left">
                    <h1 class="text-white mb-4 sm:text-4xl text-2xl">Get expert help, instantly</h1>
                    <p class="hidden sm:block">Rapidly pinpoint bottlenecks, schedule a targeted advisory session with our subject matter experts, and drive decisive improvements in your business performance.</p>
                    <p class="block sm:hidden">Rapidly pinpoint bottlenecks, schedule advisory sessions, and drive improvements.</p>
                </div>
                <div class="flex flex-col gap-2 hidden lg:flex">


                    <div
                        v-for="(row, i) in expertise"
                        :key="i"
                        class="flex flex-row-reverse gap-2"
                    >
                        <button
                            v-for="expertise in row"
                            :key="expertise.name"
                            class="bg-white/[0.03] border border-white/[0.04] inline-flex items-center gap-1.5 px-2 py-1 rounded-[37px] text-xs text-white font-medium whitespace-nowrap backdrop-blur-md transition-all hover:bg-white/[0.06] hover:border-white/[0.08] cursor-pointer"
                        >
                            <span
                                v-if="expertise.logo"
                                class="w-3 h-3 flex items-center justify-center"
                            >
                                <!-- AB: This is a hack to get the logo to work -->
                                <img
                                    alt="Google Ads"
                                    loading="lazy"
                                    width="12"
                                    height="12"
                                    decoding="async"
                                    :src="`/requests/${expertise.logo}`"
                                >
                            </span>
                            <span>{{ expertise.name }}</span>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const expertise = [
    [
        { name: 'Product' },
        { name: 'Sales', logo: 'sales.svg' },
        { name: 'Facebook Ads', logo: 'facebook-ads.svg' },
        { name: 'Hubspot', logo: 'hubspot.svg' },
        { name: 'Google Ads', logo: 'google-ads.svg' },
    ], [
        { name: 'Engineering', logo: 'github.svg' },
        { name: 'Talent', logo: 'linkedin.svg' },
        { name: 'Design', logo: 'figma.svg' },
        { name: 'Legal', logo: 'legal.svg' },
        { name: 'Finance', logo: 'stripe.svg' },
    ], [
        { name: 'Operations' },
        { name: 'Management', logo: 'slack.svg' },
        { name: 'Fulfillment' },
        { name: 'Webflow', logo: 'webflow.svg' },
    ]
];
</script>

<style scoped lang="scss">
.htv-banner {
    .background {
        position: absolute;
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        color: transparent;
    }

    h1 {
        line-height: 1;
        letter-spacing: 0;
    }

    p {
        font-size: 16px;
        line-height: 1.2;
        letter-spacing: 0;
        font-weight: 300;
        color: #A1A1A1;
    }
}
</style>