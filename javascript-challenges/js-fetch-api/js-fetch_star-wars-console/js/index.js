
const url = "https://swapi.dev/api/people";

async function fetchData() {
    try {
        const response = await fetch(url);
        console.log(response);

        if (response.ok) {
            const allData = await response.json();
            console.log('entire Data object: ', allData)

            console.log("different values/ results:", allData.results)

            const results = allData.results
            const r2d2 = results.find((character) =>
                character.name.toLowerCase() === "r2-d2")
            console.log("info about r2d2:", r2d2)

            const eyecolor = r2d2.eye_color
            console.log("eye color R2D2:", eyecolor)
        }

    } catch (error) {
        console.log(error)
    }
}

fetchData();
