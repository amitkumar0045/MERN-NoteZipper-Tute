const express = require('express');
const { getNotes, createNote, getNoteById, UpdateNote, DeleteNote } = require('../controllers/noteController');
const { protect } = require('../middlewares/authMiddleWare')

const router = express.Router();

//\\--<read>--API
// router.route("/").get();
// router.route('/').get(getNotes)
router.route("/").get(protect, getNotes);  //using middleWare >> protect
//<<< needs to add token in postman of type "Bearer Token"

//\\--<createNote>--API
// router.route('/create').post()
router.route("/create").post(protect, createNote);

//\\--<get by ID>--API
// router.route("/:id").get(getNoteById);
// router.route("/:id").get(getNoteById).put(protect, UpdateNote);
router.route("/:id").get(getNoteById).put(protect, UpdateNote).delete(protect, DeleteNote);


//\\--<deleteNote>--API
// router.route('/:id').get().put().delete();

module.exports = router;