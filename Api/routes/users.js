const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcryptjs");


//update user 
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            }
            catch (err) {
                return res.status(500).json(err);
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            res.status(200).json("Account has been updated");
        }
        catch (err) {
            return res.status(500).json(err);
        }
    }
    else {
        return res.status(403).json("You can update on your account!");
    }
});

//delete user 
router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Account has been deleted");
        }
        catch (err) {
            return res.status(500).json(err);
        }
    }
    else {
        return res.status(403).json("You can delete on your account!");
    }
});


//get a user
router.get("/", async (req, res) => {
    const userId = req.query.userId;
    const username = req.query.username;
    console.log(username);
    try {
        const user = await User.findOne({ username: username });
        const { password, updatedAt, ...other } = user;
        res.send(user);
        res.status(200).json(other)
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;