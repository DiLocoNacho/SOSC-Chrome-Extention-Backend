const { Router } = require("express");
const router = Router();

const axios = require("axios");

router.post("/", async (req, res) => {
  try {
    const { webhook, message } = req.body;
    console.log(webhook, message);
    axios.post(webhook, message);

    res.json({
      success: true,
      data: req.body,
    });
  } catch (err) {
    console.log(err);
    res.json({ success: false, data: err });
  }
});

module.exports = router;
