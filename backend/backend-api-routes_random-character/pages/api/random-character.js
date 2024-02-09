import Chance from "chance";

// example character object with random values
const characters =
{
    firstName: chance.first(),
    lastName: chance.last(),
    age: chance.age(),
    city: chance.city()
}

const chance = new Chance()
export default function handler(request, response) {
    response.status(200).json(characters)
}