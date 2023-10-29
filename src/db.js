export const comments = [
  {
    user: "user1",
    comment: "This app is awesome",
    replies: [
      {
        user: "user3",
        comment: "+1",
        replies: [
          {
            user: "user4",
            comment: "+2",
            replies: [
              {
                user: "user5",
                comment: "+3",
                replies: [{ user: "user11", comment: "+4", replies: [] }]
              },
              { user: "user6", comment: "+3", replies: [] },
              { user: "user7", comment: "+3", replies: [] }
            ]
          }
        ]
      }
    ]
  },
  {
    user: "user8",
    comment: "This app sucks",
    replies: [
      {
        user: "user9",
        comment: "+1",
        replies: [
          {
            user: "user10",
            comment: "+2",
            replies: [
              { user: "user11", comment: "+3", replies: [] },
              { user: "user12", comment: "+3", replies: [] },
              { user: "user13", comment: "+3", replies: [] }
            ]
          }
        ]
      }
    ]
  }
];
