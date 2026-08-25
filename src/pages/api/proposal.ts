import type { APIRoute } from 'astro';

export const prerender = false;

const formspreeEndpoint = 'https://formspree.io/f/xrpzrkvo';

const clean = (value: FormDataEntryValue | null, max: number) =>
  typeof value === 'string' ? value.trim().slice(0, max) : '';

export const POST: APIRoute = async ({ request }) => {
  try {
    const form = await request.formData();
    const honeypot = clean(form.get('contact_url'), 200);
    if (honeypot) return Response.json({ ok: true });

    const business = clean(form.get('business'), 120);
    const category = clean(form.get('category'), 120);
    const name = clean(form.get('name'), 120);
    const email = clean(form.get('email'), 254).toLowerCase();
    const message = clean(form.get('message'), 3000);
    const website = clean(form.get('website'), 240);
    const source = clean(form.get('source'), 80);
    const isInstagramInquiry = source === 'instagram';

    if (!business || (!category && !isInstagramInquiry) || !name || message.length < 10 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: 'Please complete every field with a valid email address.' }, { status: 400 });
    }

    const submission = new FormData();
    submission.set('business', business);
    submission.set('category', category);
    submission.set('name', name);
    submission.set('email', email);
    submission.set('message', message);
    if (website) submission.set('website', website);
    if (source) submission.set('source', source);
    submission.set('_subject', `New Hopscotch proposal request — ${business}`);

    const formspreeResponse = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: submission,
    });

    if (!formspreeResponse.ok) {
      console.error('Formspree rejected proposal submission.', formspreeResponse.status, await formspreeResponse.text());
      return Response.json({ error: 'We could not save your request. Please try again or email us directly.' }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error('Proposal submission failed.', error);
    return Response.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
};

export const ALL: APIRoute = () => Response.json({ error: 'Method not allowed.' }, { status: 405 });
