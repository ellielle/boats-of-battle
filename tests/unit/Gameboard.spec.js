import { mount } from "@vue/test-utils";
import Gameboard from "@/components/Gameboard.vue";

// {#} indicate how many grid tiles the ships take
// 1 carrier {5}, 2 battleship {4}, 3 destroyer {3}, 4 submarines {3}, 5 patrol boats {2}
// 17 total
// 10x10 grid
describe("Basic Gameboard functionality", () => {
  const wrapper = mount(Gameboard);

  it("renders a vue instance", () => {
    const container = wrapper.get('[data-test="game-container"]');
    expect(container.element.textContent).toMatch("Boats of Battle");
    expect(container.element.textContent).not.toMatch("boats of battle");
  });

  it("places ships on the player grid when start button pressed", async () => {
    // const wrapper = mount(Gameboard);
    await wrapper.get('[data-test="begin-button"]').trigger("submit");
    let ships = wrapper.findAll('[data-test="player-ship"]');
    expect(ships.length).toBe(15);
  });

  xit("places ships on the computer grid", async () => {
    // const wrapper = mount(Gameboard);
    let ships = await wrapper.get('[data=test="computer-ship"]');
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
