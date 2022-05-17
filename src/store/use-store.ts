import { defineStore } from 'pinia';
import { commodityList } from './commodity';
export const useStore = defineStore('store', {
    state: () => ({
        nowViewIndex: 0,
    }),
    actions: {
        moveViewIndex(n: number) {
            const now = this.nowViewIndex;
            const maxlen = commodityList.length;
            if (now + n < 0) {
                this.nowViewIndex = maxlen - 1;
                return;
            }
            if (now + n >= maxlen) {
                this.nowViewIndex = 0;
                return;
            }
            this.nowViewIndex += n;
        },
    },
});
