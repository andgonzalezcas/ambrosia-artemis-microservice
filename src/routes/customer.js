const express = require('express')
const router = express.Router()

//importing controller
const customerController = require('../controllers/customer')

router.get('/', (req, res) => {
  res.json({
    '/getAll': "Returns all information on the db",
    '/getStudentGrades': 'With the student id on query parameter u can get a specific student grades',
    '/getCourseGrades': 'With the course id on query parameter u can get a specific course grades',
    "/add": "Create a new grade item with any values",
    "/modify": "Use to modify (we are working on this endpoint)",
    "/delete": "Delete an especific grade, just give us any query params like course_id, student_id or grade_id"
  })
})

router.get('/getAll', customerController.listAll)
router.get('/getStudentGrades', customerController.studentList)
router.get('/getCourseGrades', customerController.courseList)
router.post('/add', customerController.save)
router.post('/delete', customerController.delete)
router.put('/modify', customerController.edit)

module.exports = router;