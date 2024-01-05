'use server';

import { z } from 'zod';

import { LoginSchema } from '@/schemas';

type Values = z.infer<typeof LoginSchema>;

export async function login(values: Values) {
  const validateFields = LoginSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: 'Invalid fields' };
  }

  return { success: 'Email sent!' };
}
