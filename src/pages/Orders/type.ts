export type OrderFormData = {
  orderId?: string;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  patientAddress: string;
  dob: string;
  hospitalNo: string;
  doctorId: string;
  categories: string[];
  orderDetails: string;
  patientDetailCard?: File;
};
