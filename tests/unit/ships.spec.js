import { mount } from "@vue/test-utils";
import Gameboard from "@/components/Gameboard.vue"

describe("ship factory", () => {
  it("places 15 ships on the player grid", () => {
    const wrapper = mount(Gameboard);
    let ships = wrapper.findAll('[data-test="player-ship"]');
    expect(ships.length).toBe(15);
  });
});

describe("ship functionality", () => {
  xit("takes damage when hit", () => {
    const wrapper = mount(Gameboard);
    const hitShip = wrapper.get('["data-test="hit-ship"]');

    expect(hitShip).toContain("X");
  });
});

