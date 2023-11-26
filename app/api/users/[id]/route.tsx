import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

//Get particular given user from path params
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!user) {
    return NextResponse.json({ error: "Not a valid user" }, { status: 404 });
  }
  return NextResponse.json(user);
}
// Update particular user detail
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  //Validate give request valid against schema
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  //Validate give id present in DB
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!user) {
    return NextResponse.json({ error: "Not a valid user" }, { status: 404 });
  }
  // If ID present then update same in DB
  const updateUser = await prisma.user.update({
    where: { id: parseInt(params.id) },
    data: {
      name: body.name,
      email: body.email,
    },
  });
  return NextResponse.json(updateUser, { status: 200 });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const userExists = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!userExists) {
    return NextResponse.json({ error: "Not a valid user" }, { status: 404 });
  }
  const user = await prisma.user.delete({
    where: { id: parseInt(params.id) },
  });
  return NextResponse.json(user, { status: 200 });
}
