import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const fetchPosts = async () => {
  return await prisma.post.findMany();
};

export const fetchPost = async (id) => {
  return await prisma.post.findUnique({ where: { id } });
};

export const savePost = async (post) => {
  return await prisma.post.create({ data: post });
};

export const updatePost = async (id, updatedPost) => {
  return await prisma.post.update({
    where: { id },
    data: updatedPost,
  });
};
