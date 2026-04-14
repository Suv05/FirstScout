"use server";

import { Resend } from "resend";
import { render } from "@react-email/render";
import { CreatorEmailTemplate } from "@/components/email-temp/CreatorEmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface CreatorFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  platform: string;
  platformLink: string;
  genre: string;
  message: string;
}

export async function sendCreatorInquiryEmail(
  data: CreatorFormData
): Promise<{ success: boolean; error?: string }> {
  try {
    const html = await render(CreatorEmailTemplate({ ...data }));

    const { error } = await resend.emails.send({
      from: "FirstSkout <noreply@contact.firstskout.com>",
      to: ["hellofirstskout@gmail.com"], // must match your Resend signup email until domain is verified
      subject: `New Creator Inquiry from ${data.firstName} ${data.lastName}`,
      html,
    });

    if (error) {
      console.error("[Resend error]", error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err) {
    console.error("[sendCreatorInquiryEmail]", err);
    return { success: false, error: "Failed to send email. Please try again." };
  }
}