const express = require("express");
const router = express.Router();
const Event = require("../models/Event");
const protect = require("../middleware/authMiddleware");

/*
------------------------------------
GET ALL EVENTS (Everyone)
------------------------------------
GET /api/events
*/
router.get("/", async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch events" });
  }
});

/*
------------------------------------
CREATE EVENT (Teacher / Admin)
------------------------------------
POST /api/events
*/
router.post("/", protect, async (req, res) => {
  try {
    const { title, description, date, venue } = req.body;

    const event = new Event({
      title,
      description,
      date,
      venue
    });

    await event.save();

    res.json({ message: "Event created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to create event" });
  }
});

/*
------------------------------------
UPDATE EVENT (Teacher / Admin)
------------------------------------
PUT /api/events/:id
*/
router.put("/:id", protect, async (req, res) => {
  try {
    await Event.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Event updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to update event" });
  }
});

/*
------------------------------------
DELETE EVENT (Teacher / Admin)
------------------------------------
DELETE /api/events/:id
*/
router.delete("/:id", protect, async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete event" });
  }
});

module.exports = router;
