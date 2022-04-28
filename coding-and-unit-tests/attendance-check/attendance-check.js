function attendanceCheck(meetings, requiredAttendees) {
  let result = [];

  for (let i = 0; i < meetings.length; i++) {
    const singleMeeting = meetings[i];

    for (let j = 0; j < requiredAttendees.length; j++) {
      let objInResult = {};
      let attendeeBool = false;
      singleMeeting.attendees.forEach((attendee) => {
        if (attendee.includes(requiredAttendees[j])) {
          attendeeBool = true;
        }
      });
      if (!attendeeBool) {
        function pushObjectIntoArray(meeting, requiredAttendees) {
          let obj = {};
          obj["attendee"] = requiredAttendees;
          obj["missedMeetings"] = [meeting];
          return obj;
        }
        // in 1st Step result[j] is undefined... to prevent this
        if (result[j] !== undefined) {
          // push meeting in missedMeetings if Attendee already exists in Object
          if (Object.values(result[j]).includes(requiredAttendees[j])) {
            result[j].missedMeetings.push(singleMeeting.meetingName);
          } else {
            // Nico dont like duplicated code
            result.push(
              pushObjectIntoArray(
                singleMeeting.meetingName,
                requiredAttendees[j]
              )
            );
          }
        } else {
          result.push(
            pushObjectIntoArray(singleMeeting.meetingName, requiredAttendees[j])
          );
        }
      }
    }
  }
  return result;
}
