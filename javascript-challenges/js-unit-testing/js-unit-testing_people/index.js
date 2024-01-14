export function getFirstNames(people) {
  return people.map(person => person.firstName);
}

export function getFullNames(people) {
  return people.map(person => {
    `${person.firstName} ${person.lastName}`
  });
}

export function getNameAndAge(people) {
  return people.map(person => {
    `"${person.lastName} (${person.age})"`
  })
}

export function getPeopleByAge(people, age) {
  return people.filter((person) => person.age === age)
}

export function getPeopleNamesOlderThan(people, age) {
  const oldPeople = people.filter((person) => person.age > age);
  return getFullNames(oldPeople)
}

export function getPeopleByLastName(people, lastName) {
  return people.filter((person) => person.lastName === lastName)
}

export function findPersonById(people, id) {
  return people.find((person) => person.id === id)
}

export function isAnyoneOlderThan(people, age) {
  people.some((person) => {
    if (person.age > age) {
      return true;
    } else (person.age < age){
      return false;
    }
  })
}

export function getFullNamesSortedByAge(people) {
  const sortedPeople = people.sort((a, b) => a.age - b.age);
  return getFullNames(sortedPeople);
}
