<template>
    <div class="fixed top-0 left-0 right-0 z-50">
        <nav class="bg-dark text-white transition-all duration-300">
            <div class="hidden lg:block relative">
                <div class="flex items-center h-[66px] py-3">
                    <div class="flex-shrink-0 px-6">
                        <img
                            alt="HTV"
                            class="h-6 w-auto"
                            src="@/assets/htv-logo.png"
                        />
                    </div>
                    <div class="flex-1 flex items-center ml-8">
                        <div class="flex items-center h-full gap-6">
                            <div class="relative h-full">
                                <div class="flex items-center h-full text-white/70 gap-1 transition-all duration-150 ease-in-out">
                                    <SVGHome />
                                    <span class="text-sm font-medium">Home</span>
                                </div>
                                <div class="absolute left-0 right-0 h-0.5 bg-white pointer-events-none rounded-full -bottom-6 opacity-0 transition-opacity duration-150 ease-in-out"></div>
                            </div>
                            <div class="relative h-full">
                                <div class="flex items-center h-full text-white/70 gap-1 transition-all duration-150 ease-in-out">
                                    <SVGCommunity />
                                    <span class="text-sm font-medium">Community</span>
                                </div>
                                <div class="absolute left-0 right-0 h-0.5 bg-white pointer-events-none rounded-full -bottom-6 opacity-0 transition-opacity duration-150 ease-in-out"></div>
                            </div>
                            <div class="relative h-full">
                                <div class="flex items-center h-full text-white/70 gap-1 transition-all duration-150 ease-in-out">
                                    <SVGCompany />
                                    <span class="text-sm font-medium">Company</span>
                                </div>
                                <div class="absolute left-0 right-0 h-0.5 bg-white pointer-events-none rounded-full -bottom-6 opacity-0 transition-opacity duration-150 ease-in-out"></div>
                            </div>
                            <div class="relative h-full">
                                <div class="flex items-center h-full text-white/70 gap-1 transition-all duration-150 ease-in-out">
                                    <SVGResources />
                                    <span class="text-sm font-medium">Resources</span>
                                </div>
                                <div class="absolute left-0 right-0 h-0.5 bg-white pointer-events-none rounded-full -bottom-6 opacity-0 transition-opacity duration-150 ease-in-out"></div>
                            </div>
                            <div class="relative h-full">
                                <div class="flex items-center h-full text-white gap-1 transition-all duration-150 ease-in-out">
                                    <SVGRequests />
                                    <span class="text-sm font-medium">Requests</span>
                                </div>
                                <div class="absolute left-0 right-0 h-0.5 bg-white pointer-events-none rounded-full -bottom-6 opacity-100 transition-opacity duration-150 ease-in-out"></div>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center pr-6">
                        <div class="flex items-center gap-5">
                            <button class="p-2 rounded-lg hover:bg-white/10 transition-colors">
                                <SVGMessages />
                            </button>
                            <button class="p-2 rounded-lg hover:bg-white/10 transition-colors">
                                <SVGNotifications />
                            </button>
                        </div>
                        <div class="ml-6">
                            <div class="relative">
                                <button class="flex items-center space-x-2 p-2 rounded-lg hover:bg-htv-border transition-colors">
                                    <img
                                        alt="Profile Image"
                                        src="https://github.com/anthonybudd.png"
                                        class="rounded-full object-cover w-8 h-8 text-sm"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="lg:hidden">
                <div class="px-4">
                    <div class="flex items-center justify-between h-16">
                        <div class="flex items-center">
                            <SVGHTVLogoSquare />
                        </div>
                        <button class="p-2 rounded-lg hover:bg-white/10 transition-colors">
                            <SVGMenu />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup lang="ts">
import SVGHTVLogoSquare from '@/assets/htv-logo-square.svg';
import SVGHome from '@/assets/nav/home.svg';
import SVGCommunity from '@/assets/nav/community.svg';
import SVGCompany from '@/assets/nav/company.svg';
import SVGResources from '@/assets/nav/resources.svg';
import SVGRequests from '@/assets/nav/requests.svg';
import SVGMessages from '@/assets/nav/messages.svg';
import SVGNotifications from '@/assets/nav/notifications.svg';
import SVGMenu from '@/assets/nav/menu.svg';
</script>