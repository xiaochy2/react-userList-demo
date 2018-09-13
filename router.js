const express    = require('express');        
const router = express.Router(); 
const User     = require('./user');

router.get('/', (req, res) => {
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.get('/users', (req, res) => {
    User.find((err, users) => {
        if (err) {
            res.send(err);
        }
        res.json(users);
    });
});

router.get('/users/:text', (req, res) => {
    const regex = new RegExp(escapeRegex(req.params.text), 'gi');
    User.find({ firstname:  regex},function(err,user){
        if (err) {
            res.send(err);
        }
        res.json(user);
    })
});

router.post('/users', (req, res) => {
    var user = new User();  
    // console.log(req.body.info);    
    user.firstname = req.body.info.firstname;  
    user.lastname = req.body.info.lastname; 
    user.sex = req.body.info.sex; 
    user.age = req.body.info.age; 
    user.password = req.body.info.password; 
    user.save(  err => {
        if (err) {
            res.send(err);
        };
        User.find((err, users) => {
            if (err) {
                res.send(err);
            }
            res.json(users);
        });
    });
    
});

router.put('/users/:id', (req, res) => {
    User.findById(req.params.id, (err, user) => {

        if (err) {
            res.send(err);
        }
        user.firstname = req.body.info.firstname;  
        user.lastname = req.body.info.lastname; 
        user.sex = req.body.info.sex; 
        user.age = req.body.info.age; 
        user.password = req.body.info.password;
        user.save(err =>  {
            if (err) {
                res.send(err);
            }
            User.find((err, users) => {
                if (err) {
                    res.send(err);
                }
                res.json(users);
            });
        });

    });
});

router.delete('/users/:id', (req, res) => {
    User.remove({
        _id: req.params.id
    }, (err, user) => {
        if (err) {
            res.send(err);
        }
        User.find((err, users) => {
            if (err) {
                res.send(err);
            }
            res.json(users);
        });
    });
});

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};
module.exports = router;
