import { mount } from "@vue/test-utils";
import Gameboard from "@/components/Gameboard.vue"

describe("ship functionality", () => {
  it("takes damage when hit", () => {
    const wrapper = mount(Gameboard);

    expect(wrapper.find("O").element).not.to
  });
});
