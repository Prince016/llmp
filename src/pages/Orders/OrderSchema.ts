import { z } from 'zod';

const MAX_FILE_SIZE = 5 * 1024 * 1024;

export const orderSchema = z.object({
  orderId: z.string().optional(),

  firstName: z.string().min(2, 'First Name is required'),

  lastName: z.string().min(2, 'Last Name is required'),

  age: z.number().min(0, 'Age cannot be negative').max(150, 'Invalid age'),

  gender: z.string().min(1, 'Gender is required'),

  patientAddress: z.string().min(5, 'Address is required'),

  dob: z.string().min(1, 'DOB is required'),

  hospitalNo: z.string().min(1, 'Hospital Number is required'),

  doctorId: z.string().min(1, 'Doctor is required'),

  categories: z.array(z.string()).min(1, 'Select at least one category'),

  orderDetails: z.string().min(5, 'Order Details are required'),

  patientDetailCard: z
    .instanceof(File)
    .refine((file) => file.type === 'application/pdf', 'Only PDF files are allowed')
    .refine((file) => file.size <= MAX_FILE_SIZE, 'File size must be less than 5 MB')
    .optional(),
});

export type OrderFormData = z.infer<typeof orderSchema>;
