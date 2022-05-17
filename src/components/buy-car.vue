<template>
    <div class="">
        <table class="text-center w-full table-fixed">
            <thead>
                <tr class="border-b-2">
                    <th class="py-2">商品圖示</th>
                    <th class="py-2">商品名稱</th>
                    <th class="py-2">商品價格</th>
                </tr>
            </thead>
            <tbody class="">
                <tr class="border-b" v-for="item in store.car" :key="item.name">
                    <td class="flex items-center justify-center">
                        <img
                            class="h-24 w-16 my-2"
                            :src="item.src"
                            :alt="item.name"
                        />
                    </td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.price }}</td>
                </tr>
            </tbody>
        </table>
        <p class="text-2xl text-[#FF0000]">
            總金額為 <span>{{ total }}</span> 元
        </p>
    </div>
</template>
<script lang="ts" setup>
import { computed } from '@vue/reactivity';
import { useStore } from '../store/use-store';

const store = useStore();
const total = computed(() => {
    let price = 0;
    for (const item in store.car) {
        price += store.car[item].price;
    }
    return price;
});
</script>
