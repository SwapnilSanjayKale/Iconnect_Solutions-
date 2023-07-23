
const list1 = [
  { id: 1, name: "Arjun" },
  { id: 2, name: "Adwait" },
  { id: 3, name: "Swapnil" },
  { id: 4, name: "Amit" },
  { id: 5, name: "Vishal" },
  { id: 6, name: "Adnan" },
];

const list2 = [
  { id: 2, name: "Adwait" },
  { id: 7, name: "Laxman" },
  { id: 4, name: "Amit" },
  { id: 6, name: "Adnan" },
  { id: 7, name: "Nitin" },
  { id: 8, name: "Gaurav" },
];

// 1 to get unique users from List 1 that are not in List 2
function getUniqueUsers(list1, list2) {
  const set1 = new Set(list1.map(user => user.id));
  const set2 = new Set(list2.map(user => user.id));
  const uniqueUserIds = new Set([...set1].filter(userId => !set2.has(userId)));
  const uniqueUsers = list1.filter(user => uniqueUserIds.has(user.id));
  return uniqueUsers;
}
const uniqueUsersInList1 = getUniqueUsers(list1, list2);
console.log(uniqueUsersInList1);
console.log("Unique users from List1 that are not in List2");



// 2 to get unique users from List 2 that are not in List 1
function uniqueUsers(list1, list2) {
    const set1 = new Set(list1.map(user => user.id));
    const uniqueUsers = list2.filter(user => !set1.has(user.id));
    return uniqueUsers;
  } 
const uniqueUsersInList2 = uniqueUsers(list1, list2);
console.log(uniqueUsersInList2);
console.log("Unique users from List2 that are not in List1");



  // 3 to get the unique set of users from list1 and list2
  function getUniqueUsersl1l2(list1, list2) {
    // Create a Set for each list containing the user IDs
    const set1 = new Set(list1.map(user => user.id));
    const set2 = new Set(list2.map(user => user.id));
  
    // Perform intersection using the Set's built-in method
    const intersectionSet = new Set([...set1].filter(id => set2.has(id)));
  
    // Convert the intersectionSet back to an array of users
    const uniqueUsersl1l2 = list1.filter(user => intersectionSet.has(user.id));
    return uniqueUsersl1l2;
  }
  // Get the unique set of users who are present in both lists
  const uniqueUsersl1l2 = getUniqueUsersl1l2(list1, list2);
  console.log(uniqueUsersl1l2);
  console.log("Unique users from List1 and List2");

  