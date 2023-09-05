import { useState } from "react";
import Friend from "./Friend";

function FriendsList({
  friendsArr,
  onCloseForm,
  onActive,
  isOpen,
  onSelectDash,
}) {
  const [active, setActive] = useState(null);

  return (
    <ul>
      {friendsArr.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          friendId={friend.id}
          onToggle={setActive}
          active={active}
          onCloseForm={onCloseForm}
          onActive={onActive}
          isOpen={isOpen}
          onSelectDash={onSelectDash}
        />
      ))}
    </ul>
  );
}
export default FriendsList;
