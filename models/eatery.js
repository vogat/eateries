const eateries = [
    {id: 3226, name: "Burger Queen", country: "American", price: "$", address: "5 Pine St, Toronto"},
    {id: 5475, name: "Sushi King", country: "Japanese", price: "$$$", address: "11 Maple Blvd, Toronto"},
    {id: 9567, name: "West Side Marios", country: "Italian", price: "$$$", address: "43 Elm Ave, Toronto"}
];

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return eateries;
}

function getOne(id) {
    id = parseInt(id)
    return eateries.find(eatery => eatery.id === id);
}