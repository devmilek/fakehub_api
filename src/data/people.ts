import { faker } from "@faker-js/faker";

export interface Person {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatar: string;
  jobTitle: string;
  company: string;
  address: {
    street: string;
    city: string;
    country: string;
    zipCode: string;
  };
}

function generatePeople(count: number): Person[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    avatar: faker.image.avatar(),
    jobTitle: faker.person.jobTitle(),
    company: faker.company.name(),
    address: {
      street: faker.location.streetAddress(),
      city: faker.location.city(),
      country: faker.location.country(),
      zipCode: faker.location.zipCode(),
    },
  }));
}

export const people: Person[] = generatePeople(20);
