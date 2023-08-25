import axios from "./config";

const chatService = {};

chatService.getContacts = async () => {
    // const { data } = await axios.get("/chats/contacts");
    const data = {
        "contacts": [
            {
                "id": 2,
                "name": "Domnic Brown",
                "profile_pic": "/images/avatar/avatar5.jpg",
                "status": "online"
            },
            {
                "id": 3,
                "name": "Domnic Harris",
                "profile_pic": "/images/avatar/avatar4.jpg",
                "status": "offline"
            },
            {
                "id": 4,
                "name": "Garry Sobars",
                "profile_pic": "/images/avatar/avatar3.jpg",
                "status": "away"
            },
            {
                "id": 5,
                "name": "Jeson Born",
                "profile_pic": "/images/avatar/avatar7.jpg",
                "status": "away"
            },
            {
                "id": 6,
                "name": "Jimmy Jo",
                "profile_pic": "/images/avatar/avatar8.jpg",
                "status": "online"
            },
            {
                "id": 7,
                "name": "John Smith",
                "profile_pic": "/images/avatar/avatar9.jpg",
                "status": "away"
            },
            {
                "id": 8,
                "name": "Kadir M",
                "profile_pic": "/images/avatar/avatar10.jpg",
                "status": "online"
            },
            {
                "id": 9,
                "name": "Jimmy Jon",
                "profile_pic": "/images/avatar/avatar11.jpg",
                "status": "offline"
            },
            {
                "id": 10,
                "name": "Stella Johnson",
                "profile_pic": "/images/avatar/avatar12.jpg",
                "status": "offline"
            },
            {
                "id": 11,
                "name": "Steve Smith",
                "profile_pic": "/images/avatar/avatar13.jpg",
                "status": "online"
            }
        ]
    }
    return data;
};

