import { reactive } from "vue";

export function initializeShips() {
  // 1 carrier {5}, 2 battleship {4}, 3 destroyer {3}, 4 submarines {3}, 5 patrol boats {2}
  // 17 total
  const shipArray = reactive([]);
  const shipList = {
    // First array value is the number allowed, second is number of sections
    carrier: {
      numAllowed: 1,
      hitSections: 5,
    },
    battleship: {
      numAllowed: 2,
      hitSections: 4,
    },
    destroyer: {
      numAllowed: 3,
      hitSections: 3,
    },
    submarine: {
      numAllowed: 4,
      hitSections: 3,
    },
    patrolBoat: {
      numAllowed: 5,
      hitSections: 2,
    },
  };
  function createShips(shipType, length, shipAmount) {
    let idCount = 0;
    for (let i = 0; i < shipAmount; i++) {
      const newShip = reactive({
        shipType: shipType,
        shipSections: Array(length).fill("O", 0, length),
        hit: () => {
          // shipSections[hitLocation] = "X";
          // console.log(shipSections);
        },
        isSunk: () => {},
        id: idCount,
      });
      shipArray.push(newShip);
      idCount++;
    }
  }
  function buildShips() {
    for (const [shipType] of Object.entries(shipList)) {
      createShips(
        shipType,
        shipList[shipType].hitSections,
        shipList[shipType].numAllowed
      );
    }
    return shipArray;
  }

  return { shipArray, buildShips };
}
