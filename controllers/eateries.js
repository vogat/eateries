//Export the index fcn
module.exports = {
    index,
    show
};

const Eatery = require('../models/eatery');

function show(req, res) {
res.render('eateries/show', {
    eatery: Eatery.getOne(req.params.id)
});
}

//Index fcn
function index (req, res) {
    res.render('eateries/index', {
        eateries: Eatery.getAll()
    });
}