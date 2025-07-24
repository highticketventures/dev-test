<template>
    <Popover>
        <PopoverTrigger as-child>
            <Button
                variant="outline"
                class="bg-[#F3F3F3] border-[#D5D7DA] text-[#2F2F2F] flex items-center gap-2"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4 6h16M8 12h8m-4 6h.01"
                    />
                </svg>
            </Button>
        </PopoverTrigger>
        <PopoverContent>
            <div class="flex flex-row gap-2 mb-2 sm:hidden">
                <Label
                    for="terms"
                    class="w-24"
                >Status</Label>
                <Select>
                    <SelectTrigger class="w-full">
                        <SelectValue placeholder="All" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="in-progress">In Progress</SelectItem>
                        <SelectItem value="reviewing">Reviewing</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div class="flex flex-row gap-2 mb-2">
                <Label
                    for="terms"
                    class="w-24"
                >User</Label>
                <Select>
                    <SelectTrigger class="w-full">
                        <SelectValue placeholder="All" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="pending">John Doe</SelectItem>
                        <SelectItem value="in-progress">Jane Doe</SelectItem>
                        <SelectItem value="reviewing">John Smith</SelectItem>
                        <SelectItem value="completed">Jane Smith</SelectItem>
                    </SelectContent>
                </Select>
            </div>

        </PopoverContent>
    </Popover>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
</script>