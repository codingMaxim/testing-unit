// TODO: add tests
// hint: analyze the existing tests for the coding katas
// the docs for chai bdd can be found here: https://www.chaijs.com/api/bdd/

describe("attendance-check", function () {
  it("should return an array ", function () {
    const meeting1 = { meetingName: "meeting 1", attendees: ["Mary", "Paul"] };
    const meeting2 = { meetingName: "meeting 2", attendees: ["Mary"] };
    const meetings = [meeting1, meeting2];
    const requiredAttendees = [];
    const checkAttendee = attendanceCheck(meetings, requiredAttendees);
    chai.expect(checkAttendee).to.be.a("Array");
  });

  it("should return the attendee and his missed meetings", function () {
    const meeting1 = {
      meetingName: "meeting 1",
      attendees: ["Peter", "Paul", "Mary"],
    };
    const meeting2 = { meetingName: "meeting 2", attendees: ["Paul"] };
    const meetings = [meeting1, meeting2];
    const requiredAttendees = ["Peter", "Paul"];
    const checkAttendee = attendanceCheck(meetings, requiredAttendees);
    chai
      .expect(checkAttendee)
      .to.deep.equal([{ attendee: "Peter", missedMeetings: ["meeting 2"] }]);
  });

  it("should return the attendee and his missed meetings(meeting should be in an array)", function () {
    const meeting1 = { meetingName: "meeting 1", attendees: ["Mary", "Paul"] };
    const meeting2 = { meetingName: "meeting 2", attendees: ["Mary"] };
    const meetings = [meeting1, meeting2];
    const requiredAttendees = ["Peter", "Paul"];
    const checkAttendee = attendanceCheck(meetings, requiredAttendees);
    chai.expect(checkAttendee).to.deep.equal([
      { attendee: "Peter", missedMeetings: ["meeting 1", "meeting 2"] },
      { attendee: "Paul", missedMeetings: ["meeting 2"] },
    ]);
  });
});
