// static user details

//fav:[book ids]
//history:[{bookid, date}]
let userData = [

    {
        userId: 10,
        password: "123456",
        name: "Pallala Venkatesh",
        username: "venky",
        isAdmin: true,
        
        
        fav: [0, 1, 2],
        history: [
            {id:0, date:"10:42 10-Dec-2021"},
            {id:1, date:"10:42 9-Dec-2021"},
        ],
        wishlist: [0, 1]

    },

    {
        userId: 11,
        password: "123456",
        name: "Sreekanth Ram",
        username: "sreekanth",
        isAdmin: true,

        fav: [1, 2],
        history: [
            {id:1, date:"10:42 5-Dec-2021"},
            {id:2, date:"11:42 6-Dec-2021"},
        ],
        wishlist: [1, 2],

    },

    {
        userId: 12,
        password: "123456",
        name: "Rohith Haridasula",
        username: "rohit",
        isAdmin: true,

        fav: [2, 4],
        history: [
            {id:2, date:"10:42 9-Dec-2021"},
            {id:3, date:"10:42 9-Dec-2021"},
        ],
        wishlist: [1, 2],

    },
  ];


module.exports = { userData : userData };
