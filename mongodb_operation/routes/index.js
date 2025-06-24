var express = require('express');
var router = express.Router();
var student = require('./users');

/* GET home page. */
router.get('/', function (req, res) {
//   const studentsData = [
//   {
//     firstname: "Ayaan",
//     lastname: "Sharma",
//     age: 21,
//     slogan: "Keep it cool!",
//     hobbies: ["football", "reading"]
//   },
//   {
//     firstname: "Nisha",
//     lastname: "Verma",
//     age: 19,
//     slogan: "Chase your dreams.",
//     hobbies: ["painting", "cycling"]
//   },
//   {
//     firstname: "Rohan",
//     lastname: "Kumar",
//     age: 23,
//     slogan: "Live and let live.",
//     hobbies: ["gaming", "coding"]
//   },
//   {
//     firstname: "Meera",
//     lastname: "Patel",
//     age: 20,
//     slogan: "Smile more!",
//     hobbies: ["photography", "writing"]
//   },
//   {
//     firstname: "Kabir",
//     lastname: "Gupta",
//     age: 18,
//     slogan: "Think big!",
//     hobbies: ["blogging", "music"]
//   },
//   {
//     firstname: "Sana",
//     lastname: "Khan",
//     age: 22,
//     slogan: "Be your best self.",
//     hobbies: ["cooking", "yoga"]
//   },
//   {
//     firstname: "Arjun",
//     lastname: "Joshi",
//     age: 21,
//     slogan: "Push the limits.",
//     hobbies: ["trekking", "fitness"]
//   },
//   {
//     firstname: "Priya",
//     lastname: "Mehta",
//     age: 20,
//     slogan: "Dream it. Do it.",
//     hobbies: ["dancing", "sketching"]
//   },
//   {
//     firstname: "Dev",
//     lastname: "Chopra",
//     age: 24,
//     slogan: "Never give up.",
//     hobbies: ["investing", "technology"]
//   },
//   {
//     firstname: "Ananya",
//     lastname: "Reddy",
//     age: 19,
//     slogan: "Kindness matters.",
//     hobbies: ["volunteering", "traveling"]
//   }
// ];

// // Insert into DB
// student.insertMany(studentsData)
//   .then(() => console.log("10 students added successfully"))
//   .catch(err => console.error("Error inserting students:", err));
  res.render('index');
});


router.get('/create', async function (req, res) {
  var studentdata =  await student.create({
    firstname: "Raja",
    lastname: "Rao",
    age: 30,
    slogan: "Nothing",
    hobbies: [
      "Eating",
      "Sleeping"
    ],
    joining_date: "2022-04-05"
  });
  res.send(studentdata);  
});

router.get('/find', async function (req, res) {
  // var mydata = new RegExp('^$',"i");
  // var studentdata =  await student.find({"firstname": mydata});

  // var studentdata = await student.find({"firstname" : "Zafar"});

  // var studentdata = await student.find({"firstname" : "zafar"});

  // var data = new RegExp(search,mode);
  // var data = new RegExp("Raj",'i');

  // var data = new RegExp("^Raj",'i');
  // var data = new RegExp("^Raj$",'i');

  // var studentdata = await student.find();
  
  // var data = new RegExp("Js",'i');
  // var studentdata = await student.find({"hobbies" : {$all : data}});

  // var d1 = new Date("2022-04-03");
  // var d2 = new Date("2022-04-05");

  // var studentdata = await student.find({"joining_date" : {
  //   $gte : d1,
  //   $lte : d2
  // }});
  


  res.send(studentdata);  
});

module.exports = router;






