// Mutual friends counter with Set

const UUSER_COUNT = 50000;
let usersA = [];
let usersB = [];

const createUser = (id) => ({ id: `user_${id}`, name: `User ${id}` });

for (let i = 0; i < UUSER_COUNT; i++) {
  usersA.push(createUser(i));
  usersB.push(createUser(i + 25000));
}

const GetMutualFriends = (usersA, usersB) => {
  const mutualFriends = [];
  const start = performance.now();

  //   ! O(n^2)
  //   usersA.forEach((userA) => {
  //     usersB.forEach((userB) => {
  //       if (userB.id === userA.id) {
  //         mutualFriends.push(userA);
  //       }
  //     });
  //   });
  //   * O(n)
  const idListed = new Set(usersA.map((user) => user.id));
  //   * O(n)
  usersA.forEach((userA) => {
    //   * O(1)
    if (idListed.has(userA.id)) {
      mutualFriends.push(userA);
    }
  });
  
  const end = performance.now();
  return { commonFriend: mutualFriends.length, takeTime: end - start };
};
console.log(GetMutualFriends(usersA, usersB));
