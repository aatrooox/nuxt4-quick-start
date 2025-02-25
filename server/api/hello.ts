import prisma from "~~/lib/prisma"
export default defineEventHandler(async (event) => {
  const users = await prisma.user.findMany()
  return {
    data: users,
    message: 'Hello World!'
  }
})