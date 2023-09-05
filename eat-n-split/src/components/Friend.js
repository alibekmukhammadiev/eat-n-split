import Button from "./Button";
function Friend({ friend, onCloseForm, isOpen, onActive, onSelectDash }) {
  function onSelect(id) {
    if (isOpen) onCloseForm((prev) => !prev);
    onActive((prev) => !prev);

    onSelectDash(friend.name);
  }
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <Button onClick={() => onSelect(friend.id)}>
        {true ? "Select" : "Close"}
      </Button>
    </li>
  );
}

export default Friend;
