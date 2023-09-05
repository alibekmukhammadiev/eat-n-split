import { useState } from "react";
import FriendsList from "./components/FriendList";
import FormAddFriend from "./components/FormAddFriend";
import Button from "./components/Button";
import FormSplitBill from "./components/FormSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friendName, setFriendName] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [friendsArr, setFriendsArr] = useState(initialFriends);
  const randomNum = Math.floor(Math.random() * (999999 - 0 + 1))
    .toString()
    .padStart(6, "0");
  const randomImgUrl = "https://i.pravatar.cc/48?u=" + randomNum;

  function handleToggle() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  function handleSelectDash(friendsName) {
    setFriendName(friendsName);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          onActive={setIsActive}
          onCloseForm={setIsOpen}
          friendsArr={friendsArr}
          isOpen={isOpen}
          isActive={isActive}
          onSelectDash={handleSelectDash}
        />
        <FormAddFriend
          onAddFriend={setFriendsArr}
          randomImgUrl={randomImgUrl}
          randomNum={randomNum}
          isOpen={isOpen}
          onCloseForm={setIsOpen}
        />
        <Button onClick={handleToggle}>
          {!isOpen ? "Add friend" : "Close"}
        </Button>
      </div>

      {isActive && (
        <FormSplitBill friendName={friendName} friendsArr={friendsArr} />
      )}
    </div>
  );
}
export default App;
