import { fakerEN_US as faker } from '@faker-js/faker';

const personName = faker.person.fullName();
const personBio = faker.person.bio();

console.log(`Hi my name is ${personName}. and I am a ${personBio}`);
