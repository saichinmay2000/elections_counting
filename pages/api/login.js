import { query } from "../../lib/login_db";

export default async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and password are required." });
  }

  try {
    const [user] = await query("SELECT * FROM users WHERE username = ?", [
      username,
    ]);
    if (!user) {
      
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const passwordMatch = user.password;

    if (passwordMatch !== password) {
      
      return res.status(401).json({ error: "Invalid credentials" });
    }

    return res.status(200).json({ message: "Login successful" });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};
