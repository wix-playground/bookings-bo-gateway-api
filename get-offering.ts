type ServiceScheduleInterval = {
  interval: Interval; //can be empty for individual
  staff: Staff | StaffID;
};

type ServiceSchedule = {
  start: string;
  end: string;
  duration: string;
  intervals: ServiceScheduleInterval[]; //can be used to extract list of staff members giving individual service
  minutesBetweenAppointments: number;
  capacity: number;
};

type PricingPlan = {
  id: string;
  name: string;
  status: PLAN_STATUS;
};

type Payment = {
  options: {
    amount: {
      currency: CURRENCY;
      price: number;
      deposit: number;
    };
    online: boolean;
    offline: boolean;
    pricingPlan: boolean;
  };
  text: string;
  pricingPlans: PricingPlan[]; //if not null - pricing intent
};

enum SERVICE_LOCATION_TYPE {
  BUSINESS,
  CUSTOMER,
  CUSTOM
}
type ServiceLocation = {
  type: SERVICE_LOCATION_TYPE;
  text: string;
};

//get
//list
//post
//put
//delete
type Service = {
  id: "f7419222-9c1b-41c9-9a72-925c50fc2865";
  categoryId: "86389306-aa4e-4ee4-8222-303f092eb672";
  order: 2;
  type: "INDIVIDUAL";
  info: { name: "adsdsd"; description: ""; images: []; tagLine: "" };
  location: ServiceLocation;
  payment: Payment;
  urls: {
    bookingPageUrl: URL;
    servicePageUrl: URL;
  };
  schedule: ServiceSchedule;
  policy: ServicePolicy;
};

type URL = {
  base: string;
  path: string;
};

type ServicePolicy = {
  isUoUHidden: boolean;
  isUoUBookable: boolean;
  displayOnlyNoBookFlow: boolean;
  maxParticipantsPerOrder: number;
  //waitingList ????
};
