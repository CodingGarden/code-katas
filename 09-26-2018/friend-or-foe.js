function friend(friends){
  // a place to store "real" friends
  const realFriends = [];
  // iterate over the friends
  for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    // if the friend name is length 4
    if (friend.length === 4) {
      // push into the real friends
      realFriends.push(friend);
    }
  }
  // return real friends
  return realFriends;
}

function friend(friends){
  const realFriends = [];
  friends.forEach(friend => {
    if (friend.length === 4) {
      realFriends.push(friend);
    }
  });
  return realFriends;
}

function friend(friends){
  return friends.filter(friend => {
    if (friend.length === 4) {
      return true;
    }
    return false;
  });
}

function friend(friends){
  return friends.filter(friend => {
    return friend.length === 4;
  });
}

function friend(friends){
  return friends.filter(friend => friend.length === 4);
}

function friend(friends){
  for (let i = friends.length - 1; i >= 0; i--) {
    const friend = friends[i];
    if (friend.length !== 4) {
      friends.splice(i, 1);
    }
  }
  return friends;
}

// Alca!
function friend(friends) {
  return friends.reduceRight((_, name, i, a) => {
    return (name.length !== 4 && a.splice(i, 1), a);
  }, null);
}

console.log(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"]);
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"]);
console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"]);
console.log(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"]);