import { mount } from "@vue/test-utils";

// {#} indicate how many grid tiles the ships take
// 1 carrier {5}, 2 battleship {4}, 3 destroyer {3}, 4 submarines {3}, 5 patrol boats {2}
// 17 total
// 10x10 grid

describe("ship factory", () => {
  let mockedShipBuildFn;

  beforeEach(() => {
    mockedShipBuildFn = jest.fn();
  });

  it("runs on page load", () => {
    const wrapper = mount("Gameboard");
    let ships = wrapper.findAll('[data-test="player-ship"');

    // ! start here, test is failing finally, create shipFactory
    // ? test may need to be refactored to account for AI ships
    expect(ships.length).toBe(17);
  });

  xit("it places 17 ships on the player grid", () => {});
});
