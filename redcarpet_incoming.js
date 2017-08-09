exports.handler = function (context, event, callback) {
  let twiml = new Twilio.twiml.VoiceResponse();

  // Initial welcome message and menu options selection
  const gather = twiml.gather({
    input: 'dtmf',
    numDigits: 1,
    action: '/redcarpet_response',
    timeout: 3
  });

  // gather.say('Thanks for calling Red Carpet Car Wash, home of the best clean in California.');
  // gather.say('To call our Manhattan Beach location press 1.');
  // gather.say('To call our Canoga Park location press 2.');
  // gather.say('To call our Thousand Oaks location press 3.');
  // gather.say('To leave a message with our customer service department press 0.');

  gather.play('https://labored-passenger-8620.twil.io/assets/Red_Carpet_Car_Wash_Thanks_For_Calling.mp3');
  gather.play('https://labored-passenger-8620.twil.io/assets/Red_Carpet_Car_Wash_Call_ManhattanBeach.mp3');  
  gather.play('https://labored-passenger-8620.twil.io/assets/Red_Carpet_Car_Wash_Call_CanogaPark.mp3');
  gather.play('https://labored-passenger-8620.twil.io/assets/Red_Carpet_Car_Wash_Call_ThousandOaks.mp3');
  gather.play('https://labored-passenger-8620.twil.io/assets/Red_Carpet_Car_Wash_Message_For_Customer_Service.mp3');

  // End-user did not enter anything ...
  if (event.Timeout == 1) {
    // twiml.say('Thanks for calling Red Carpet Car Wash, goodbye.');
    twiml.play('https://labored-passenger-8620.twil.io/assets/Red_Carpet_Car_Wash_Goodbye.mp3');
    twiml.hangup();
  } else {
    // twiml.say('Sorry, I didn\'t get your response.');
    twiml.play('https://labored-passenger-8620.twil.io/assets/Red_Carpet_Car_Wash_Didnt_Hear_Response.mp3');
    twiml.redirect({
      method: 'GET'
    }, '/redcarpet_incoming?Timeout=1');
  }

  // Finish response and run callback
  callback(null, twiml);
};
