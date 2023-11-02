import express from "express";
let router = express.Router();
router.get('/test', (req, res) => {
    console.log("This is a test");
    res.send("Can Reach Categories Route!");
});
export default router;
//# sourceMappingURL=categories.js.map