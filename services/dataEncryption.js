import bcrypt from "bcryptjs";

export const encrypt = async (plainText) => {
  const hash = await bcrypt.hash(plainText, 10);
  return hash;
};

export const compare = async (plainPasswd, hashPasswd) =>
  await bcrypt.compare(plainPasswd, hashPasswd);
