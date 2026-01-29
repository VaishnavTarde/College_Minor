const express = require("express");
const router = express.Router();
const Club = require("../models/Club");
const protect = require("../middleware/authMiddleware");

/*
------------------------------------
GET ALL CLUBS (Everyone)
------------------------------------
GET /api/clubs
*/
router.get("/", async (req, res) => {
  try {
    const clubs = await Club.find();
    res.json(clubs);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch clubs" });
  }
});

/*
------------------------------------
CREATE CLUB (Teacher / Admin)
------------------------------------
POST /api/clubs
*/
router.post("/", async (req, res) => {
  try {
    const { name, description, members, meeting } = req.body;

    const club = new Club({
      name,
      description,
      members,
      meeting
    });

    await club.save();

    res.json({ message: "Club created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to create club" });
  }
});

/*
------------------------------------
UPDATE CLUB (Teacher / Admin)
------------------------------------
PUT /api/clubs/:id
*/
router.put("/:id", protect, async (req, res) => {
  try {
    await Club.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Club updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to update club" });
  }
});

/*
------------------------------------
DELETE CLUB (Teacher / Admin)
------------------------------------
DELETE /api/clubs/:id
*/
router.delete("/:id", protect, async (req, res) => {
  try {
    await Club.findByIdAndDelete(req.params.id);
    res.json({ message: "Club deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete club" });
  }
});

module.exports = router;