chatService.getFavoriteConversations = async () => {
    // const {data} = await axios.get("/chats/favorite-conversations");
    const data = {
        "conversations": [
            {
                "id": 6502,
                "first_user_id": 3,
                "second_user_id": 1,
                "messages": [
                    {
                        "id": "7510",
                        "message_type": "text",
                        "message": "Hi, how are you doing?",
                        "sent_at": "12:27 AM",
                        "sent_date": "29 July",
                        "unread": true,
                        "sent_by": 3
                    },
                    {
                        "id": "7511",
                        "message_type": "text",
                        "message": "Hey, I'm good. Thanks!",
                        "sent_at": "12:29 AM",
                        "sent_date": "31 July",
                        "unread": true,
                        "sent_by": 1
                    },
                    {
                        "id": "7512",
                        "message_type": "text",
                        "message": "Did you try the new app I published a couple of hours ago?",
                        "sent_at": "12:33 AM",
                        "sent_date": "04 August",
                        "unread": false,
                        "sent_by": 3
                    },
                    {
                        "id": "7513",
                        "message_type": "text",
                        "unread": false,
                        "message": "Sorry, didn't get much chance today. Let me give it a try right away.",
                        "sent_at": "12:35 AM",
                        "sent_date": "06 August",
                        "sent_by": 3
                    },
                    {
                        "id": "7514",
                        "message_type": "text",
                        "message": "btw, shall I download a new version from TestFlight?",
                        "sent_at": "12:37 AM",
                        "sent_date": "08 August",
                        "unread": false,
                        "sent_by": 3
                    },
                    {
                        "id": "7515",
                        "message_type": "text",
                        "message": "Yes, you will need to do that :)",
                        "sent_at": "12:38 AM",
                        "sent_date": "09 August",
                        "unread": false,
                        "sent_by": 1
                    },
                    {
                        "id": "7516",
                        "message_type": "text",
                        "message": "Okay. I'm in.",
                        "sent_at": "12:39 AM",
                        "sent_date": "10 August",
                        "unread": false,
                        "sent_by": 3
                    },
                    {
                        "id": "7517",
                        "message_type": "text",
                        "message": "Wow! this new animation on splash screen looks awesome.",
                        "sent_at": "12:40 AM",
                        "sent_date": "11 August",
                        "unread": false,
                        "sent_by": 3
                    },
                    {
                        "id": "7519",
                        "message_type": "text",
                        "message": "Above are few feedback points but other than that all looks great.",
                        "sent_at": "12:43 AM",
                        "sent_date": "14 August",
                        "unread": false,
                        "sent_by": 3
                    },
                    {
                        "id": "7520",
                        "message_type": "text",
                        "message": "Sure thing. I will go through with these and will get back to you tomorrow.",
                        "sent_at": "12:44 AM",
                        "sent_date": "Yesterday",
                        "unread": false,
                        "sent_by": 1
                    }
                ],
                "contact": {
                    "id": 3,
                    "name": "Domnic Harris",
                    "profile_pic": "/images/avatar/avatar4.jpg",
                    "status": "offline"
                },
                "last_message": {
                    "id": "7520",
                    "message_type": "text",
                    "message": "Sure thing. I will go through with these and will get back to you tomorrow.",
                    "sent_at": "12:44 AM",
                    "sent_date": "Yesterday",
                    "unread": false,
                    "sent_by": 1
                }
            },
            {
                "id": 6503,
                "first_user_id": 4,
                "second_user_id": 1,
                "messages": [
                    {
                        "id": "7521",
                        "message_type": "text",
                        "message": "Did you get a chance to work on new tasks I assigned yesterday?",
                        "sent_at": "12:45 AM",
                        "sent_date": "16 August",
                        "unread": true,
                        "sent_by": 4
                    },
                    {
                        "id": "7522",
                        "message_type": "text",
                        "message": "Yes, I worked on couple of those but still have a lot to work on today :)",
                        "sent_at": "12:46 AM",
                        "sent_date": "17 August",
                        "unread": true,
                        "sent_by": 1
                    },
                    {
                        "id": "7523",
                        "message_type": "text",
                        "message": "Yeah I thought so. Hopefully, these all will be done by end of this week.",
                        "sent_at": "12:47 AM",
                        "sent_date": "18 August",
                        "unread": false,
                        "sent_by": 4
                    },
                    {
                        "id": "7524",
                        "message_type": "text",
                        "unread": false,
                        "message": "Yes, I believe so.",
                        "sent_at": "12:48 AM",
                        "sent_date": "19 August",
                        "sent_by": 1
                    },
                    {
                        "id": "7525",
                        "message_type": "text",
                        "message": "Okay then, I will get in touch with you at EOD.",
                        "sent_at": "12:49 AM",
                        "sent_date": "20 August",
                        "unread": false,
                        "sent_by": 4
                    },
                    {
                        "id": "7526",
                        "message_type": "text",
                        "message": "Perfect! have a wonderful day ahead.",
                        "sent_at": "12:50 AM",
                        "sent_date": "21 August",
                        "unread": false,
                        "sent_by": 4
                    }
                ],
                "contact": {
                    "id": 4,
                    "name": "Garry Sobars",
                    "profile_pic": "/images/avatar/avatar3.jpg",
                    "status": "away"
                },
                "last_message": {
                    "id": "7526",
                    "message_type": "text",
                    "message": "Perfect! have a wonderful day ahead.",
                    "sent_at": "12:50 AM",
                    "sent_date": "21 August",
                    "unread": false,
                    "sent_by": 4
                }
            },
            {
                "id": 6504,
                "first_user_id": 5,
                "second_user_id": 1,
                "messages": [
                    {
                        "id": "7527",
                        "message_type": "text",
                        "message": "Hey David! I'm about to connect with the marketing team in an hour.",
                        "sent_at": "12:51 AM",
                        "sent_date": "22 August",
                        "unread": true,
                        "sent_by": 5
                    },
                    {
                        "id": "7528",
                        "message_type": "text",
                        "message": "Is there anything for me to know before I head into the meeting?",
                        "sent_at": "12:52 AM",
                        "sent_date": "23 August",
                        "unread": true,
                        "sent_by": 5
                    },
                    {
                        "id": "7529",
                        "message_type": "text",
                        "message": "Hi, Nothing big but just a soft reminder to keep the new FAQ list we prepared to discuss with them.",
                        "sent_at": "12:53 AM",
                        "sent_date": "Yesterday",
                        "unread": false,
                        "sent_by": 1
                    },
                    {
                        "id": "7530",
                        "message_type": "text",
                        "unread": false,
                        "message": "Let me know if you want to review that list with me before the meeting?.",
                        "sent_at": "12:54 AM",
                        "sent_date": "Today",
                        "sent_by": 1
                    },
                    {
                        "id": "7531",
                        "message_type": "text",
                        "message": "No, I think I'm good with that.",
                        "sent_at": "12:52 AM",
                        "sent_date": "23 August",
                        "unread": false,
                        "sent_by": 5
                    }
                ],
                "contact": {
                    "id": 5,
                    "name": "Jeson Born",
                    "profile_pic": "/images/avatar/avatar7.jpg",
                    "status": "away"
                },
                "last_message": {
                    "id": "7531",
                    "message_type": "text",
                    "message": "No, I think I'm good with that.",
                    "sent_at": "12:52 AM",
                    "sent_date": "23 August",
                    "unread": false,
                    "sent_by": 5
                }
            }
        ]
    }
    return data;
};

