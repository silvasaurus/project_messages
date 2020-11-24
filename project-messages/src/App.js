import "./App.css";
import React from "react";
import Form from "./Form";
import MessageList from "./MessageList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //usersData: [],
      messageData: [],
      viewMessages: [],
      newRecipient: "",
      newMessage: "",
    };
  }

  componentDidMount = async () => {
    const response = await fetch("http://localhost:7003/messages");
    const json = await response.json();
    this.setState({ messageData: json });
  };

  handleSend = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sender_id: 2,
        recipient_id: this.state.newRecipient,
        content: this.state.newMessage,
      }),
    };

    const response = await fetch(
      `http://localhost:7003/messages`,
      requestOptions
    );

    /*NOT NEEDED: Can Delete
    // const data = await response.json();
    // this.setState({
    //   messageData: this.state.messageData.concat(this.state.data),
    // }); */
  };

  handleRecipient = (event) => {
    event.preventDefault();
    this.setState({ newRecipient: event.target.value });
  };

  handleMessage = (event) => {
    event.preventDefault();
    this.setState({ newMessage: event.target.value });
  };

  handleViewAllMessages = (event) => {
    event.preventDefault();
    this.setState({ viewMessages: this.state.messageData });
  };

  render() {
    return (
      <div>
        <h2>Message Page</h2>

        <Form
          recipient={this.handleRecipient}
          message={this.handleMessage}
          onSubmit={this.handleSend}
          onView={this.handleViewMessages}
        />

        <MessageList viewData={this.state.messageData} />
      </div>
    );
  }
}

export default App;
