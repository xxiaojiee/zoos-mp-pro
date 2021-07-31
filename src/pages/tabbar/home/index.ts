import { getAllType } from "@/service/api/test";
import router from "@/service/router";
Page({
    data: {
        result: ""
    },
    async handleFeatchData() {
        const data = await getAllType();
        console.log("data1:", data);
        this.setData({
            result: JSON.stringify(data)
        });
    },
    handleRouterSwitch(e: WechatMiniprogram.TouchEvent) {
        router.push({
            name: e.currentTarget.dataset.name
        });
    }
});
