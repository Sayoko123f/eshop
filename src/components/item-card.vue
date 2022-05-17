<template>
    <div class="overflow-hidden rounded-md border shadow">
        <div class="p-4 text-xl" :class="item.class">
            {{ item.name }}
        </div>
        <div class="flex flex-shrink-0 flex-grow-0 flex-col p-4 md:flex-row">
            <div class="h-[360px] w-[260px]">
                <img class="h-[360px] w-[240px]" :src="item.src" />
            </div>
            <div class="max-w-md p-4">
                <p class="pb-2">
                    {{ item.description }}
                </p>
                <p class="py-2 text-2xl font-bold text-[#FF0000]">
                    特價 {{ item.price }} 元
                </p>
                <button class="rounded-md bg-success px-4 py-2 text-white">
                    放入購物車
                </button>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import { commodityList } from '../store/commodity';
import { useStore } from '../store/use-store';
const store = useStore();
const item = computed(() => commodityList[store.nowViewIndex]);
</script>
