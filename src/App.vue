<template>
    <div class="p-4">
        <div class="pb-4">
            <ItemCard></ItemCard>
        </div>
        <div class="flex gap-2">
            <button
                class="rounded-md bg-primary px-4 py-2 text-white hover:bg-primary-hover"
                @click="movePrev"
            >
                上一筆
            </button>
            <button
                class="rounded-md bg-primary px-4 py-2 text-white hover:bg-primary-hover"
                @click="moveNext"
            >
                下一筆
            </button>
        </div>
        <div class="flex gap-2 py-2">
            <button
                class="rounded-md bg-success px-4 py-2 text-white hover:bg-success-hover"
                @click="() => (showCar = !showCar)"
            >
                查看購物車
            </button>
            <button
                class="rounded-md bg-success px-4 py-2 text-white hover:bg-success-hover"
                @click="clearCar"
            >
                清空購物車
            </button>
        </div>
        <hr class="my-2" />
        <BuyCar v-if="showCar"></BuyCar>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import OverlayScreen from './components/overlay-screen.vue';
import ItemCard from './components/item-card.vue';
import { useStore } from './store/use-store';
import BuyCar from './components/buy-car.vue';
const store = useStore();
const showCar = ref(false);

function movePrev() {
    store.moveViewIndex(-1);
}

function moveNext() {
    store.moveViewIndex(1);
}

function clearCar() {
    store.clearCar();
    showCar.value = false;
}
</script>
