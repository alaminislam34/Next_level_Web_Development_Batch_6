// spread operator

const friends = ["alamin", "rafi", "nahid"];
const schoolFriends = ["pintu", "nintu", "jontu"];
const collegeFriends = ["mantu", "kantu", "bantu"];

// it's not allow because friends is an array typescript not allow it
// friends.push(collegeFriends)

// its allow because typescript allow to push time use ... (spread operator)
friends.push(...schoolFriends);
friends.push(...collegeFriends);

console.log(friends);
