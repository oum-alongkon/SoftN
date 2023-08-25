import axios from './config'

const taskService = {};

taskService.getTasks = async ({ queryKey }) => {
    const { queryParams } = queryKey[queryKey.length - 1];
    // const {data} = await axios.get('/tasks', {
    //     params: {
    //         ...queryParams
    //     }
    // });
    var data
    if (queryParams.myTask.id===1) {
        data = {
            "tasks": [
                {
                    "id": 1,
                    "completed": true,
                    "description": "Make the homepage dynamic",
                    "tags": [
                        {
                            "id": 1,
                            "name": "HTML",
                            "color": "error"
                        },
                        {
                            "id": 2,
                            "name": "React",
                            "color": "success"
                        }
                    ],
                    "user": {
                        "id": 100,
                        "name": "Atul Midha",
                        "profilePic": "/images/avatar/avatar3.jpg"
                    },
                    "dueDate": "July 07, 2020"
                },
                {
                    "id": 2,
                    "completed": false,
                    "description": "Add the file formats in the data",
                    "tags": [
                        {
                            "id": 2,
                            "name": "React",
                            "color": "success"
                        },
                        {
                            "id": 3,
                            "name": "JavaScript",
                            "color": "info"
                        }
                    ],
                    "user": {
                        "id": 101,
                        "name": "Murli Swami",
                        "profilePic": "/images/avatar/avatar5.jpg"
                    },
                    "dueDate": "July 10, 2020"
                },
                {
                    "id": 3,
                    "completed": false,
                    "description": "Add new page in the website.",
                    "tags": [
                        {
                            "id": 1,
                            "name": "HTML",
                            "color": "error"
                        },
                        {
                            "id": 2,
                            "name": "React",
                            "color": "success"
                        },
                        {
                            "id": 4,
                            "name": "CSS",
                            "color": "warning"
                        }
                    ],
                    "user": {
                        "id": 102,
                        "name": "Tanmay Goswami",
                        "profilePic": "/images/avatar/avatar7.jpg"
                    },
                    "dueDate": "July 10, 2020"
                },
                {
                    "id": 4,
                    "completed": true,
                    "description": "Assign the task to John Doe",
                    "tags": [
                        {
                            "id": 3,
                            "name": "JavaScript",
                            "color": "info"
                        },
                        {
                            "id": 4,
                            "name": "CSS",
                            "color": "warning"
                        }
                    ],
                    "user": {
                        "id": 100,
                        "name": "Atul Midha",
                        "profilePic": "/images/avatar/avatar3.jpg"
                    },
                    "dueDate": "July 10, 2020"
                },
                {
                    "id": 5,
                    "completed": false,
                    "description": "Re-design the components",
                    "tags": [
                        {
                            "id": 4,
                            "name": "CSS",
                            "color": "warning"
                        }
                    ],
                    "user": {
                        "id": 100,
                        "name": "Atul Midha",
                        "profilePic": "/images/avatar/avatar3.jpg"
                    },
                    "dueDate": "July 06, 2020"
                },
                {
                    "id": 6,
                    "completed": true,
                    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    "tags": [
                        {
                            "id": 3,
                            "name": "JavaScript",
                            "color": "info"
                        },
                        {
                            "id": 4,
                            "name": "CSS",
                            "color": "warning"
                        }
                    ],
                    "user": {
                        "id": 101,
                        "name": "Murli Swami",
                        "profilePic": "/images/avatar/avatar5.jpg"
                    },
                    "dueDate": "July 10, 2020"
                },
                {
                    "id": 7,
                    "completed": true,
                    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    "tags": [
                        {
                            "id": 1,
                            "name": "HTML",
                            "color": "error"
                        },
                        {
                            "id": 2,
                            "name": "React",
                            "color": "success"
                        }
                    ],
                    "user": {
                        "id": 102,
                        "name": "Tanmay Goswami",
                        "profilePic": "/images/avatar/avatar7.jpg"
                    },
                    "dueDate": "July 10, 2020"
                },
                {
                    "id": 8,
                    "completed": false,
                    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    "tags": [
                        {
                            "id": 2,
                            "name": "React",
                            "color": "success"
                        },
                        {
                            "id": 3,
                            "name": "JavaScript",
                            "color": "info"
                        }
                    ],
                    "user": {
                        "id": 101,
                        "name": "Murli Swami",
                        "profilePic": "/images/avatar/avatar5.jpg"
                    },
                    "dueDate": "July 10, 2020"
                },
                {
                    "id": 9,
                    "completed": false,
                    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    "tags": [
                        {
                            "id": 4,
                            "name": "CSS",
                            "color": "warning"
                        }
                    ],
                    "user": {
                        "id": 100,
                        "name": "Atul Midha",
                        "profilePic": "/images/avatar/avatar3.jpg"
                    },
                    "dueDate": "July 06, 2020"
                },
                {
                    "id": 10,
                    "completed": true,
                    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    "tags": [
                        {
                            "id": 3,
                            "name": "JavaScript",
                            "color": "info"
                        },
                        {
                            "id": 4,
                            "name": "CSS",
                            "color": "warning"
                        }
                    ],
                    "user": {
                        "id": 100,
                        "name": "Atul Midha",
                        "profilePic": "/images/avatar/avatar3.jpg"
                    },
                    "dueDate": "July 05, 2020"
                },
                {
                    "id": 11,
                    "completed": false,
                    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    "tags": [
                        {
                            "id": 2,
                            "name": "React",
                            "color": "success"
                        }
                    ],
                    "user": {
                        "id": 100,
                        "name": "Atul Midha",
                        "profilePic": "/images/avatar/avatar3.jpg"
                    },
                    "dueDate": "July 04, 2020"
                }
            ],
            "taskTags": [
                {
                    "id": 1,
                    "name": "HTML",
                    "color": "error"
                },
                {
                    "id": 2,
                    "name": "React",
                    "color": "success"
                },
                {
                    "id": 3,
                    "name": "JavaScript",
                    "color": "info"
                },
                {
                    "id": 4,
                    "name": "CSS",
                    "color": "warning"
                }
            ]
        }
    }else{
        data = {
            "tasks": [
                {
                    "id": 1,
                    "completed": true,
                    "description": "Make the homepage dynamic",
                    "tags": [
                        {
                            "id": 1,
                            "name": "HTML",
                            "color": "error"
                        },
                        {
                            "id": 2,
                            "name": "React",
                            "color": "success"
                        }
                    ],
                    "user": {
                        "id": 100,
                        "name": "Atul Midha",
                        "profilePic": "/images/avatar/avatar3.jpg"
                    },
                    "dueDate": "July 07, 2020"
                },
                {
                    "id": 4,
                    "completed": true,
                    "description": "Assign the task to John Doe",
                    "tags": [
                        {
                            "id": 3,
                            "name": "JavaScript",
                            "color": "info"
                        },
                        {
                            "id": 4,
                            "name": "CSS",
                            "color": "warning"
                        }
                    ],
                    "user": {
                        "id": 100,
                        "name": "Atul Midha",
                        "profilePic": "/images/avatar/avatar3.jpg"
                    },
                    "dueDate": "July 10, 2020"
                },
                {
                    "id": 5,
                    "completed": false,
                    "description": "Re-design the components",
                    "tags": [
                        {
                            "id": 4,
                            "name": "CSS",
                            "color": "warning"
                        }
                    ],
                    "user": {
                        "id": 100,
                        "name": "Atul Midha",
                        "profilePic": "/images/avatar/avatar3.jpg"
                    },
                    "dueDate": "July 06, 2020"
                },
                {
                    "id": 9,
                    "completed": false,
                    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    "tags": [
                        {
                            "id": 4,
                            "name": "CSS",
                            "color": "warning"
                        }
                    ],
                    "user": {
                        "id": 100,
                        "name": "Atul Midha",
                        "profilePic": "/images/avatar/avatar3.jpg"
                    },
                    "dueDate": "July 06, 2020"
                },
                {
                    "id": 10,
                    "completed": true,
                    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    "tags": [
                        {
                            "id": 3,
                            "name": "JavaScript",
                            "color": "info"
                        },
                        {
                            "id": 4,
                            "name": "CSS",
                            "color": "warning"
                        }
                    ],
                    "user": {
                        "id": 100,
                        "name": "Atul Midha",
                        "profilePic": "/images/avatar/avatar3.jpg"
                    },
                    "dueDate": "July 05, 2020"
                },
                {
                    "id": 11,
                    "completed": false,
                    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    "tags": [
                        {
                            "id": 2,
                            "name": "React",
                            "color": "success"
                        }
                    ],
                    "user": {
                        "id": 100,
                        "name": "Atul Midha",
                        "profilePic": "/images/avatar/avatar3.jpg"
                    },
                    "dueDate": "July 04, 2020"
                }
            ],
            "taskTags": [
                {
                    "id": 1,
                    "name": "HTML",
                    "color": "error"
                },
                {
                    "id": 2,
                    "name": "React",
                    "color": "success"
                },
                {
                    "id": 3,
                    "name": "JavaScript",
                    "color": "info"
                },
                {
                    "id": 4,
                    "name": "CSS",
                    "color": "warning"
                }
            ]
        }
    }

    return data;
};

taskService.getTaskCategories = async () => {
    // const {data} = await axios.get('/tasks/categories');
    const data = {
        "taskCategories": [
            {
                "id": 1,
                "name": "All Tasks",
                "slug": "all-tasks"
            },
            {
                "id": 2,
                "name": "My Tasks",
                "slug": "my-tasks",
                "userId": 100
            }
        ]
    }
    return data;
};

export { taskService };
