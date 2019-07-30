const db = require('../../config/db');

exports.getAll = function(done){
    db.getPool().query('SELECT * FROM User', function(err,rows){
        if (err) return done({"ERROR 2":err});
        return done(rows);
    });
};

exports.getSearch = function(done){
    db.getPool().query('SELECT * FROM User', function(err,rows){
        if (err) return done({"ERROR 2":err});
        return done(rows);
    });
};


exports.create = function(newuser,done){
    let values = [newuser[0],newuser[1],newuser[2],newuser[3],newuser[4]];
    db.getPool().query("INSERT INTO User (`username`, `email`, `given_name`, `family_name`, `password`) VALUES (?)", [values], function (err,result){
        if (err) return done(err);
        done(result);
    });
};

exports.remove = function(userId, done){
    db.getPool().query('DELETE FROM User WHERE user_id = ?', userId, function (err,rows){
        if (err) return done(err);
        done(rows);
    });
};


exports.modify = function(values, done){
    db.getPool().query('UPDATE User SET `given_name`=?,`family_name`=?,`password`=? WHERE user_id = ?', values, function (err,rows){
        if (err) return done(err);
        done(rows);
    });
};
