import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import connectToDB from "./lib/db";
import User from "./models/user.model";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const createUser = async (credentials: any) => {
  try {
    const hashedPassword = await bcrypt.hash(credentials.password, 10); // Hash the password before saving
    const user = new User({
      firstName: credentials.firstName,
      lastName: credentials.lastName,
      userName: credentials.userName,
      email: credentials.email,
      password: hashedPassword,
    });
    await user.save();
    return user;
  } catch (err) {
    console.error("Error saving user:", err);
    return null;
  }
};

const validateUser = async ({ email, password }: any) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("No user found");
  }
  console.log(password, user.password);
  const isValidPassword = await bcrypt.compare(password, user.password);
  console.log(isValidPassword);
  if (!isValidPassword) {
    throw new Error("Invalid password");
  }
  console.log("User found and password validated successfully for user:", user.email); // Log successful validation
  return user;
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        firstName: { label: "First Name", type: "text" },
        lastName: { label: "Last Name", type: "text" },
        userName: { label: "Username", type: "text" },
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        await connectToDB();
        const { firstName, lastName, userName, email, password } = credentials;
        
        // Log both passwords here
        console.log("Plain Password:", password);
        
        let user;
        try {
          user = await validateUser({ email, password });
        } catch (err: any) {
          if (err.message === "No user found") {
            user = await createUser(credentials);
          } else {
            throw err;
          }
        }
        return user;
      },
    }),
  ],
  secret: process.env.NEXT_AUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === "github") {
        try {
          await connectToDB();
          let existingUser = await User.findOne({ email: profile?.email });
          if (!existingUser) {
            const newUser = new User({
              email: profile?.email,
              userName: profile?.login,
              firstName: profile?.name || "GitHubUser",
              lastName: "N/A",
              password: "N/A", // Since password is not used for GitHub OAuth
              dob: new Date(0),
              avatar:
                profile?.avatar_url ||
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToVFACfy7l5TUSvaMogJ_bn9tJjJmqiljAnw&s",
            });
            await newUser.save();
          }
          return true;
        } catch (err) {
          console.error("Error during GitHub sign-in:", err);
          return false;
        }
      }
      return true;
    },
  },
});
