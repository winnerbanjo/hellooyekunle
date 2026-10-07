import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 });
    }

    // Successfully log or store subscription
    console.log(`[Newsletter Subscription] ${email}`);
    return NextResponse.json({ success: true, message: 'Subscribed' }, { status: 200 });
  } catch {
    return NextResponse.json({ error: 'Subscription failed' }, { status: 500 });
  }
}
