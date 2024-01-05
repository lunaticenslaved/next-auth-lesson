'use server';

import { z } from 'zod';

import { RegisterSchema } from '@/schemas';

type Values = z.infer<typeof RegisterSchema>;

export async function register(values: Values) {
  const validateFields = RegisterSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: 'Invalid fields' };
  }

  return { success: 'Email sent!' };
}
