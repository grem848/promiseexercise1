const fetch = require("node-fetch");
const url = "https://swapi.co/api/people/";

function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
}

async function getPlanetforFirstSpeciesInFirstMovieForPerson(id) {

    const p1 = await fetch("https://swapi.co/api/people/" + id)
        .then(res => res.json());
        console.log("p1")
    const p2 = await fetch(p1.films[0])
        .then(res => res.json());
        console.log("p2")
    const p3 = await fetch(p2.species[0])
        .then(res => res.json());
        console.log("p3")
    const p4 = await fetch(p3.homeworld)
        .then(res => res.json());
        console.log("p4")


    Promise.all([p1, p2, p3, p4])
        .then(console.log("Name: " + p1.name))
        .then(console.log("First Film: " + p2.title))
        .then(console.log("First Species: " + p3.name))
        .then(console.log("Homeworld of Species: " + p4.name))
}

getPlanetforFirstSpeciesInFirstMovieForPerson(1);
getPlanetforFirstSpeciesInFirstMovieForPerson(30);