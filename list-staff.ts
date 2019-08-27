import { Interval } from "./working-hours";

//get
//list
//put
//post
//patch - externalCalendar
export type StaffMember = {
  id: string;
  email: string;
  fullName: string;
  image: null;
  externalCalendar: ExternalCalendar;
  workingHours: Interval[];
};

type ExternalCalendar = {
  status: EXTERNAL_CALENDAR_STATUS;
};

enum EXTERNAL_CALENDAR_STATUS {
  PENDING,
  CONNECTED,
  NONE
}

/*
{
  "deletedStaff": [],
  "staff": [
    {
      "id": "2c9444e1-ec00-46d3-92e0-95b0fc2e4f13",
      "fullName": "Staff Member #1",
      "image": null,
      "connectedCalendars": { "google": false, "googleStatus": "NONE" },
      "pristineOwner": true,
      "workingHours": null
    },
    {
      "id": "a31d484f-e9b9-4f2a-8010-39dd67b9276d",
      "fullName": "David",
      "email": "ss@s.com",
      "image": null,
      "connectedCalendars": { "google": false, "googleStatus": "NONE" },
      "pristineOwner": false,
      "workingHours": null
    },
    {
      "id": "cd27d08a-a9be-4d6f-866b-802311c18d0d",
      "fullName": "The Great One",
      "email": "borislit@gmail.com",
      "image": null,
      "connectedCalendars": { "google": false, "googleStatus": "NONE" },
      "pristineOwner": false,
      "workingHours": null
    }
  ]
}

*/
