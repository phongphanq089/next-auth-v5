import { db } from "@/lib/db";

export const getUserEmail = async (email: string | undefined) => {
  try {
    const user = db.user.findUnique({ where: { email } });

    return user;
  } catch {
    return null;
  }
};

export const getUserById = async (id: string | undefined) => {
  try {
    const user = await db.user.findUnique({ where: { id } });

    return user;
  } catch {
    return null;
  }
};
