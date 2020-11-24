import { mount } from "@vue/test-utils";
import Gameboard from "@/components/Gameboard.vue";

// {#} indicate how many grid tiles the ships take
// 1 carrier {5}, 2 battleship {4}, 3 destroyer {3}, 4 submarines {3}, 5 patrol boats {2}
// 17 total
// 10x10 grid

describe("Gameboard Factory", () => {
  xit("renders a vue instance", () => {
    const wrapper = mount(Gameboard);
    
  })
});
