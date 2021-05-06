const USERS = [
  {
    id: "1",
    name: "Norah"
  },
  {
    id: "2",
    name: "Alyx"
  }
];

const ACCOUNTS = [
  {
    account: "IRA-4679",
    user: "1",
    balance: "5175.36"
  },
  {
    account: "AAA-3571",
    user: "1",
    balance: "3896342.08"
  },
  {
    account: "AAA-4671",
    user: "1",
    balance: "138971.19"
  },
  {
    account: "ROT-1687",
    user: "2",
    balance: "2686.00"
  },
  {
    account: "AAA-7894",
    user: "2",
    balance: "68761.32"
  },
  {
    account: "IRA-6818",
    user: "2",
    balance: "564.67"
  },
  {
    account: "IRA-6819",
    user: "2",
    balance: "4564.67"
  }
];

function formatList(usersList, accountsList) {
  let formattedList = [];
  usersList.forEach(item => {
    accountsList.forEach(row => {
      if (row.user === item.id) {
        formattedList.push(`${item.name} ${row.account} ${row.balance}`);
      }
    });
  });
  console.log(formattedList); // prints ["Norah IRA-4679 5175.36", etc...]
}
// calling formatlist with users and accounts list
formatList(USERS, ACCOUNTS);

function modifyInfo(usersList, accountsList, ...args) {
  let filterWithProp = args[0];
  let filterWithValue = args[1];
  let accountType = args[2];
  let sortType = args[3];
  let filteredValues = [];
  if (filterWithProp && filterWithValue) {
    usersList.forEach(item => {
      accountsList.forEach(account => {
        if (
          item[filterWithProp] === filterWithValue &&
          item["id"] === account["user"]
        ) {
          accountType.forEach(type => {
            if (account["account"].includes(type)) {
              filteredValues.push(account);
            }
          });
        }
      });
    });
  }
  if (sortType === "ascending") {
    filteredValues.sort(
      (itemOne, itemTwo) => itemOne.balance - itemTwo.balance
    ); // For ascending sort
  }
  if (sortType === "descending") {
    filteredValues.sort(
      (itemOne, itemTwo) => itemTwo.balance - itemOne.balance
    ); // For descending sort
  }
  console.log(filteredValues);
}
modifyInfo(
  USERS,
  ACCOUNTS,
  "name",
  "Norah",
  ["IRA", "ROT", "AAA"],
  "ascending"
);
modifyInfo(
  USERS,
  ACCOUNTS,
  "name",
  "Norah",
  ["IRA", "ROT", "AAA"],
  "descending"
);
