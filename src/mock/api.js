export const getToDoList = () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        json: () =>
          Promise.resolve([
            {
              id: "5fe3f4ca-193c-4170-83c1-cb5a19908601",
              title: "Buy food for dinner",
              completed: true,
            },
            {
              id: "f619466c-a016-4281-b584-7db2795d103d",
              title: "Call Marie at 10.00 PM",
              completed: false,
            },
            {
              id: "5fe3f4ca-193c-4170-83c1-cb5a19908602",
              title: "Write a react blog post",
              completed: false,
            },
          ]),
      });
    },500)
     // 200 + Math.random() * 300)
  );
};