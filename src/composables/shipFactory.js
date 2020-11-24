import { reactive } from "vue";

export default function initializeShips() {
  // 1 carrier {5}, 2 battleship {4}, 3 destroyer {3}, 4 submarines {3}, 5 patrol boats {2}
  // 17 total
  // let shipCount = 0;
  const shipArray = reactive([]);
  // const shipList = {
  //   // First array value is the number allowed, second is number of sections
  //   carrier: {
  //     numAllowed: 1,
  //     hitSections: 5,
  //   },
  //   battleship: {
  //     numAllowed: 2,
  //     hitSections: 4,
  //   },
  //   destroyer: {
  //     numAllowed: 3,
  //     hitSections: 3,
  //   },
  //   submarine: {
  //     numAllowed: 4,
  //     hitSections: 3,
  //   },
  //   patrolBoat: {
  //     numAllowed: 5,
  //     hitSections: 2,
  //   },
  // };

  return shipArray; 
}
