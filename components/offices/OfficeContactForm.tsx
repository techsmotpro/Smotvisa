"use client";

import { Loader2, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { submitForm } from "@/lib/submitForm";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(1, "Please enter a message"),
});

type ContactValues = z.infer<typeof contactSchema>;

const inputClasses =
  "w-full px-3 py-2 rounded-lg border border-border bg-muted/30 text-foreground font-body text-sm focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all placeholder:text-muted-foreground/50";
const labelClasses = "text-[10px] font-body font-bold text-muted-foreground uppercase tracking-[0.2em] ml-1";

export default function OfficeContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = async (values: ContactValues) => {
    setIsSubmitting(true);
    const result = await submitForm({
      name: values.name,
      email: values.email,
      message: values.message,
      _subject: "New Office Inquiry from SmotVisa Website",
    });
    setIsSubmitting(false);

    if (result.success) {
      toast.success(result.message);
      form.reset();
    } else {
      toast.error(result.message);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <h3 className="text-xl font-display font-bold text-foreground mb-4">Contact Us</h3>

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel className={labelClasses}>Full Name</FormLabel>
              <FormControl>
                <input {...field} className={inputClasses} placeholder="Enter your name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel className={labelClasses}>Email Address</FormLabel>
              <FormControl>
                <input {...field} type="email" className={inputClasses} placeholder="name@example.com" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel className={labelClasses}>Message</FormLabel>
              <FormControl>
                <textarea {...field} rows={3} className={`${inputClasses} resize-none`} placeholder="Tell us about your requirements..." />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-4 py-3 bg-secondary text-secondary-foreground font-display font-bold text-sm rounded-lg shadow-gold hover:translate-y-[-2px] transition-all text-center disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin mx-auto" /> : "Send Message"}
        </button>
      </form>
    </Form>
  );
}