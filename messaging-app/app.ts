enum Status {
    SENT = "Sent",
    DELIVERED = "Delivered",
    READ = "Read",
}

interface Require {
    sender: string;
    recipient: string;
    timestamp: number;
    status: Status;
}

interface Text extends Require {
    type: "text";
    content: string;
}

interface Image extends Require {
    type: "image";
    imageUrl: string;
    caption: string;
}

interface Video extends Require {
    type: "video";
    videoUrl: string;
    duration: number;
}

type Message = Text | Image | Video;

type Sender = "Alice" | "Bob" | "Charlie";
type Recipient = "Alice" | "Bob" | "Charlie";

function sendMessage(msg: Message): void {
    msg.status = Status.SENT;
}

function deliverMessage(msg: Message): void {
    msg.status = Status.DELIVERED;
}

function readMessage(msg: Message): void {
    msg.status = Status.READ;
}

const textMessage: Text = {
    type: "text",
    sender: "Bob",
    recipient: "Alice",
    timestamp: Date.now(),
    content: "Hello this is bob!",
    status : Status.SENT
};

const videoMessage: Video = {
    type: "video",
    sender: "Alice",
    recipient: "Bob",
    videoUrl: "https://www.youtube.com/watch?v=3bhkYoMWTFE",
    duration: 18,
};

console.log(textMessage.content);
sendMessage(textMessage);
readMessage(textMessage);

console.log(textMessage.status, "by:", textMessage.recipient);

console.log(videoMessage.videoUrl);
sendMessage(videoMessage);
readMessage(videoMessage);

console.log(videoMessage.status, "by:", videoMessage.recipient);
