// localStorage.clear()

const employees = [
  {
    "id": 1,
    "firstName": "Arjun",
    "email": "a@a.com",
    "password": "123",
    "taskCount": {
      "active": 2,
      "new": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Task 1",
        "description": "Description for Task 1",
        "date": "2024-10-01",
        "category": "Category A",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Task 2",
        "description": "Description for Task 2",
        "date": "2024-10-02",
        "category": "Category B",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Task 3",
        "description": "Description for Task 3",
        "date": "2024-10-03",
        "category": "Category C",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Priya",
    "email": "employee2@example.com",
    "password": "123",
    "taskCount": {
      "active": 2,
      "new": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "title": "Task 1",
        "description": "Description for Task 1",
        "date": "2024-10-04",
        "category": "Category A",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Task 2",
        "description": "Description for Task 2",
        "date": "2024-10-05",
        "category": "Category B",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Task 3",
        "description": "Description for Task 3",
        "date": "2024-10-06",
        "category": "Category C",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Ravi",
    "email": "employee3@example.com",
    "password": "123",
    "taskCount": {
      "active": 1,
      "new": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Task 1",
        "description": "Description for Task 1",
        "date": "2024-10-07",
        "category": "Category A",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Task 2",
        "description": "Description for Task 2",
        "date": "2024-10-08",
        "category": "Category B",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Task 3",
        "description": "Description for Task 3",
        "date": "2024-10-09",
        "category": "Category C",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Sneha",
    "email": "employee4@example.com",
    "password": "123",
    "taskCount": {
      "active": 2,
      "new": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "title": "Task 1",
        "description": "Description for Task 1",
        "date": "2024-10-10",
        "category": "Category A",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Task 2",
        "description": "Description for Task 2",
        "date": "2024-10-11",
        "category": "Category B",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Task 3",
        "description": "Description for Task 3",
        "date": "2024-10-12",
        "category": "Category C",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Aditi",
    "email": "employee5@example.com",
    "password": "123",
    "taskCount": {
      "active": 2,
      "new": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "title": "Task 1",
        "description": "Description for Task 1",
        "date": "2024-10-13",
        "category": "Category A",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Task 2",
        "description": "Description for Task 2",
        "date": "2024-10-14",
        "category": "Category B",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Task 3",
        "description": "Description for Task 3",
        "date": "2024-10-15",
        "category": "Category C",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  }
];

const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
];


    export const setLocalStorage = () => {
        localStorage.setItem('employees', JSON.stringify(employees));
        localStorage.setItem('admin', JSON.stringify(admin));
    };


    export const getLocalStorage= () =>{
      const employees= JSON.parse(localStorage.getItem('employees'));
      const admin= JSON.parse(localStorage.getItem('admin'));

     return {employees,admin}
    }
  
  
  