/*
const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
  title: String,
  instructor: String,
  duration: Number, // in hours
  level: String, // Beginner, Intermediate, Advanced
  rating: Number,
  tags: {
    type: Array,
    default: []
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

const Course = mongoose.model('Course', courseSchema);



/-----------/
const courseData = [
  {
    title: "JavaScript Basics",
    instructor: "John Smith",
    duration: 15,
    level: "Beginner",
    rating: 4.3,
    tags: ["JavaScript", "Programming"]
  },
  {
    title: "Node.js Complete Guide",
    instructor: "Sarah Khan",
    duration: 22,
    level: "Intermediate",
    rating: 4.6,
    tags: ["Node", "Backend"]
  },
  {
    title: "Python for Data Science",
    instructor: "Aman Verma",
    duration: 35,
    level: "Advanced",
    rating: 4.8,
    tags: ["Python", "Data", "ML"]
  },
  {
    title: "React Crash Course",
    instructor: "Meena Das",
    duration: 18,
    level: "Beginner",
    rating: 4.5,
    tags: ["React", "Frontend"]
  },
  {
    title: "MongoDB Essentials",
    instructor: "Kiran Rao",
    duration: 12,
    level: "Intermediate",
    rating: 4.2,
    tags: ["MongoDB", "Database"]
  },
  {
    title: "HTML & CSS Mastery",
    instructor: "Ritika Sen",
    duration: 10,
    level: "Beginner",
    rating: 4.1,
    tags: ["HTML", "CSS"]
  },
  {
    title: "Express.js Deep Dive",
    instructor: "Naveen Joshi",
    duration: 20,
    level: "Intermediate",
    rating: 4.4,
    tags: ["Express", "Node"]
  },
  {
    title: "C++ Programming",
    instructor: "Devendra Chauhan",
    duration: 30,
    level: "Advanced",
    rating: 4.7,
    tags: ["C++", "OOP"]
  },
  {
    title: "Machine Learning Intro",
    instructor: "Neha Kapoor",
    duration: 25,
    level: "Intermediate",
    rating: 4.6,
    tags: ["ML", "AI"]
  },
  {
    title: "Django Full Stack",
    instructor: "Rahul Agarwal",
    duration: 28,
    level: "Advanced",
    rating: 4.9,
    tags: ["Django", "Python"]
  },
  {
    title: "DevOps Essentials",
    instructor: "Pooja Shah",
    duration: 24,
    level: "Intermediate",
    rating: 4.3,
    tags: ["DevOps", "CI/CD"]
  },
  {
    title: "AWS for Beginners",
    instructor: "Zeeshan Ali",
    duration: 20,
    level: "Beginner",
    rating: 4.2,
    tags: ["AWS", "Cloud"]
  },
  {
    title: "Flutter App Development",
    instructor: "Sneha Kulkarni",
    duration: 26,
    level: "Intermediate",
    rating: 4.5,
    tags: ["Flutter", "Mobile"]
  },
  {
    title: "Java Masterclass",
    instructor: "Shubham Yadav",
    duration: 35,
    level: "Advanced",
    rating: 4.8,
    tags: ["Java", "Backend"]
  },
  {
    title: "UI/UX Design Basics",
    instructor: "Anjali Rao",
    duration: 14,
    level: "Beginner",
    rating: 4.0,
    tags: ["Design", "Figma"]
  },
  {
    title: "SQL Fundamentals",
    instructor: "Ravi Mishra",
    duration: 16,
    level: "Beginner",
    rating: 4.1,
    tags: ["SQL", "Database"]
  },
  {
    title: "Angular in Depth",
    instructor: "Komal Singh",
    duration: 22,
    level: "Intermediate",
    rating: 4.4,
    tags: ["Angular", "Frontend"]
  },
  {
    title: "Cybersecurity Basics",
    instructor: "Ajay Rana",
    duration: 20,
    level: "Beginner",
    rating: 4.3,
    tags: ["Security", "Ethical Hacking"]
  },
  {
    title: "Kubernetes Bootcamp",
    instructor: "Divya Thakur",
    duration: 30,
    level: "Advanced",
    rating: 4.7,
    tags: ["Kubernetes", "Cloud"]
  },
  {
    title: "TypeScript Essentials",
    instructor: "Harshita Mehta",
    duration: 18,
    level: "Intermediate",
    rating: 4.5,
    tags: ["TypeScript", "JavaScript"]
  }
];

// Insert into MongoDB
Course.insertMany(courseData)
  .then(() => console.log("20 courses added successfully"))
  .catch(err => console.error("Error inserting courses:", err));



*/

/*
Here’s the **Questions List (only)** for the `Course` schema based on your request:

---

### 📋 **10 Query-Based Questions on Course Schema**

1. Find all courses where the **title starts with "React"** (case-insensitive).

2. Find courses with **instructor name exactly "Sarah Khan"**.

3. Find courses where **level is "Beginner"**, case-insensitive match.

4. Find courses where **"Python" is included in the title** (partial match, case-insensitive).

5. Find all courses **created between "2024-01-01" and "2025-01-01"**.

6. Find courses where **rating is greater than or equal to 4.5**.

7. Find courses with tags that include **"JavaScript"**, using regex.

8. Find courses where tags contain **both "HTML" and "CSS"** using `$all`.

9. Find courses with any word in the title that **starts with "Dev"**.

10. Fetch **all courses without any filters**.

---

Let me know if you want a separate list for update/delete operations too.

*/