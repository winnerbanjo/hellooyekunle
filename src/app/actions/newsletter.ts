'use server';

export async function submitNewsletterForm(prevState: unknown, formData: FormData) {
  try {
    const firstName = formData.get('firstName') as string;
    const email = formData.get('email') as string;
    const honeypot = formData.get('honeypot') as string;

    if (honeypot) {
      return { success: false, error: 'Spam detected' };
    }

    if (!email) {
      return { success: false, error: 'Please provide an email address.' };
    }

    // Process subscriber cleanly
    console.log(`Newsletter subscription received: ${email} (${firstName || 'N/A'})`);

    return {
      success: true,
      message: "YOU'RE IN. No inspirational morning emails. Promise.",
    };
  } catch (error: unknown) {
    console.error('Newsletter form error:', error);
    return { success: false, error: 'Something went wrong. Please try again later.' };
  }
}
