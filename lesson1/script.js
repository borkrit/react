var CARS = [{
    id: 1,
    brand: "Audi",
    models: [{
        id: 1,
        name: "A1",
        collection: [{
            id: 1,
            version: "Sportback",
            year: 2019,
            horsepower: 95,
            engine: 999
        }, {
            id: 2,
            version: "Citycarver",
            year: 2019,
            horsepower: 95,
            engine: 999
        }]
    }, {
        id: 2,
        name: "Q5",
        collection: [{
            id: 1,
            version: "FY 2021",
            year: 2021,
            horsepower: 299,
            engine: 1984
        }, {
            id: 2,
            version: "Sportback",
            year: 2021,
            horsepower: 299,
            engine: 1984
        }]
    }, {
        id: 3,
        name: "TT",
        collection: [{
            id: 1,
            version: "Coupe",
            year: 2021,
            horsepower: 197,
            engine: 1984
        }, {
            id: 2,
            version: "Roadster",
            year: 2021,
            horsepower: 197,
            engine: 1984
        }]
    }]
}, {
    id: 2,
    brand: "BMW",
    models: [{
        id: 1,
        name: "8 series",
        collection: [{
            id: 1,
            version: "G1X LCI",
            year: 2022,
            horsepower: 333,
            engine: 2998
        }, {
            id: 2,
            version: "G1X",
            year: 2019,
            horsepower: 340,
            engine: 2998
        }]
    }, {
        id: 2,
        name: "X6",
        collection: [{
            id: 1,
            version: "G06 LCI",
            year: 2023,
            horsepower: 530,
            engine: 4395
        }, {
            id: 2,
            version: "G06",
            year: 2020,
            horsepower: 286,
            engine: 2993
        }]
    }]
}];

var Product = React.createElement(
    React.Fragment,
    null,
    React.createElement(
        "h1",
        null,
        "Car Specs"
    ),
    React.createElement(
        "table",
        null,
        React.createElement(
            "tbody",
            null,
            CARS.map(function (item, key) {
                return React.createElement(
                    React.Fragment,
                    { key: key },
                    React.createElement(
                        "tr",
                        { className: "car__brand" },
                        React.createElement(
                            "td",
                            { colSpan: "2", className: "car__brand" },
                            item.brand
                        )
                    ),
                    Object.keys(item.models).map(function (k, i) {
                        return React.createElement(
                            React.Fragment,
                            { key: i },
                            Object.keys(item.models[k].collection).map(function (e, j) {
                                return React.createElement(
                                    React.Fragment,
                                    { key: j },
                                    React.createElement(
                                        "tr",
                                        null,
                                        j === 0 ? React.createElement(
                                            "td",
                                            { rowSpan: 2, className: "cell__model" },
                                            item.models[k].name
                                        ) : null,
                                        React.createElement(
                                            "td",
                                            { className: "cell__info" },
                                            React.createElement(
                                                "ul",
                                                null,
                                                Object.keys(item.models[k].collection[e]).filter(function (el) {
                                                    return el !== 'id';
                                                }).map(function (el, l) {
                                                    return React.createElement(
                                                        "li",
                                                        { key: l },
                                                        el,
                                                        " : ",
                                                        item.models[k].collection[e][el]
                                                    );
                                                })
                                            )
                                        )
                                    )
                                );
                            })
                        );
                    })
                );
            })
        )
    )
);

var domContainer = document.querySelector('#root');
var root = ReactDOM.createRoot(domContainer);

root.render(Product);