import { defineStore } from 'pinia';
import { commodityList, ICommodity } from './commodity';

interface ICar {
    [key: string]: ICommodity;
}

export const useStore = defineStore('store', {
    state: () => ({
        nowViewIndex: 0,
        car: <ICar>{},
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
        addCar(commodityName: string) {
            const item = commodityList.find((e) => e.name === commodityName);
            if (!item) {
                throw Error(`Not find ${commodityName}`);
            }
            this.car[commodityName] = item;
        },
        clearCar() {
            this.car = {};
        },
    },
});
