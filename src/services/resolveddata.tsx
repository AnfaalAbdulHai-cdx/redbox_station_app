export const ResolvedData = [
    {
        id: 3854637,
        customerName: "Abdelrahman M.",
        subtitle: "Ready by to be defined",
        itemsCount: 1,
        orderDate: "17 Nov",
        orderTime: "4PM",
        status: "Pack unprocessed",
        items: [
            {
                name: "Shirt on Hanger",
                image: require("../assets/Vector.png"),
                quantity: 1,
                issue: "Inspection - incorrect items",
                processedStatus: "Item will not be processed"
            },
            {
                name: "Bag STAYCNW",
                image: require("../assets/hanger.png"),
                quantity: 1,
                issue: "Inspection - incorrect items",
                processedStatus: "Confirm reprocessing of inspected items"
            }
        ]
    },
    {
        id: 3854638,
        customerName: "John D.",
        subtitle: "Ready by to be defined",
        itemsCount: 2,
        orderDate: "18 Nov",
        orderTime: "2PM",
        status: "Pack processed",
        items: [
            {
                name: "Jeans",
                image: require("../assets/Vector.png"),
                quantity: 1,
                issue: "Inspection - minor defect",
                processedStatus: "Item will be processed with minor adjustments"
            },
            {
                name: "T-shirt",
                image: require("../assets/hanger.png"),
                quantity: 1,
                issue: "Inspection - approved",
                processedStatus: "Item successfully processed"
            }
        ]
    }
];
