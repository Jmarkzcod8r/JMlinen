import dbConnect from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import TshirtModel from "@/lib/models/TshirtModel";

export async function POST(req: NextRequest) {
    try {
      // Log the start of data retrieval
      console.log("Commencing api/t-shirt-size/search to retrieve data");

      // Connect to the MongoDB database
      await dbConnect();

      // Extract _id from the request body
      const { _id } = await req.json();

      // Fetch data associated with _id from the database
      const tshirt = await TshirtModel.findById(_id);

      if (!tshirt) {
        return NextResponse.json({ success: false, error: 'T-shirt not found' });
      }

      // Respond with the fetched data
      return NextResponse.json({ success: true, tshirt });
    } catch (error) {
      console.error('Error fetching T-shirt:', error);
      // Respond with an error message
      return NextResponse.json({ success: false, error: 'Internal Server Error' });
    }
  }
