type TimeZone = string;
type Currency = string;
type Locale = string;
type Language = string;


//get
enum BusinessCategory {
  BUSINESS,
  FITNESS
}

//get
type BusinessLocation = {
  formattedAddress: string;
};

//get
type RegionalSettings = {
  language: Language;
  locale: Locale;
  currency: Currency;
  timeZone: TimeZone;
};

//get
//post
type BookingPolicy = {
  leadTime: null;
  slotLength: null;
  cancellationLeadTime: null;
  waitlistSettings: WaitlistSettings;
};

type WaitlistSettings = {
  isEnabled: boolean;
  capacity: number;
}
