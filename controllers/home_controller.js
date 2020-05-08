module.exports.home = function(req, res){
    console.log(req.cookies);
    res.cookie('user_id', 25);
    return res.render('index', {
        title: "Home"
    });
}
module.exports.threeDPrint = function(req, res){
    console.log(req.cookies);
    res.cookie('user_id', 25);
    return res.render('3dprint', {
        title: "3D-printng"
    });
}
module.exports.laser = function(req, res){
    console.log(req.cookies);
    res.cookie('user_id', 25);
    return res.render('laser', {
        title: "Laser"
    });
}