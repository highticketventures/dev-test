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
                    <div class="flex flex-row-reverse gap-2">
                        <button
                            v-for="expertise in expertiseRow1"
                            :key="expertise.name"
                            class="inline-flex items-center gap-1.5 px-2 py-1 bg-white/[0.03] backdrop-blur-md border border-white/[0.04] rounded-[37px] text-white text-xs font-medium whitespace-nowrap transition-all hover:bg-white/[0.06] hover:border-white/[0.08] cursor-pointer"
                        >
                            <span
                                v-if="expertise.logo"
                                class="w-3 h-3 flex items-center justify-center"
                            >
                                <img
                                    alt="Google Ads"
                                    loading="lazy"
                                    width="12"
                                    height="12"
                                    decoding="async"
                                    data-nimg="1"
                                    class=""
                                    style="color:transparent"
                                    :src="`/src/assets/requests/${expertise.logo}`"
                                >
                            </span>
                            <span>{{ expertise.name }}</span>
                        </button>
                    </div>

                    <div class="flex flex-row-reverse gap-2">
                        <button
                            v-for="expertise in expertiseRow2"
                            :key="expertise.name"
                            class="inline-flex items-center gap-1.5 px-2 py-1 bg-white/[0.03] backdrop-blur-md border border-white/[0.04] rounded-[37px] text-white text-xs font-medium whitespace-nowrap transition-all hover:bg-white/[0.06] hover:border-white/[0.08] cursor-pointer"
                        >
                            <span
                                v-if="expertise.logo"
                                class="w-3 h-3 flex items-center justify-center"
                            >
                                <img
                                    alt="Google Ads"
                                    loading="lazy"
                                    width="12"
                                    height="12"
                                    decoding="async"
                                    data-nimg="1"
                                    class=""
                                    style="color:transparent"
                                    :src="`/src/assets/requests/${expertise.logo}`"
                                >
                            </span>
                            <span>{{ expertise.name }}</span>
                        </button>
                    </div>

                    <div class="flex flex-row-reverse gap-2">
                        <button
                            v-for="expertise in expertiseRow3"
                            :key="expertise.name"
                            class="inline-flex items-center gap-1.5 px-2 py-1 bg-white/[0.03] backdrop-blur-md border border-white/[0.04] rounded-[37px] text-white text-xs font-medium whitespace-nowrap transition-all hover:bg-white/[0.06] hover:border-white/[0.08] cursor-pointer"
                        >
                            <span
                                v-if="expertise.logo"
                                class="w-3 h-3 flex items-center justify-center"
                            >
                                <img
                                    alt="Google Ads"
                                    loading="lazy"
                                    width="12"
                                    height="12"
                                    decoding="async"
                                    data-nimg="1"
                                    class=""
                                    style="color:transparent"
                                    :src="`/src/assets/requests/${expertise.logo}`"
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
const expertiseRow1 = [
    { name: 'Product' },
    { name: 'Sales', logo: 'sales.svg' },
    { name: 'Facebook Ads', logo: 'facebook-ads.svg' },
    { name: 'Hubspot', logo: 'hubspot.svg' },
    { name: 'Google Ads', logo: 'google-ads.svg' },
];
const expertiseRow2 = [
    { name: 'Engineering', logo: 'github.svg' },
    { name: 'Talent', logo: 'linkedin.svg' },
    { name: 'Design', logo: 'figma.svg' },
    { name: 'Legal', logo: 'legal.svg' },
    { name: 'Finance', logo: 'stripe.svg' },
];
const expertiseRow3 = [
    { name: 'Operations' },
    { name: 'Management', logo: 'slack.svg' },
    { name: 'Fulfillment' },
    { name: 'Webflow', logo: 'webflow.svg' },
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