import { useState } from "react";
import Button from "./Button";

function FormAddFriend({
  onCloseForm,
  randomImgUrl,
  onAddFriend,
  randomNum,
  isOpen,
}) {
  const [friendName, setFriendName] = useState("");
  const [imgUrl, setImgUrl] = useState(randomImgUrl);

  function handleSubmit(e) {
    e.preventDefault();
    if (friendName.length === 0 || imgUrl.length === 0) return;
    let newFriend = {
      id: randomNum,
      name: friendName,
      image: imgUrl,
      balance: 0,
    };

    onAddFriend((prev) => [...prev, newFriend]);
    setImgUrl(randomImgUrl);
    setFriendName("");
    onCloseForm((prev) => !prev);
  }

  return (
    isOpen && (
      <form className="form-add-friend" onSubmit={handleSubmit}>
        <label>⛄ Friend name</label>
        <input
          value={friendName}
          onChange={(e) => setFriendName(e.target.value)}
          type="text"
        />

        <label>🌄 Image URL</label>
        <input
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
          type="text"
        />

        <Button>Add</Button>
      </form>
    )
  );
}
export default FormAddFriend;
