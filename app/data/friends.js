var friends = [ 
    {
        name: "Bill Nye",
        photo: "https://tamucc.edu/news/2015/07/images/DSS%20Bill%20Nye-350x441.jpeg",
        scores:[
            "5",
            "4",
            "4",
            "1",
            "2",
            "3",
            "4",
            "1",
            "3",
            "4"
        ]
    },
    {
        name: "Judias Buenoano",
        photo: "data:image/jpeg;base64,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",
        scores:[
            "2",
            "3",
            "4",
            "3",
            "5",
            "1",
            "2",
            "3",
            "2",
            "5"
        ]
    },
    {
        name: "Dennis Rodman",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8QebEy5fVpuTgltks-njv5ZI_H37XHsHxAmrsTRVd0oRX2MIYCw",
        scores:[
            "5",
            "3",
            "1",
            "3",
            "5",
            "2",
            "3",
            "1",
            "5",
            "2"
        ]
    },
    {
        name: "Kim Jung Un",
        photo: "https://media.newyorker.com/photos/5aeb586479f6430aaa0f9d19/master/w_727,c_limit/Wright-Kim-Jong-Un-Profile.jpg",
        scores:[
            "3",
            "4",
            "2",
            "3",
            "1",
            "1",
            "2",
            "5",
            "5",
            "1"
        ]
    },
    {
        name: "Aileen Wuonos",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Wuornos.jpg/220px-Wuornos.jpg",
        scores:[
            "3",
            "2",
            "2",
            "4",
            "5",
            "1",
            "2",
            "2",
            "3",
            "4"
        ]
    },
    {
        name: "Amelia Dyer",
        photo: "https://www.thefamouspeople.com/profiles/images/amelia-dyer-1.jpg",
        scores:[
            "1",
            "5",
            "2",
            "4",
            "2",
            "4",
            "2",
            "5",
            "3",
            "2"
        ]
    },
    {
        name: "Ted Bundy",
        photo: "https://www.biography.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTYxMjgxNzI3MjkxOTkyMDI4/theodore-bundy-walks-forward-and-waves-to-tv-camera-as-his-indictment-for-the-january-murders-of-fsu-coeds-lisa-levy-and-margaret-bowman-getty.jpg",
        scores:[
            "3",
            "4",
            "1",
            "5",
            "1",
            "3",
            "4",
            "2",
            "1",
            "4"
        ]
    },
    {
        name: "John Wayne Gacy",
        photo: "data:image/jpeg;base64,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",
        scores:[
            "3",
            "2",
            "4",
            "4",
            "2",
            "4",
            "2",
            "1",
            "1",
            "5"
        ]
    },
    {
        name: "Jeffrey Dahmer",
        photo: "https://www.thewrap.com/wp-content/uploads/2017/11/JeffreyDahmer.jpg",
        scores:[
            "3",
            "2",
            "5",
            "1",
            "3",
            "2",
            "4",
            "2",
            "1",
            "3"
        ]
    },
]

module.exports = friends;