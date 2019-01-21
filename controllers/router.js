const express = require('express');
const router = express.Router();
const LeaderData = require('../model/leaderSchema')

// index
router.get('/', (req,res) => {

    LeaderData.find({}, (err, allLeaders) => {
        if (err) {
            console.log(err);
        } else {
            res.render('index.ejs', {
                leaders: allLeaders
            });
        }
    });

});

// new
router.get('/new', (req,res) => {
    // get the new form
    res.render('new.ejs');
});

// show
router.get('/:id', (req,res) => {

    LeaderData.findById(req.params.id, (err, thisLeader) => {
        if (err) {
            console.log(err);
        } else {
            res.render('show.ejs', {
                leader: thisLeader
            });
        }
    });

});

// edit
router.get('/:id/edit', (req,res) => {
    
        LeaderData.findById(req.params.id, (err, thisLeader) => {
            if (err) {
                console.log(err);
            } else {
                res.render('edit.ejs', {
                    leader: thisLeader
                });
                console.log(`WE ADDED: ${thisLeader}`);
            }
        })

});

// create
router.post('/', (req,res) => {

    if (req.body.isAlive === 'on') {
        req.body.isAlive = true
    } else {
        req.body.isAlive = false
    }

    LeaderData.create(
        req.body, (err, thisLeader) => {
        if (err){
            console.log(err);
        } else {
            console.log(thisLeader);
            res.redirect('/leaders');
        }
    })
    
});

// update
router.put('/:id', (req,res) => {

    if (req.body.isAlive === 'on') {
        req.body.isAlive = true
    } else {
        req.body.isAlive = false
    }

    LeaderData.findByIdAndUpdate(req.params.id, req.body, (err, thisLeader) => {
        if (err){
            console.log(err);
        } else {
            console.log(`UPDATED: ${thisLeader}`);
            res.redirect('/leaders');
        }
    })

});

// delete
router.delete('/:id', (req,res) => {
    // delete this
    LeaderData.findByIdAndDelete(req.params.id, (err, thisLeader) => {
        if (err){
            console.log(err);
        } else {
            console.log(`DELETED: ${thisLeader}`);
            res.redirect('/leaders');
        }
    })

});



// LeaderData.create(
//     {
//         name: "Elon Musk",
//         country: "South Africa",
//         age: 40,
//         gender: 'm',
//         isAlive: true

//     }, (err, thisLeader) => {
//     if (err){
//         console.log(err);
//     } else {
//         console.log(thisLeader);
//         // res.redirect('/leaders');
//     }
// })

module.exports = router;