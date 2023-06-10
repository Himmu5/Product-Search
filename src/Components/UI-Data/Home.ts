import { faker } from "@faker-js/faker";

export function getRandomData() {
    const data = [...Array(5)].map(() => {
      return {
        id: faker.datatype.uuid(),
        avatar: faker.image.url(),
        title: faker.commerce.productName(),
      };
    });
    return data;
  }

 export function PopularSuggestions() {
    const data = [...Array(5)].map(() => {
      return {
        title: faker.commerce.productName(),
      };
    });
    return data;
  }