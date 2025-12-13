const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3500;

app.use(cors())
app.use(express.json())

let courses = require("./data/db.json").courses;

app.get("/api/courses", (req, res) => {
    res.json(courses);
});

app.get("/api/courses/:id", (req, res) => {
    const Id = parseInt(req.params.id);
    const course = courses.find((course) => course.cid === Id);
    if (!course) {
        return res.status(404).json({ message: "Course not found" });
    }
    res.json(course);
});

app.post("/api/courses", (req, res) => {
    const { cname, cdur } = req.body;
    const cid = courses.length ? courses[courses.length - 1].cid + 1 : 1;
    const newCourse = { cid, cname, cdur };
    courses.push(newCourse);
    res.status(201).json(newCourse);
});

app.put("/api/courses/:id", (req, res) => {
    const Id = parseInt(req.params.id);
    const { cname, cdur } = req.body;
    let course = courses.find((course) => course.cid === Id);
    if (!course) {
        return res.status(404).json({ message: "Course not found" });
    }
    course.cname = cname;
    course.cdur = cdur;
    res.json(course);
});

app.delete("/api/courses/:id", (req, res) => {
    const Id = parseInt(req.params.id);
    courses = courses.filter((course) => course.cid !== Id);
    res.json({ message: "Course deleted" });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});