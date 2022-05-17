<template>
    <div class="p-4">
        <div class="pb-4">
            <ItemCard></ItemCard>
        </div>
        <div class="">
            <button
                class="rounded-md bg-primary px-4 py-2 text-white"
                @click="movePrev"
            >
                上一筆
            </button>
            <button
                class="rounded-md bg-primary px-4 py-2 text-white"
                @click="moveNext"
            >
                下一筆
            </button>
        </div>
        <div class="">
            <button class="rounded-md bg-success px-4 py-2 text-white">
                查看購物車
            </button>
            <button class="rounded-md bg-success px-4 py-2 text-white">
                清空購物車
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import OverlayScreen from './components/overlay-screen.vue';
import ItemCard from './components/item-card.vue';
import { useStore } from './store/use-store';
const store = useStore();

function movePrev() {
    store.moveViewIndex(-1);
}

function moveNext() {
    store.moveViewIndex(1);
}
</script>
