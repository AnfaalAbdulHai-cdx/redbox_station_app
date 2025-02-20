export const AUTH_DATA = {
  email: "user@example.com",
  password: "password123",
};

export const authenticateUser = (email: string, password: string): boolean => {
  console.log("Entered Email:", email);
  console.log("Entered Password:", password);
  console.log("Stored Email:", AUTH_DATA.email);
  console.log("Stored Password:", AUTH_DATA.password);

  return email.trim() === AUTH_DATA.email.trim() && password === AUTH_DATA.password;
};
