import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const TO = process.env.CONTACT_EMAIL!;

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!message?.trim()) {
    return NextResponse.json({ error: 'Zpráva nesmí být prázdná.' }, { status: 400 });
  }

  const subject =`Nová zpráva od ${name}`;
  const html = `<p><strong>Jméno:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Zpráva:</strong><br/>${message}</p>`;

  const { error } = await resend.emails.send({
    from: 'Runiq <info@runiq.me>',
    to: TO,
    subject,
    html,
    replyTo: email || undefined,
  });

  if (error) {
    return NextResponse.json({ error: 'Nepodařilo se odeslat zprávu.' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

