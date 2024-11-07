import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {      // checking currently open connections
      await mongoose.connect("mongodb://127.0.0.1:27017/sammy");
      console.log("MongoDB Connected...");
    } else {
      console.log("Using existing MongoDB connection...");
    }
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;


import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

mongoose.models = {}; // prevents rewriting of mongoose model
module.exports = User;

import connectDB from "@/db/connect";
import User from "@/db/UserModel";
const jwt = require("jsonwebtoken");
const secret = "YOUR_JWT_SECRET_KEY";

export async function POST(Request) {
  await connectDB();

  try {
    const data = await Request.json();

    let user = new User({
      name: data.name,
      email: data.email,
      password: data.password,
    });

    await user.save();

    const token = jwt.sign(user.id, secret);

return new Response("", {
        status: 200,
        headers: { Authorization: token },
      });
  } catch (error) {
    console.log(error);
  }
}


import connectDB from "@/db/connect";
import User from "@/db/UserModel";
import { headers } from "next/headers";
const jwt = require("jsonwebtoken");
const secret = "YOUR_JWT_SECRET_KEY";

export async function POST() {
  await connectDB();

  const headerList = headers();
  const token = headerList.get("Authorization");

  if (!token) {
    return Response.json({ success: false, msg: "Unauthorized!" });
  }

  try {
    const data = await jwt.verify(token, secret);
    let user = await User.findById(data).select("-password");

    if (!user) {
      return Response.json({ success: false, msg: "Unauthorized!" });
    }

    return Response.json({ success: true, user });

  } catch (error) {
    return Response.json({ success: false, msg: "Invalid token!" });
  }
}



"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Basic validation
    if (!email || !password || !name) {
      setError("Please fill in all fields...");
      return;
    }

    try {
      const response = await fetch("/api/adduser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name, password }),
      });

      if (!response.ok) {
        throw new Error("Sign Up failed");
      }

      const responseAuth = response.headers.get("Authorization");

      const userDetails = await fetch("/api/getuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: responseAuth,
        },
      });

      if (!userDetails.ok) {
        throw new Error("Sign Up failed");
      }
      const userData = await userDetails.json();

      localStorage.setItem(`userData`, JSON.stringify(userData.user));
      router.push(`/user/${userData.user.name}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Page;