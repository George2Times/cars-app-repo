// Skrypt RxJS do obliczenia średniego wieku osób mieszkających w Polsce

// Dane
let persons = [
    {
        id: 1,
        name: "Jan Kowalski"
    },
    {
        id: 2,
        name: "John Doe"
    },
    {
        id: 3,
        name: "Jarek Kaczka"
    }
];

let ages = [
    {
        person: 1,
        age: 18
    },
    {
        person: 2,
        age: 24
    },
    {
        person: 3,
        age: 666
    }
];

let locations = [
    {
        person: 1,
        country: "Poland"
    },
    {
        person: 3,
        country: "Poland"
    },
    {
        person: 1,
        country: "USA"
    }
];

// Importowanie RxJS
import { from } from 'rxjs';
import { filter, map, mergeMap, toArray } from 'rxjs/operators';

// Obliczenie średniego wieku osób mieszkających w Polsce
from(persons).pipe(
    mergeMap(person => {
        const personLocation = locations.find(location => location.person === person.id && location.country === "Poland");
        if (personLocation) {
            const personAge = ages.find(age => age.person === person.id);
            return personAge ? [{ ...person, age: personAge.age }] : [];
        }
        return [];
    }),
    toArray(),
    map(polishPersons => {
        const totalAge = polishPersons.reduce((acc, person) => acc + person.age, 0);
        return totalAge / polishPersons.length;
    })
).subscribe(avgAge => {
    console.log("Średni wiek osób mieszkających w Polsce:", avgAge);
});
