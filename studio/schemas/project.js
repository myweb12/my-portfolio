export default {
    name:"project",
    title:"Project",
    type:"document",
    fields: [
        {
            name:"title",
            type:"string",

        },
        {
            name:"date",
            type:"datetime",

        },
        {
            name:"place",
            type:"string"
        },
        {
            name:"description",
            type:"text"

        },
        {
            name:"projecttype",
            title:"Project type",
            type:"string",
            options: {
                list: [
                    {value:"personal", title: "Personal"},
                    {value:"Business", title: "Business"},
                    {value:"School", title: "School"},
                    {value:"university", title: "University"},
                    {value:"client", title: "Client"},
                    
                ]
            },
        },
        {
            name:"link",
            type:"url",
        },
        {
            name: "tags",
            type:"array",
            of:[
                {
                    type:"string",
                },
            ],
            options: {
                layouts:"tags",

            },

        },
         
    ],
}