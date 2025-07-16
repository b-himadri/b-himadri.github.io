

db.employees.updateMany(
    {email: "john@gmail.com"}, 
    {$set: {name:Brian}},
    {upsert: true}
)

db.employees.updateMany(
    {email: "john@gmail.com"}, 
    {$pop: {skills:-1}}
)

db.employees.deleteOne({
    email:"brian@gmail.com"
})

db.employees.deleteMany(
    {department: "IT"}
)

// name email and salary of all the IT employees
db.employees.aggregate([
{$match: {department : "IT"}},

    {
        _id:0,
        name :1 , 
        email: 1, 
        salary :1
    }
]
    
)

// display annual salary of all employees

db.employees.find({
    _id:0,
    salary : 1
})

//calculate average age of student 

db.students.find([
    {
    $group: {
      _id: null,                
      averageAge: { $avg: "$age" } 
    }
  },
  {
    $project: {
      _id: 0,                   
      averageAge: 1   
    }
  }
])

db.students.updateOne(
    {$match : {$name : "Alice Johnson"}},
    {$set : { $age : 24}}
)

db.address.insertOne({
    
})