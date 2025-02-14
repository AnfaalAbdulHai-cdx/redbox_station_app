export const dummyData = {
    title: "Red Today",
    tshirtNumber: 6, // Added this
    readyOrders: 8,
    showOnly: ["11 AM", "4 PM"],
    dueOrders: {
      total: 2,
      orders: [
        { id: 1, type: "Orders", count: 2 },
        { id: 2, type: "Clothes", count: 3 },
      ],
    },
    startProcessingToday: [
      { id: 1, name: "Prioritized Future Orders", count: 1 },
      { id: 2, name: "Inspect", count: 1 },
    ],
  };
  