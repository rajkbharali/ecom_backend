const router = require('express').Router()

router.get("/men", (req,res) => {
    res.send("MEN")
})

router.get("/women", (req,res) => {
    res.send("WOMEN")
})

router.get("/kids", (req,res) => {
    res.send("KIDS")
})

module.exports = router;