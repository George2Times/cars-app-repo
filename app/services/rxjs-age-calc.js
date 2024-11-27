"use strict";
// Skrypt RxJS do obliczenia średniego wieku osób mieszkających w Polsce
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Dane
var persons = [
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
var ages = [
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
var locations = [
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
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
// Obliczenie średniego wieku osób mieszkających w Polsce
(0, rxjs_1.from)(persons).pipe((0, operators_1.mergeMap)(function (person) {
    var personLocation = locations.find(function (location) { return location.person === person.id && location.country === "Poland"; });
    if (personLocation) {
        var personAge = ages.find(function (age) { return age.person === person.id; });
        return personAge ? [__assign(__assign({}, person), { age: personAge.age })] : [];
    }
    return [];
}), (0, operators_1.toArray)(), (0, operators_1.map)(function (polishPersons) {
    var totalAge = polishPersons.reduce(function (acc, person) { return acc + person.age; }, 0);
    return totalAge / polishPersons.length;
})).subscribe(function (avgAge) {
    console.log("Średni wiek osób mieszkających w Polsce:", avgAge);
});
