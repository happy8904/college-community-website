const BASE_URL = "https://college-backend-1-5pig.onrender.com/api/auth";

export async function registerUser(userData) {
  try {
    const response = await fetch(`${BASE_URL}/register/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    const data = await response.json();
    console.log("register response", data);
    return data;
  } catch (error) {
    console.error("Register Error:", error);
    return { error: "Something went wrong" };
  }
}

export async function loginUser({ email, password }) {
  try {

    // because backend stores username as part before @
    const username = email.split("@")[0];

    const response = await fetch(`${BASE_URL}/login/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,   // IMPORTANT FIX
        password: password,
      }),
    });

    const data = await response.json();
    console.log("login response", data);
    return data;

  } catch (error) {
    console.error("Login Error:", error);
    return { error: "Something went wrong" };
  }
}
