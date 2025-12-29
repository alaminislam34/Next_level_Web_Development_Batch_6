import { prisma } from "./lib/prisma";

async function run() {
  // const createUser = await prisma.user.create({
  //   data: {
  //     name: "AlAmin",
  //     email: "alaminislam@gamil.com",
  //   },
  // });
  // console.log("Created user: ", createUser);

  // create post
  //   const createPost = await prisma.post.create({
  //     data: {
  //       title: "This is post",
  //       content: " this post content",
  //       authorId: 2,
  //     },
  //   });
  //   console.log("Created post: ", createPost);

  // create profile
  //   const createProfile = await prisma.profile.create({
  //     data: {
  //       bio: "hello",
  //       dateOfBirth: new Date("1995-06-15"),
  //       userId: 1,
  //     },
  //   });
  //   console.log("Create profile: ", createProfile);
  // retrive all user
  //   const users = await prisma.user.findMany({
  // include: {
  //   posts: true,
  //   profiles: true,
  // },
  //     select: {
  //       posts: true,
  //       profiles: true,
  //     },
  //   });
  //   console.dir(users, { depth: Infinity });
  // update user data
  //   const updateUserData = await prisma.profile.update({
  //     where: {
  //       userId: 1,
  //     },
  //     data: {
  //       bio: "Update profile bio",
  //       dateOfBirth: "2025-12-23T14:23:05.455Z",
  //     },
  //   });
  // console.log("Profile data updated:", updateUserData);

  //   delete user
  //   const deleteUser = await prisma.user.delete({
  //     where: {
  //       id: 3,
  //     },
  //   });
  //   console.log("Delete Profile:", deleteUser);
  // get user data by id
  //   const getUserById = await prisma.user.findUnique({
  //     where: {
  //       id: 3,
  //     },
  //     include: {
  //       posts: true,
  //       profiles: true,
  //     },
  //   });
  //   console.log("Get user by id:", getUserById);

  // update user
  const updatedUser = await prisma.user.upsert({
    where: {
      email: "alaminislam4122.bd@gmail.com",
    },
    update: {
      name: "Alamin islam",
    },
    create: {
      name: "Amin",
      email: "alaminislam@gmail.com",
    },
  });
  console.log("User data updated:", updatedUser);
}

run();
