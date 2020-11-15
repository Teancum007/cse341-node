exports.getPokemon = (req, res, next) => {
    res.status(200).json('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10');
};