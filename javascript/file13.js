//spread operator

let marks = {
    English: 85,
}

marks = {...marks, Math: 90, Science: 95 };
console.log("Updated Marks:", marks);

let students = ['Alice', 'Bob', 'Charlie'];
students = [...students, 'David', 'Eve'];
console.log("Updated Students:", students);