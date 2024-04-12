import dbConnect from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import TshirtModel from "@/lib/models/TshirtModel";

// Function to generate the code
const generateCode = () => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const maxNumericValue = 250;
  const maxAlphabetIndex = alphabet.length - 1;

  let timestamp = Date.now();
  let numericValue = timestamp % (maxNumericValue + 1);
  let alphabetIndex = Math.floor(timestamp / (maxNumericValue + 1)) % maxAlphabetIndex;

  return `${timestamp}${alphabet.charAt(alphabetIndex)}${numericValue}`;
};

export async function POST(req: NextRequest) {
  try {
    // Connect to the MongoDB database
    await dbConnect();

    // Extract data from the request body
    const data = await req.json();

    // Generate the code
    // const code = generateCode();

    // Insert the code into the data
    // data.code = code;

    console.log('this data: ', data)
    // Insert the data into the database using the Mongoose model
    const newTshirt = await TshirtModel.create(data);

    // Log the inserted product
    console.log('Inserted product:', newTshirt);

    // Respond with a success message
    return NextResponse.json({ success: true, newTshirt: newTshirt });
  } catch (error) {
    console.error('Error inserting T-shirt:', error);
    // Respond with an error message
    return NextResponse.json({ success: false, error: 'Internal Server Error' });
  }
}
