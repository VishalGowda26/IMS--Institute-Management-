export interface Students {
  name: string;
  gender: string;
  mobile: string;
  email: string;
  batch: string;
  address: {
    city: string;
    mandal: string;
    district: string;
    state: string;
    pincode: string;
  };
  education: [{ qualification: string; percentage: string; year: string }];
  company: {
    name: string;
    location: string;
    package: string;
    offerDate: string;
  };
  sourceType: string;
  sourceFrom: string;
  referralName: string;
}
