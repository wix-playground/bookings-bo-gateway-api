type Template = {
  subject: string;
  body: string;
};

//get
//put
type Notification = {
  isEnabled: boolean;
  template: Template;
  type: NOTIFICATION_TYPE;
  serviceType: SERVICE_TYPE;
};

enum SERVICE_TYPE {
  INDIVIDUAL,
  COURSE,
  GROUP
}

enum NOTIFICATION_TYPE {
  UNDEFINED,
  CONFIRMATION_EMAIL,
  CANCELLATION_EMAIL,
  REMINDER_EMAIL
}

export type Notifictions = Notification[];
