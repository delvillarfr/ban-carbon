'use server';

import { neon } from '@neondatabase/serverless';

export async function createEmail(formData: FormData) {
  // Connect to the Neon database
  const sql = neon(process.env.DATABASE_URL!);
  const email = formData.get('email');
  // Insert the email from the form into the Postgres database
  await sql`INSERT INTO emailsforlaunch (email) VALUES (${email})`;
}