const router = require("express").Router();
const SeatGeekAPI = require("../utils/SeatGeekAPI");
const seatGeekAPI = new SeatGeekAPI();

router.post("/api/seatgeek/search", function(req, res) {
    console.log(req.body.name);
    seatGeekAPI.asyncGetEventIdA(req.body.name).then(function(response){
        res.json(response);
    }).catch(function(err){
        console.log(err);
    })
})
// router.post("/api/seatgeek/search", async function(req, res) {
//     // console.log(req.body.name);
//     let response = await seatGeekAPI.asyncGetEventIdA(req.body.name);
//     let data = await response.json();
//     return data;
// });
// router.post("/api/seatgeek/search", async function(req, res) {
//     // console.log(req.body.name);
//     seatGeekAPI.asyncGetEventId(req.body.name).then(async(response) => return await response.json())
// });

module.exports = router;