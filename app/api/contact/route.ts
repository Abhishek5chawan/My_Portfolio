import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { email, phone, description } = await req.json();

    // Connect to MongoDB
    const client = await MongoClient.connect(process.env.MONGODB_URI as string);
    const db = client.db('portfolio');
    const collection = db.collection('contacts');

    // Insert the form data into MongoDB
    await collection.insertOne({
      email,
      phone,
      description,
      timestamp: new Date(),
    });

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // e.g., 'smtp.gmail.com'
      port: parseInt(process.env.SMTP_PORT as string), // e.g., 465 for SSL or 587 for TLS
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // SMTP username
        pass: process.env.SMTP_PASS, // SMTP password
      },
    });

    // Send thank you email to the visitor
    await transporter.sendMail({
      from: `"Abhishek's Portfolio" <${process.env.SMTP_USER}>`, // Sender address
      to: email, // Recipient address
      subject: 'Thank you for your message', // Subject line
      html: `
        <p>Thank you for visiting our page. We appreciate your interest, and we'll be in touch soon.</p>
        <p>Your message: ${description}</p>
      `,
    });

    // Send notification email to the page owner
    await transporter.sendMail({
      from: `"Portfolio" <${process.env.SMTP_USER}>`, // Sender address
      to: process.env.OWNER_EMAIL as string, // Recipient address (owner)
      subject: 'New contact form submission on portfolio', // Subject line
      html: `
        <h1>New contact form submission</h1>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${description}</p>
      `,
    });

    await client.close();

    return NextResponse.json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ error: 'Failed to process the request' }, { status: 500 });
  }
}
