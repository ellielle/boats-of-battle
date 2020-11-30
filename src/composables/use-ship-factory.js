import { ref, reactive } from "vue";

export default function initializeShips() {
  // 1 carrier {5}, 2 battleship {4}, 3 destroyer {3}, 4 submarines {3}, 5 patrol boats {2}
  // 17 total
  // let shipCount = 0;
  const fleet = ref([]);
  const shipyard = {
    carrier: {
      numAllowed: 1,
      shipSections: 5,
    },
    battleship: {
      numAllowed: 2,
      shipSections: 4,
    },
    destroyer: {
      numAllowed: 3,
      shipSections: 3,
    },
    submarine: {
      numAllowed: 4,
      shipSections: 3,
    },
    patrolBoat: {
      numAllowed: 5,
      shipSections: 2,
    },
  };

  function createShip(shipType, length) {
    const hitSections = Array(length).fill("O", 0, length - 1);
    return {
      shipType,
      shipLength: length,
      sections: hitSections,
      isSunk() {
        return this.sections.every(
          (element) => element.toString().toUpperCase() === "X"
        );
      },
      onHit(hitLocation) {
        this.sections[hitLocation] = "X";
      },
    };
  }

  function shipFactory() {
    for (const [key, value] of Object.entries(shipyard)) {
      for (let i = 0; i < value.numAllowed; i++) {
        const newShip = reactive(createShip(key, value.shipSections));
        fleet.value.push(newShip);
      }
    }
  }

  return { fleet, shipFactory };
}