chatService.getRecentConversations = async () => {
    // const { data } = await axios.get("/chats/recent-conversations");
    const data = {
        "conversations": [
            {
                "id": 6501,
                "first_user_id": 2,
                "second_user_id": 1,
                "messages": [
                    {
                        "id": "7501",
                        "message_type": "text",
                        "message": "It is a long established fact",
                        "sent_at": "12:06 AM",
                        "sent_date": "06 July",
                        "unread": true,
                        "sent_by": 2
                    },
                    {
                        "id": "7502",
                        "message_type": "text",
                        "message": "I must explain to you how all this mistaken idea of denouncing ",
                        "sent_at": "12:08 AM",
                        "sent_date": "08 July",
                        "unread": true,
                        "sent_by": 2
                    },
                    {
                        "id": "7503",
                        "message_type": "text",
                        "message": "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested",
                        "sent_at": "12:11 AM",
                        "sent_date": "11 July",
                        "unread": false,
                        "sent_by": 1
                    },
                    {
                        "id": "7504",
                        "message_type": "text",
                        "unread": false,
                        "message": "There are many variations of passages of ",
                        "sent_at": "12:14 AM",
                        "sent_date": "14 July",
                        "sent_by": 1
                    },
                    {
                        "id": "7505",
                        "message_type": "text",
                        "message": "All the Lorem Ipsum generators on the",
                        "sent_at": "12:15 AM",
                        "sent_date": "15 July",
                        "unread": false,
                        "sent_by": 2
                    },
                    {
                        "id": "7506",
                        "message_type": "text",
                        "message": "There are many variations of passages of ",
                        "sent_at": "12:21 AM",
                        "sent_date": "21 July",
                        "unread": false,
                        "sent_by": 2
                    },
                    {
                        "id": "7507",
                        "message_type": "text",
                        "message": "It is a long established fact",
                        "sent_at": "12:23 AM",
                        "sent_date": "23 July",
                        "unread": false,
                        "sent_by": 2
                    },
                    {
                        "id": "7508",
                        "message_type": "text",
                        "message": "The standard chunk of Lorem Ipsum used since the 1500s",
                        "sent_at": "12:26 AM",
                        "sent_date": "26 July",
                        "unread": false,
                        "sent_by": 2
                    }
                ],
                "contact": {
                    "id": 2,
                    "name": "Domnic Brown",
                    "profile_pic": "/images/avatar/avatar5.jpg",
                    "status": "online"
                },
                "last_message": {
                    "id": "7508",
                    "message_type": "text",
                    "message": "The standard chunk of Lorem Ipsum used since the 1500s",
                    "sent_at": "12:26 AM",
                    "sent_date": "26 July",
                    "unread": false,
                    "sent_by": 2
                }
            },
            {
                "id": 6502,
                "first_user_id": 3,
                "second_user_id": 1,
                "messages": [
                    {
                        "id": "7510",
                        "message_type": "text",
                        "message": "Hi, how are you doing?",
                        "sent_at": "12:29 AM",
                        "sent_date": "29 July",
                        "unread": true,
                        "sent_by": 3
                    },
                    {
                        "id": "7511",
                        "message_type": "text",
                        "message": "Hey, I'm good. Thanks!",
                        "sent_at": "12:31 AM",
                        "sent_date": "31 July",
                        "unread": true,
                        "sent_by": 1
                    },
                    {
                        "id": "7512",
                        "message_type": "text",
                        "message": "Did you try the new app I published a couple of hours ago?",
                        "sent_at": "12:35 AM",
                        "sent_date": "04 August",
                        "unread": false,
                        "sent_by": 3
                    },
                    {
                        "id": "7513",
                        "message_type": "text",
                        "unread": false,
                        "message": "Sorry, didn't get much chance today. Let me give it a try right away.",
                        "sent_at": "12:37 AM",
                        "sent_date": "06 August",
                        "sent_by": 3
                    },
                    {
                        "id": "7514",
                        "message_type": "text",
                        "message": "btw, shall I download a new version from TestFlight?",
                        "sent_at": "12:39 AM",
                        "sent_date": "08 August",
                        "unread": false,
                        "sent_by": 3
                    },
                    {
                        "id": "7515",
                        "message_type": "text",
                        "message": "Yes, you will need to do that :)",
                        "sent_at": "12:40 AM",
                        "sent_date": "09 August",
                        "unread": false,
                        "sent_by": 1
                    },
                    {
                        "id": "7516",
                        "message_type": "text",
                        "message": "Okay. I'm in.",
                        "sent_at": "12:41 AM",
                        "sent_date": "10 August",
                        "unread": false,
                        "sent_by": 3
                    },
                    {
                        "id": "7517",
                        "message_type": "text",
                        "message": "Wow! this new animation on splash screen looks awesome.",
                        "sent_at": "12:42 AM",
                        "sent_date": "11 August",
                        "unread": false,
                        "sent_by": 3
                    },
                    {
                        "id": "7519",
                        "message_type": "text",
                        "message": "Above are few feedback points but other than that all looks great.",
                        "sent_at": "12:45 AM",
                        "sent_date": "14 August",
                        "unread": false,
                        "sent_by": 3
                    },
                    {
                        "id": "7520",
                        "message_type": "text",
                        "message": "Sure thing. I will go through with these and will get back to you tomorrow.",
                        "sent_at": "12:46 AM",
                        "sent_date": "Yesterday",
                        "unread": false,
                        "sent_by": 1
                    }
                ],
                "contact": {
                    "id": 3,
                    "name": "Domnic Harris",
                    "profile_pic": "/images/avatar/avatar4.jpg",
                    "status": "offline"
                },
                "last_message": {
                    "id": "7520",
                    "message_type": "text",
                    "message": "Sure thing. I will go through with these and will get back to you tomorrow.",
                    "sent_at": "12:46 AM",
                    "sent_date": "Yesterday",
                    "unread": false,
                    "sent_by": 1
                }
            },
            {
                "id": 6503,
                "first_user_id": 4,
                "second_user_id": 1,
                "messages": [
                    {
                        "id": "7521",
                        "message_type": "text",
                        "message": "Did you get a chance to work on new tasks I assigned yesterday?",
                        "sent_at": "12:47 AM",
                        "sent_date": "16 August",
                        "unread": true,
                        "sent_by": 4
                    },
                    {
                        "id": "7522",
                        "message_type": "text",
                        "message": "Yes, I worked on couple of those but still have a lot to work on today :)",
                        "sent_at": "12:48 AM",
                        "sent_date": "17 August",
                        "unread": true,
                        "sent_by": 1
                    },
                    {
                        "id": "7523",
                        "message_type": "text",
                        "message": "Yeah I thought so. Hopefully, these all will be done by end of this week.",
                        "sent_at": "12:49 AM",
                        "sent_date": "18 August",
                        "unread": false,
                        "sent_by": 4
                    },
                    {
                        "id": "7524",
                        "message_type": "text",
                        "unread": false,
                        "message": "Yes, I believe so.",
                        "sent_at": "12:50 AM",
                        "sent_date": "19 August",
                        "sent_by": 1
                    },
                    {
                        "id": "7525",
                        "message_type": "text",
                        "message": "Okay then, I will get in touch with you at EOD.",
                        "sent_at": "12:51 AM",
                        "sent_date": "20 August",
                        "unread": false,
                        "sent_by": 4
                    },
                    {
                        "id": "7526",
                        "message_type": "text",
                        "message": "Perfect! have a wonderful day ahead.",
                        "sent_at": "12:52 AM",
                        "sent_date": "21 August",
                        "unread": false,
                        "sent_by": 4
                    }
                ],
                "contact": {
                    "id": 4,
                    "name": "Garry Sobars",
                    "profile_pic": "/images/avatar/avatar3.jpg",
                    "status": "away"
                },
                "last_message": {
                    "id": "7526",
                    "message_type": "text",
                    "message": "Perfect! have a wonderful day ahead.",
                    "sent_at": "12:52 AM",
                    "sent_date": "21 August",
                    "unread": false,
                    "sent_by": 4
                }
            },
            {
                "id": 6504,
                "first_user_id": 5,
                "second_user_id": 1,
                "messages": [
                    {
                        "id": "7527",
                        "message_type": "text",
                        "message": "Hey David! I'm about to connect with the marketing team in an hour.",
                        "sent_at": "12:53 AM",
                        "sent_date": "22 August",
                        "unread": true,
                        "sent_by": 5
                    },
                    {
                        "id": "7528",
                        "message_type": "text",
                        "message": "Is there anything for me to know before I head into the meeting?",
                        "sent_at": "12:54 AM",
                        "sent_date": "23 August",
                        "unread": true,
                        "sent_by": 5
                    },
                    {
                        "id": "7529",
                        "message_type": "text",
                        "message": "Hi, Nothing big but just a soft reminder to keep the new FAQ list we prepared to discuss with them.",
                        "sent_at": "12:55 AM",
                        "sent_date": "Yesterday",
                        "unread": false,
                        "sent_by": 1
                    },
                    {
                        "id": "7530",
                        "message_type": "text",
                        "unread": false,
                        "message": "Let me know if you want to review that list with me before the meeting?.",
                        "sent_at": "12:56 AM",
                        "sent_date": "Today",
                        "sent_by": 1
                    },
                    {
                        "id": "7531",
                        "message_type": "text",
                        "message": "No, I think I'm good with that.",
                        "sent_at": "12:54 AM",
                        "sent_date": "23 August",
                        "unread": false,
                        "sent_by": 5
                    }
                ],
                "contact": {
                    "id": 5,
                    "name": "Jeson Born",
                    "profile_pic": "/images/avatar/avatar7.jpg",
                    "status": "away"
                },
                "last_message": {
                    "id": "7531",
                    "message_type": "text",
                    "message": "No, I think I'm good with that.",
                    "sent_at": "12:54 AM",
                    "sent_date": "23 August",
                    "unread": false,
                    "sent_by": 5
                }
            }
        ]
    }
    return data;
};

