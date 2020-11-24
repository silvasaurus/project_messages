const MessageList = (props) => {
  let arr = [];

  const messageFunc = (i) => {
    let sender = "";
    if (props.viewData[i].sender_id === 1) {
      sender = "Teacher";
    } else if (props.viewData[i].sender_id === 2) {
      sender = "Student";
    }
    return (
      <div className="messages">
        <p>
          <b>{sender}</b>
        </p>
        <p>{props.viewData[i].time.slice(5, 16)}</p>
        <p>{props.viewData[i].content}</p>
        <hr></hr>
      </div>
    );
  };

  for (let i = 0; i < props.viewData.length; i++) {
    arr.push(messageFunc(i));
  }

  return (
    <div>
      <h3>Messages:</h3>
      {arr}
    </div>
  );
};

export default MessageList;
