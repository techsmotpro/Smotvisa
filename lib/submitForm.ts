const FORMSUBMIT_URL = "https://formsubmit.co/ajax/info@smotvisa.com";

export interface FormSubmitData {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message?: string;
  _subject?: string;
  _honey?: string;
  _captcha?: string;
  _template?: string;
}

export async function submitForm(data: FormSubmitData): Promise<{ success: boolean; message: string }> {
  try {
    const response = await fetch(FORMSUBMIT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        ...data,
        _subject: data._subject || "New Inquiry from SmotVisa Website",
        _honey: "",
        _captcha: "false",
        _template: "table",
      }),
    });

    if (!response.ok) {
      return { success: false, message: "Something went wrong. Please try again." };
    }

    return { success: true, message: "Thank you! We'll get back to you shortly." };
  } catch {
    return { success: false, message: "Network error. Please check your connection and try again." };
  }
}