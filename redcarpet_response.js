exports.handler = function(context, event, callback) {
  let twiml = new Twilio.twiml.VoiceResponse();

  // Handle end-user's input from DTMF
  switch (event.Digits) {
    case '1': // Manhattan Beach
      // twiml.say('I will connect you to our Manhattan Beach location now.');
      gather.play('https://labored-passenger-8620.twil.io/assets/Red_Carpet_Car_Wash_Connect_To_ManhattanBeach.mp3');
      twiml.dial('+13105461693');
      break;
    case '2': // Canoga Park
      // twiml.say('I will connect you to our Canoga Park location now.');
      gather.play('https://labored-passenger-8620.twil.io/assets/Red_Carpet_Car_Wash_Connect_To_CanogaPark.mp3');
      twiml.dial('+18188880115');
      break;
    case '3': // Thousand Oaks
      // twiml.say('I will connect you to our Thousand Oaks location now.');
      gather.play('https://labored-passenger-8620.twil.io/assets/Red_Carpet_Car_Wash_Connect_To_ThousandOaks.mp3');
      twiml.dial('+18053792732');
      break;
    case '0': // Feedback Voicemail
      // twiml.say('After the tone please leave your name, phone number, and a brief message and we will get back to you as soon as possible. Thanks for calling Red Carpet Carwash.');
      gather.play('https://labored-passenger-8620.twil.io/assets/Red_Carpet_Car_Wash_Leave_A_Message.mp3');
      twiml.record({
          action: '/redcarpet_recording',
          method: 'GET',
          finishOnKey: '*',
          maxLength: 20,
      });
      // twiml.say('Sorry, I did not hear your response.');
      gather.play('https://labored-passenger-8620.twil.io/assets/Red_Carpet_Car_Wash_Didnt_Hear_Response.mp3');
      break;
    default:
      twiml.redirect('/redcarpet_incoming');
  }

  // Finish response and run callback
  callback(null, twiml);
};
