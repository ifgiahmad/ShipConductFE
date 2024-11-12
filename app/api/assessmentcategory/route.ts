// app/api/users/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "@/prisma/generated/shipconduct";

const prismaShipconduct = new PrismaClient({
  datasources: { dbShipConduct: { url: process.env.DATABASE_SHIPCONDUCT_URL } },
});

/* export async function POST(request: Request) {
  const data = await request.json();
  const assCat = await prismaShipconduct.AssessmentCategory.create({
    data: {
      name: data.name,
      email: data.email,
    },
  });
  return NextResponse.json(assCat);
} */

/* export async function GET() {
  try {
    const assessmentCategory =
      await prismaShipconduct.ms_AssessmentCategory.findMany();
    return assessmentCategory;
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
} */

function serializeBigInt(obj: any) {
  return JSON.parse(
    JSON.stringify(obj, (key, value) =>
      typeof value === "bigint" ? value.toString() : value
    )
  );
}

export async function GET() {
  const assessmentCategory =
    await prismaShipconduct.ms_AssessmentCategory.findMany();
  return NextResponse.json(serializeBigInt(assessmentCategory));
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { Vsl_Type, Item, Interval, ShipSection } = body;

    const newData = await prismaShipconduct.ms_AssessmentCategory.create({
      data: {
        VslType: Vsl_Type,
        Item: Item,
        Interval: Interval,
        ShipSection: ShipSection,
      },
    });

    return NextResponse.json(newData, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Error creating data" }, { status: 500 });
  }
}

/* export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { Vsl_Type, Item, Interval, ShipSection } = body;

    const updatedUser = await prismaShipconduct.ms_AssessmentCategory.update({
      where: { id },
      data: {
        username,
        email,
      },
    });

    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Error updating user" }, { status: 500 });
  }
} */
