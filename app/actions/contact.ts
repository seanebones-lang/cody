"use server";

import { Resend } from "resend";
import { z } from "zod";
import { siteConfig } from "@/lib/site";

export type ContactActionState = {
  success: boolean;
  message: string;
};

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  idea: z.string().min(20),
  website: z.string().optional(),
});

export async function submitContact(
  _prevState: ContactActionState,
  formData: FormData
): Promise<ContactActionState> {
  const parsed = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    idea: formData.get("idea"),
    website: formData.get("website"),
  });

  if (!parsed.success) {
    return { success: false, message: "Please complete all required fields." };
  }

  if (parsed.data.website) {
    return { success: true, message: "Thanks, message received." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      success: false,
      message:
        "Contact service is not configured yet. Add RESEND_API_KEY and RESEND_FROM_EMAIL in your environment.",
    };
  }

  const resend = new Resend(apiKey);
  const from = process.env.RESEND_FROM_EMAIL ?? "Tattoo Site <onboarding@resend.dev>";

  try {
    await resend.emails.send({
      from,
      to: siteConfig.email,
      replyTo: parsed.data.email,
      subject: `New consultation request from ${parsed.data.name}`,
      text: `Name: ${parsed.data.name}\nEmail: ${parsed.data.email}\n\nIdea:\n${parsed.data.idea}`,
    });
  } catch {
    return {
      success: false,
      message: "Message failed to send. Please try again shortly.",
    };
  }

  return { success: true, message: "Message sent. Cody will get back to you soon." };
}
