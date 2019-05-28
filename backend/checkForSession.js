module.exports = (req, res, next) => {
    if (!req.session['eng']) {
        req.session['eng'] = null;
    }
    var checker = req.session['eng'].subscribe(eng => console.log("ENG GOT CHANGED!!!!", eng))
    next();
}