import { NextRequest, NextResponse } from "next/server";

// prevent catching (request: NextRequest) add this always on parameter
export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Mosh" },
    { id: 2, name: "John" },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  if (!body.name)
    return NextResponse.json(
      {
        error: "Name is empty, which is mandatory",
      },
      { status: 400 }
    );
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
