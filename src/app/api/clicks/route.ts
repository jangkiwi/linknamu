import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

type LinkClickDoc = {
  _id: string;
  count: number;
};

async function getCollection() {
  const client = await clientPromise;
  return client.db().collection<LinkClickDoc>("linkClicks");
}

export async function GET() {
  const collection = await getCollection();
  const docs = await collection.find().toArray();

  const counts: Record<string, number> = {};
  for (const doc of docs) {
    counts[doc._id] = doc.count;
  }

  return NextResponse.json(counts);
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const id = body?.id;

  if (typeof id !== "string" || !id) {
    return NextResponse.json({ error: "id is required" }, { status: 400 });
  }

  const collection = await getCollection();
  const updated = await collection.findOneAndUpdate(
    { _id: id },
    { $inc: { count: 1 } },
    { upsert: true, returnDocument: "after" },
  );

  return NextResponse.json({ count: updated?.count ?? 1 });
}
