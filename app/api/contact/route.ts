import { NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { email, phone, description } = await req.json()

    // Connect to MongoDB
    const client = await MongoClient.connect(process.env.MONGODB_URI as string)
    const db = client.db('portfolio')
    const collection = db.collection('contacts')

    // Insert the form data into MongoDB
    await collection.insertOne({
      email,
      phone,
      description,
      timestamp: new Date(),
    })

    // Send thank you email to the visitor
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Thank you for your message',
      html: `
        <p>Thank you for visiting our page. We appreciate your interest, and we'll be in touch soon.</p>
        <p>Your message: ${description}</p>
      `,
    })

    // Send notification email to the page owner
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.OWNER_EMAIL as string,
      subject: 'New contact form submission on portfolio',
      html: `
        <h1>New contact form submission</h1>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${description}</p>
      `,
    })

    await client.close()

    return NextResponse.json({ message: 'Message sent successfully' })
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json({ error: 'Failed to process the request' }, { status: 500 })
  }
}

