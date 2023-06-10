const page = {
    name: "page",
    title: "pages",
    type: "document",
    fields: [
        {
            name: "title",
            title: "title",
            type: "string",
        },
        {
            name: "slug",
            title: "slug",
            type: "slug",
            option: {
                source: "title",
                maxLength: 100,
            },
        },
        {
            name: "content",
            title: "content",
            type: "array",
            of: [{ type: "block"}]
        },
    ],
};

export default page;