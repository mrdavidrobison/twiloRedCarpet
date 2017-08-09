exports.handler = function(context, event, callback) {
  let twiml = new Twilio.twiml.VoiceResponse();

  // twiml.say('Thanks for contacting Red Carpet Car Wash customer service, we will get back to you as soon as possible. Have a great day.');
  twiml.play('https://labored-passenger-8620.twil.io/assets/Red_Carpet_Car_Wash_Thanks_For_Calling_Customer_Service.mp3');
  twiml.hangup();

  // Finish response and run callback
  callback(null, twiml);
};