chatService.getConversation = async ({ queryKey }) => {
    const { id } = queryKey[queryKey.length - 1];
    // const {data} = await axios.get("/chats/conversation", {
    //     conversationID: id
    // });
    const data = {
        "conversation": {
            "id": 6502,
            "first_user_id": 3,
            "second_user_id": 1,
            "messages": [
                {
                    "id": "7510",
                    "message_type": "text",
                    "message": "Hi, how are you doing?",
                    "sent_at": "12:33 AM",
                    "sent_date": "29 July",
                    "unread": true,
                    "sent_by": 3
                },
                {
                    "id": "7511",
                    "message_type": "text",
                    "message": "Hey, I'm good. Thanks!",
                    "sent_at": "12:35 AM",
                    "sent_date": "31 July",
                    "unread": true,
                    "sent_by": 1
                },
                {
                    "id": "7512",
                    "message_type": "text",
                    "message": "Did you try the new app I published a couple of hours ago?",
                    "sent_at": "12:39 AM",
                    "sent_date": "04 August",
                    "unread": false,
                    "sent_by": 3
                },
                {
                    "id": "7513",
                    "message_type": "text",
                    "unread": false,
                    "message": "Sorry, didn't get much chance today. Let me give it a try right away.",
                    "sent_at": "12:41 AM",
                    "sent_date": "06 August",
                    "sent_by": 3
                },
                {
                    "id": "7514",
                    "message_type": "text",
                    "message": "btw, shall I download a new version from TestFlight?",
                    "sent_at": "12:43 AM",
                    "sent_date": "08 August",
                    "unread": false,
                    "sent_by": 3
                },
                {
                    "id": "7515",
                    "message_type": "text",
                    "message": "Yes, you will need to do that :)",
                    "sent_at": "12:44 AM",
                    "sent_date": "09 August",
                    "unread": false,
                    "sent_by": 1
                },
                {
                    "id": "7516",
                    "message_type": "text",
                    "message": "Okay. I'm in.",
                    "sent_at": "12:45 AM",
                    "sent_date": "10 August",
                    "unread": false,
                    "sent_by": 3
                },
                {
                    "id": "7517",
                    "message_type": "text",
                    "message": "Wow! this new animation on splash screen looks awesome.",
                    "sent_at": "12:46 AM",
                    "sent_date": "11 August",
                    "unread": false,
                    "sent_by": 3
                },
                {
                    "id": "7519",
                    "message_type": "text",
                    "message": "Above are few feedback points but other than that all looks great.",
                    "sent_at": "12:49 AM",
                    "sent_date": "14 August",
                    "unread": false,
                    "sent_by": 3
                },
                {
                    "id": "7520",
                    "message_type": "text",
                    "message": "Sure thing. I will go through with these and will get back to you tomorrow.",
                    "sent_at": "12:50 AM",
                    "sent_date": "Yesterday",
                    "unread": false,
                    "sent_by": 1
                }
            ],
            "contact": {
                "id": 3,
                "name": "Domnic Harris",
                "profile_pic": "/images/avatar/avatar4.jpg",
                "status": "offline"
            },
            "last_message": {
                "id": "7520",
                "message_type": "text",
                "message": "Sure thing. I will go through with these and will get back to you tomorrow.",
                "sent_at": "12:50 AM",
                "sent_date": "Yesterday",
                "unread": false,
                "sent_by": 1
            }
        }
    }
    return data;
};

