import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  TextField,
  MenuItem,
  Button,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  Chip,
  OutlinedInput,
} from '@mui/material';

import { orderSchema, type OrderFormData } from './OrderSchema';

const doctors = [
  { id: '1', name: 'Dr. John' },
  { id: '2', name: 'Dr. Smith' },
];

const categoriesList = ['Blood Test', 'Urine Test', 'Biopsy', 'Pathology'];

const OrderForm = () => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      categories: [],
    },
  });

  const onSubmit = (data: OrderFormData) => {
    console.log(data);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        maxWidth: 900,
      }}
    >
      <Typography variant="h5">Order Form</Typography>

      {/* Order ID */}

      <TextField label="Order ID" disabled value="" helperText="Generated after creation" />

      {/* Patient Information */}

      <TextField
        label="First Name"
        {...register('firstName')}
        error={!!errors.firstName}
        helperText={errors.firstName?.message}
      />

      <TextField
        label="Last Name"
        {...register('lastName')}
        error={!!errors.lastName}
        helperText={errors.lastName?.message}
      />

      <TextField
        label="Age"
        type="number"
        {...register('age', {
          valueAsNumber: true,
        })}
        error={!!errors.age}
        helperText={errors.age?.message}
      />

      <TextField
        select
        label="Gender"
        {...register('gender')}
        error={!!errors.gender}
        helperText={errors.gender?.message}
      >
        <MenuItem value="MALE">Male</MenuItem>
        <MenuItem value="FEMALE">Female</MenuItem>
        <MenuItem value="OTHER">Other</MenuItem>
      </TextField>

      <TextField
        label="DOB"
        type="date"
        slotProps={{
          inputLabel: {
            shrink: true,
          },
        }}
        {...register('dob')}
        error={!!errors.dob}
        helperText={errors.dob?.message}
      />

      <TextField
        label="Patient Address"
        multiline
        rows={4}
        {...register('patientAddress')}
        error={!!errors.patientAddress}
        helperText={errors.patientAddress?.message}
      />

      {/* Hospital */}

      <TextField
        label="Hospital Number"
        {...register('hospitalNo')}
        error={!!errors.hospitalNo}
        helperText={errors.hospitalNo?.message}
      />

      {/* Doctor */}

      <TextField
        select
        label="Doctor"
        {...register('doctorId')}
        error={!!errors.doctorId}
        helperText={errors.doctorId?.message}
      >
        {doctors.map((doctor) => (
          <MenuItem key={doctor.id} value={doctor.id}>
            {doctor.name}
          </MenuItem>
        ))}
      </TextField>

      {/* Categories Multi Select */}

      <Controller
        control={control}
        name="categories"
        render={({ field }) => (
          <FormControl>
            <InputLabel>Categories</InputLabel>

            <Select
              multiple
              value={field.value ?? []}
              onChange={(event) => field.onChange(event.target.value as string[])}
              input={<OutlinedInput />}
              renderValue={(selected) => (
                <Box
                  sx={{
                    display: 'flex',
                    gap: 0.5,
                    flexWrap: 'wrap',
                  }}
                >
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
            >
              {categoriesList.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>

            <Typography color="error" variant="caption">
              {errors.categories?.message}
            </Typography>
          </FormControl>
        )}
      />

      {/* Order Details */}

      <TextField
        label="Order Details"
        multiline
        rows={5}
        {...register('orderDetails')}
        error={!!errors.orderDetails}
        helperText={errors.orderDetails?.message}
      />

      {/* PDF Upload */}

      <Controller
        name="patientDetailCard"
        control={control}
        render={() => (
          <>
            <Button variant="outlined" component="label">
              Upload PDF
              <input
                hidden
                type="file"
                accept=".pdf"
                onChange={(event) => {
                  const file = event.target.files?.[0];

                  if (file) {
                    setValue('patientDetailCard', file, {
                      shouldValidate: true,
                    });
                  }
                }}
              />
            </Button>

            <Typography color="error" variant="caption">
              {errors.patientDetailCard?.message}
            </Typography>
          </>
        )}
      />

      <Button type="submit" variant="contained">
        Save Order
      </Button>
    </Box>
  );
};

export default OrderForm;
