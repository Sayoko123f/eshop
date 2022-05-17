<template>
    <div class="overflow-hidden rounded-md border shadow">
        <div class="p-4 text-xl" :class="item.class">
            {{ item.name }}
        </div>
        <div class="flex flex-shrink-0 flex-grow-0 flex-col p-4 md:flex-row">
            <div class="h-[360px] w-[260px]">
                <img class="h-[360px] w-[240px]" :src="`imgs/${item.src}`" />
            </div>
            <div class="max-w-md p-4">
                <p class="pb-2">
                    {{ item.description }}
                </p>
                <p class="py-2 text-2xl font-bold text-[#FF0000]">
                    特價 {{ item.price }} 元
                </p>
                <button
                    class="relative rounded-md bg-success px-4 py-2 text-white hover:bg-success-hover"
                    @click="addCar"
                >
                    放入購物車
                </button>
            </div>
        </div>
        <Teleport to="#portal-target">
            <OverlayScreen :loading="true" v-if="isLoading" />
            <OverlayScreen v-if="showAddTip">
                <div
                    class="flex w-48 rounded bg-white p-4 text-success shadow-md"
                >
                    <CheckCircleIcon class="h-6 w-6 pr-1" />
                    <span>已加入購物車</span>
                </div>
            </OverlayScreen>
        </Teleport>
    </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue';
import { commodityList } from '../store/commodity';
import { useStore } from '../store/use-store';
import { CheckCircleIcon } from '@heroicons/vue/solid';
import OverlayScreen from './overlay-screen.vue';
const store = useStore();
const item = computed(() => commodityList[store.nowViewIndex]);

const showAddTip = ref(false);

const isLoading = ref(false);

function wait(ms: number) {
    return new Promise((resolve) => {
        window.setTimeout(resolve, ms);
    });
}

function addCar() {
    isLoading.value = true;
    store.addCar(item.value.name);
    wait(240)
        .then(async () => {
            isLoading.value = false;
            showAddTip.value = true;
            await wait(420);
        })
        .catch((err) => {
            console.error(err);
        })
        .finally(() => {
            showAddTip.value = false;
            isLoading.value = false;
        });
}
</script>
