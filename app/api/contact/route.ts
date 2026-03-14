import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  const to = process.env.CONTACT_EMAIL;
  if (!to) {
    return NextResponse.json({ error: 'Server není správně nakonfigurován.' }, { status: 500 });
  }

  let name: string, email: string, message: string;

  try {
    ({ name, email, message } = await req.json());
  } catch {
    return NextResponse.json({ error: 'Neplatný požadavek.' }, { status: 400 });
  }

  if (!message?.trim()) {
    return NextResponse.json({ error: 'Zpráva nesmí být prázdná.' }, { status: 400 });
  }

  const validatedReplyTo = email && emailRegex.test(email) ? email : undefined;

  const subject = `Nová zpráva od ${escapeHtml(name ?? '')}`;
  const html = `<p><strong>Jméno:</strong> ${escapeHtml(name ?? '')}</p><p><strong>Email:</strong> ${escapeHtml(email ?? '')}</p><p><strong>Zpráva:</strong><br/>${escapeHtml(message)}</p>`;

  try {
    const { error } = await resend.emails.send({
      from: 'Runiq <info@runiq.me>',
      to,
      subject,
      html,
      replyTo: validatedReplyTo,
    });

    if (error) {
      return NextResponse.json({ error: 'Nepodařilo se odeslat zprávu.' }, { status: 500 });
    }
  } catch {
    return NextResponse.json({ error: 'Nepodařilo se odeslat zprávu.' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