chatService.addConversationMessage = async (conversationDetail) => {
    const { data } = await axios.post('/chats/conversation/add-message', {
        conversationID: conversationDetail.conversationID,
        message: conversationDetail.message,
    });
    return data;
};

chatService.getConversationByContactID = async ({ queryKey }) => {
    const { id } = queryKey[queryKey.length - 1];
    // const { data } = await axios.get("/chats/contact/conversation", {
    //     contactID: id
    // });
    const data = {
        "conversation": {
            "id": 6504,
            "first_user_id": 5,
            "second_user_id": 1,
            "messages": [
                {
                    "id": "7527",
                    "message_type": "text",
                    "message": "Hey David! I'm about to connect with the marketing team in an hour.",
                    "sent_at": "12:59 AM",
                    "sent_date": "22 August",
                    "unread": true,
                    "sent_by": 5
                },
                {
                    "id": "7528",
                    "message_type": "text",
                    "message": "Is there anything for me to know before I head into the meeting?",
                    "sent_at": "01:00 AM",
                    "sent_date": "23 August",
                    "unread": true,
                    "sent_by": 5
                },
                {
                    "id": "7529",
                    "message_type": "text",
                    "message": "Hi, Nothing big but just a soft reminder to keep the new FAQ list we prepared to discuss with them.",
                    "sent_at": "01:01 AM",
                    "sent_date": "Yesterday",
                    "unread": false,
                    "sent_by": 1
                },
                {
                    "id": "7530",
                    "message_type": "text",
                    "unread": false,
                    "message": "Let me know if you want to review that list with me before the meeting?.",
                    "sent_at": "01:02 AM",
                    "sent_date": "Today",
                    "sent_by": 1
                },
                {
                    "id": "7531",
                    "message_type": "text",
                    "message": "No, I think I'm good with that.",
                    "sent_at": "01:00 AM",
                    "sent_date": "23 August",
                    "unread": false,
                    "sent_by": 5
                }
            ],
            "contact": {
                "id": 5,
                "name": "Jeson Born",
                "profile_pic": "/images/avatar/avatar7.jpg",
                "status": "away"
            },
            "last_message": {
                "id": "7531",
                "message_type": "text",
                "message": "No, I think I'm good with that.",
                "sent_at": "01:00 AM",
                "sent_date": "23 August",
                "unread": false,
                "sent_by": 5
            }
        }
    }
    return data;
};

export { chatService };
