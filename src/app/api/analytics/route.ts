import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req: NextRequest) {
  const apiSecret = process.env.SECRET_GA_KEY;
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  if (!apiSecret || !gaId) {
    return new NextResponse(null, { status: 204 });
  }

  try {
    const body = await req.json();
    const { event, ...params } = body;

    if (!event || typeof event !== 'string') {
      return new NextResponse(null, { status: 400 });
    }

    let clientId = req.cookies.get('_ga_cid')?.value;
    let isNewClient = false;

    if (!clientId) {
      clientId = crypto.randomUUID();
      isNewClient = true;
    }

    const gaEndpoint = `https://www.google-analytics.com/mp/collect?measurement_id=${gaId}&api_secret=${apiSecret}`;

    await fetch(gaEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        client_id: clientId,
        events: [
          {
            name: event,
            params: {
              ...params,
              engagement_time_msec: 100,
            },
          },
        ],
      }),
    });

    const res = new NextResponse(null, { status: 204 });

    if (isNewClient) {
      res.cookies.set('_ga_cid', clientId, {
        httpOnly: true,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 365 * 2,
        path: '/',
      });
    }

    return res;
  } catch {
    return new NextResponse(null, { status: 204 });
  }
}
