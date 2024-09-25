const Contact = require("../models/contact.models");
const sendEmail = require("../config/sendMail");

exports.createContact = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    if(!name || !email || !message){
      return res.status(400).json({ message: "All Field Required!"});
    }
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    await sendEmail({ name, email, message });

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error details:", error);  
    res.status(500).json({ error: "Failed to send message", details: error.message });
  }
};
