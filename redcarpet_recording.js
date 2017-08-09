exports.handler = function(context, event, callback) {
  let twiml = new Twilio.twiml.VoiceResponse();

  // twiml.say('Thanks for contacting Red Carpet Car Wash customer service, we will get back to you as soon as possible. Have a great day.');
  gather.play('https://labored-passenger-8620.twil.io/assets/Red_Carpet_Car_Wash_Thanks_For_Calling.mp3');
  gather.play('https://labored-passenger-8620.twil.io/assets/Red_Carpet_Car_Wash_Thanks_For_Calling_Customer_Service.mp3');
  gather.play('https://labored-passenger-8620.twil.io/assets/Red_Carpet_Car_Wash_Message_For_Customer_Service.mp3');
  gather.play('https://labored-passenger-8620.twil.io/assets/Red_Carpet_Car_Wash_Leave_A_Message.mp3');
  gather.play('https://labored-passenger-8620.twil.io/assets/Red_Carpet_Car_Wash_Goodbye.mp3');
  gather.play('https://labored-passenger-8620.twil.io/assets/Red_Carpet_Car_Wash_Didnt_Hear_Response.mp3');
  gather.play('https://labored-passenger-8620.twil.io/assets/Red_Carpet_Car_Wash_Connect_To_ThousandOaks.mp3');
  gather.play('https://labored-passenger-8620.twil.io/assets/Red_Carpet_Car_Wash_Connect_To_ConogaPark.mp3');
  gather.play('https://labored-passenger-8620.twil.io/assets/Red_Carpet_Car_Wash_Connect_To_ManhattanBeach.mp3');
  gather.play('https://labored-passenger-8620.twil.io/assets/Red_Carpet_Car_Wash_Call_ThousandOaks.mp3');
  gather.play('https://labored-passenger-8620.twil.io/assets/Red_Carpet_Car_Wash_Call_ConogaPark.mp3');
  gather.play('https://labored-passenger-8620.twil.io/assets/Red_Carpet_Car_Wash_Call_ManhattanBeach.mp3');
  twiml.hangup();

  // Finish response and run callback
  callback(null, twiml);
};
