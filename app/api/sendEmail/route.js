// app/api/sendEmail/route.js
console.log("Route file loaded"); // Add this at the very top

import emailjs from "@emailjs/nodejs";

export async function POST(request) {
  console.log("POST endpoint called"); // First thing in function

  try {
    const formdata = await request.json();
    console.log("Form data:", formdata);

    console.log("Environment check:", {
      SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
      TEMPLATE_ID: process.env.TEMPLATE_ID,
      PUBLIC_KEY: process.env.NEW_PUBLIC_KEY,
      PRIVATE_KEY: process.env.PRIVATE_KEY,
    });

    const result = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.TEMPLATE_ID,
      formdata,
      {
        publicKey: process.env.NEW_PUBLIC_KEY,
        privateKey: process.env.PRIVATE_KEY,
      }
    );

    console.log("Email sent:", result);
    return Response.json({ success: true, data: result });
  } catch (error) {
    console.error("Error caught:", error.message);
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
