var Status;
(function (Status) {
    Status["SENT"] = "Sent";
    Status["DELIVERED"] = "Delivered";
    Status["READ"] = "Read";
})(Status || (Status = {}));
function sendMessage(msg) {
    msg.status = Status.SENT;
}
function deliverMessage(msg) {
    msg.status = Status.DELIVERED;
}
function readMessage(msg) {
    msg.status = Status.READ;
}
var textMessage = {
    type: "text",
    sender: "Bob",
    recipient: "Alice",
    timestamp: Date.now(),
    content: "Hello this is bob!",
};
var videoMessage = {
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
