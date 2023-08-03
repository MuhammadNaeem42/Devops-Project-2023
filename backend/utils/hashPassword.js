import bcrypt from "bcryptjs";

const hash = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

const compare = async (password1, password2) => {
  return await bcrypt.compare(password1, password2);
};

export { hash, compare };
