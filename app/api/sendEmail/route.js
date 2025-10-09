// app/api/send-email/route.js
import emailjs from "@emailjs/nodejs";

export async function POST(request) {
  const formdata = await request.json();
  console.log("Received data:", formdata); // Debug log

  try {
    const result = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.TEMPLATE_ID,
      formdata,
      {
        publicKey: process.env.NEW_PUBLIC_KEY,
        privateKey: process.env.PRIVATE_KEY,
      }
    );

    return Response.json({ success: true, data: result });
  } catch (error) {
    console.error("EmailJS Error:", error);
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
