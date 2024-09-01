type UserInfo = {
  first: string;
  last: string;
  age: number;
};

type AccountDetails = {
  account: number;
  details: string;
};

type Userx = UserInfo & AccountDetails;


const ayo: Userx = {
    first: "name",
    last: "bami",
    age: 10,
    account: 123,
    details: "abuja"
}
