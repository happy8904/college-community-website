// src/api/events.js
const BASE_URL = "https://college-backend-1-5pig.onrender.com/api/events/";

export async function fetchEvents() {
  try {
    const token = localStorage.getItem("accessToken");

    const res = await fetch(`${BASE_URL}list/`, {
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });

    if (res.status === 401) return [];     
    const data = await res.json();

    if (!Array.isArray(data)) return [];   

    return data;

  } catch (err) {
    console.error("Events Fetch Error:", err);
    return [];
  }
}

export async function createEvent(data) {
  try {
    const token = localStorage.getItem("accessToken");

    const res = await fetch(`${BASE_URL}add/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    const d = await res.json();
    return d;

  } catch (err) {
    console.error("Event Create Error:", err);
    return { error: "Something went wrong" };
  }
}
