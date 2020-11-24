const Form = (props) => {
  return (
    <div>
      <form onSubmit={props.onView}>
        <label>Compose New Message</label>
        <br></br>
        <input
          type="textarea"
          name="recipient"
          onChange={props.recipient}
          placeholder="Recipient"
        />
        <br></br>
        <br></br>
        <textarea
          name="messsage"
          onChange={props.message}
          placeholder="Type your message..."
        />
        <br></br>
        <button type="submit" onClick={props.onSubmit}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
