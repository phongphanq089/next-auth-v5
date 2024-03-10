"use server";

import { RegisterSchema } from "@/lib/validateForm";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validateFiedlds = RegisterSchema.safeParse(values);

  if (!validateFiedlds.success) {
    return { error: "Invalid fields !" };
  }
  const { email, password, name } = validateFiedlds.data;

  const exitingUser = await db.user.findUnique({
    where: { email },
  });

  if (exitingUser) {
    return { error: "Email already in use!" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  const verficiationToken = await generateVerificationToken(email);

  sendVerificationEmail(verficiationToken.email, verficiationToken.token);

  return { success: "Confirmation email sent!" };
};
