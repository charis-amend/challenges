export function getFirstNames(people) {
  return people.map((person) => person.firstName);
}

export function getFullNames(people) {
  return people.map((fullname) => {
    `${fullname.firstName} ${fullname.lastName}`
  });
}

export function getNameAndAge(people) { }

export function getPeopleByAge(people, age) {
  return people.filter((person) => person.age === age)
}

export function getPeopleNamesOlderThan(people, age) {
  const oldPeople = people.filter((person) => person.age > age);
}

export function getPeopleByLastName(people, lastName) { }

export function findPersonById(people, id) { }

export function isAnyoneOlderThan(people, age) { }

export function getFullNamesSortedByAge(people) {
  const sortedPeople = people.sort((a, b) => a.age - b.age);
  return getFullNames(sortedPeople);
}
