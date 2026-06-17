"use client";

import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { submitForm } from "@/lib/submitForm";

const inquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().optional(),
});

type InquiryValues = z.infer<typeof inquirySchema>;

const serviceOptions = [
  { value: "Visa Consulting", label: "Visa Consulting" },
  { value: "Tourist Visa", label: "Tourist Visa" },
  { value: "Business Visa", label: "Business Visa" },
  { value: "Flight Booking", label: "Flight Booking" },
  { value: "Other", label: "Other" },
];

const inputClasses =
  "w-full px-4 py-3 rounded-xl border border-border bg-muted/30 text-foreground font-body text-sm focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all placeholder:text-muted-foreground/50";
const labelClasses = "text-[10px] font-body font-bold text-muted-foreground uppercase tracking-[0.2em] ml-1";

const InquiryForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<InquiryValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: { name: "", email: "", phone: "", service: "", message: "" },
  });

  const onSubmit = async (values: InquiryValues) => {
    setIsSubmitting(true);
    const result = await submitForm({
      name: values.name,
      email: values.email,
      phone: values.phone,
      service: values.service || "Not specified",
      message: values.message || "No additional details",
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
    <motion.div
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="w-full max-w-lg lg:ml-auto"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="bg-card/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/10 p-5 md:p-6 space-y-4">
          <h3 className="text-xl font-display font-bold text-foreground">Send an Inquiry</h3>

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

          <div className="grid sm:grid-cols-2 gap-4">
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
              name="phone"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel className={labelClasses}>Phone Number</FormLabel>
                  <FormControl>
                    <input {...field} type="tel" className={inputClasses} placeholder="+91 00000 00000" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className={labelClasses}>Service Needed</FormLabel>
                <FormControl>
                  <select {...field} className={`${inputClasses} appearance-none cursor-pointer`}>
                    <option value="">Select a service</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
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
                <FormLabel className={labelClasses}>Detail Message</FormLabel>
                <FormControl>
                  <textarea {...field} rows={2} className={`${inputClasses} resize-none`} placeholder="Tell us about your requirements..." />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-body font-bold text-sm rounded-xl shadow-gold hover:opacity-90 transition-all group mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            )}
            {isSubmitting ? "Sending..." : "Submit Inquiry"}
          </button>
        </form>
      </Form>

    </motion.div>
  );
};

export default InquiryForm;