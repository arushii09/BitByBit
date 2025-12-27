const API = "http://localhost:3000";

async function fetchRequests() {
  const res = await fetch(`${API}/requests`);
  return res.json();
}

async function createRequest(data) {
  return fetch(`${API}/requests`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
}
