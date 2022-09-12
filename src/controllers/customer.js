const controller = {};

controller.listAll = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM grades', (err, grades) => {
      if (err) { res.json(err) }
      else { res.json(grades) }
    })
  })
}

controller.studentList = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM grades WHERE student_id = ?', [req.query.student_id], (err, grades) => {
      if (err) { res.json(err) }
      else { res.json(grades) }
    })
  })
}

controller.courseList = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM grades WHERE course_id = ?', [req.query.course_id], (err, grades) => {
      if (err) { res.json(err) }
      else { res.json(grades) }
    })
  })
}

controller.save = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('INSERT INTO grades set ?', [req.query], (err, rows) => {
      res.json(err || { success: true })
    })
  })
}

controller.delete = (req, res) => {
  // AQUI SE DEBE AGREGAR UNA POLITICA PARA CONTROL DE ACCESO (SOLO ADMINISTRATIVAS Y DOCENTES)

  req.getConnection((err, conn) => {
    req.query.grade_id
      ? conn.query('DELETE FROM grades WHERE grade_id = ?', [req.query.grade_id], (err, rows) => {
        res.json(err || { success: true })
      })
      : req.query.student_id && req.query.course_id
        ? conn.query('DELETE FROM grades WHERE student_id = ? AND course_id = ?', [req.query.student_id, req.query.course_id], (err, rows) => {
          res.json(err || { success: true })
        })
        : res.json({ success: false })
  })
}

controller.edit = (req, res) => {
  res.json({
    body: req.body,
    something: true,
    query: req.query
  })
  /* req.getConnection((err, conn) => {
    req.query.grade_id
      ? conn.query('UPDATE grades SET  WHERE grade_id = ?', [req.query.grade_id], (err, rows) => {
        res.json(err || { success: true })
      })
      : req.query.student_id && req.query.course_id
        ? conn.query('DELETE FROM grades WHERE student_id = ? AND course_id = ?', [req.query.student_id, req.query.course_id], (err, rows) => {
          res.json(err || { success: true })
        })
        : res.json({ success: false })
  }) */
}

module.exports = controller