//get
//put
//post
export type PricingPlanBenefit = {
  id: string;
  name: string;
  status: PRICING_PLAN_BENEFIT_STATUS;
  type: PRICING_PLAN_BENEFIT_TYPE;
  eligibleServices: Service[];
};

enum PRICING_PLAN_BENEFIT_TYPE {
  MEMBERSHIP,
  PACKAGE
}

enum PRICING_PLAN_BENEFIT_STATUS {
  ACTIVE,
  INACTIVE
}

/*
{
  "pricingPlans": [
    {
      "id": "5cabdfa9-84d2-42a4-b8e8-00056e070ffc",
      "name": "Blah Plan",
      "status": "ACTIVE"
    },
    {
      "id": "8d544669-7280-439d-8e90-a6b5406ebab7",
      "name": "My Plan",
      "status": "ACTIVE"
    }
  ]
}

*/
