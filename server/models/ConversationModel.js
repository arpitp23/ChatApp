const mongoose = require("mongoose");

const messsageSchema = new mongoose.Schema({
    test : {
        type : String,
        default : ""
    },
    imageUrl : {
        type : String,
        default : ""
    },
    videoUrl : {
        type : String,
        default : ""
    },
    seen : {
        type : Boolean,
        default : false
    }
}, {    
    timestamps : true
});



const conversationSchema = new mongoose.Schema({
    sender : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "User"
    },
    receiver : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "User"
    },
    messages : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Message"
    }]
}, {
    timestamps : true
});
const MessageModel = mongoose.model("Message", messageSchema);
const ConversationModel = mongoose.model("Conversation", conversationSchema);
module.exports = { MessageModel, ConversationModel };