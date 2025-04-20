"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { sendMessage } from "@/lib/appwrite/api";
import { useLanguage } from "@/providers/LanguageContextProvider";
import { contactSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Loader } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import type { z } from "zod";
import "react-phone-input-2/lib/style.css";

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact = () => {
  const { lang } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      PhoneNumber: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await sendMessage(data);

      if (response) {
        toast({
          title: lang === "English" ? "Success!" : "نجاح!",
          description:
            lang === "English"
              ? "Message sent successfully!"
              : "تم إرسال الرسالة بنجاح!",
        });
        form.reset(); // Reset form after success
      } else {
        throw new Error(
          lang === "English"
            ? "Failed to send the message. Please try again."
            : "فشل في إرسال الرسالة. حاول مرة أخرى."
        );
      }
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : lang === "English"
          ? "An unexpected error occurred."
          : "حدث خطأ غير متوقع.";
      setError(errorMessage);
      toast({
        title: lang === "English" ? "Error!" : "خطأ!",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="section border-none" id="Contact">
      <div className="container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="sectionTitle"
        >
          {lang === "English" ? "Contact Me" : "تواصل معي"}
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="container mx-auto px-5"
        >
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 mx-auto md:max-w-2xl lg:max-w-3xl"
            >
              <div className="flex gap-6 justify-space-between items-center">
                {/* Name Field */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>
                        {lang === "English" ? "Name" : "الأسم"}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder={
                            lang === "English" ? "Your name" : "أسمك"
                          }
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>
                        {lang === "English" ? "Email" : "البريد الإلكتروني"}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder={
                            lang === "English"
                              ? "Your email"
                              : "بريدك الإلكتروني"
                          }
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Phone Number Field */}
                <FormField
                  control={form.control}
                  name="PhoneNumber"
                  render={({ field }) => (
                    <FormItem className="w-full mt-2">
                      <FormLabel className="flex items-center gap-2">
                        {lang === "English" ? "Phone Number" : "رقم الهاتف"}
                      </FormLabel>
                      <FormControl>
                        <div className="phone-input-container">
                          <PhoneInput
                            country={"eg"}
                            value={field.value}
                            onChange={field.onChange}
                            inputProps={{
                              name: field.name,
                              required: true,
                              autoFocus: false,
                            }}
                            containerClass="phone-input-container"
                            inputClass="phone-input"
                            buttonClass="country-dropdown"
                            dropdownClass="country-dropdown-list"
                            placeholder={
                              lang === "English"
                                ? "Your phone number"
                                : "رقم هاتفك"
                            }
                            enableSearch={true}
                            searchPlaceholder={
                              lang === "English"
                                ? "Search countries"
                                : "البحث عن الدول"
                            }
                            searchNotFound={
                              lang === "English"
                                ? "No countries found"
                                : "لم يتم العثور على دول"
                            }
                            preferredCountries={[
                              "us",
                              "gb",
                              "ca",
                              "sa",
                              "ae",
                              "eg",
                            ]}
                            regions={[
                              "america",
                              "europe",
                              "asia",
                              "oceania",
                              "africa",
                            ]}
                            buttonStyle={{
                              borderRadius: "0.375rem 0 0 0.375rem",
                            }}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Message Field */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {lang === "English" ? "Message" : "الرسالة"}
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        className="w-full h-44"
                        placeholder={
                          lang === "English" ? "Your message" : "رسالتك"
                        }
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Error Message */}
              {error && <p className="text-red-500 text-center">{error}</p>}

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="mx-auto flex items-center gap-2 text-md"
                disabled={isLoading}
              >
                {isLoading && <Loader className="animate-spin" />}
                {isLoading
                  ? lang === "English"
                    ? "Sending..."
                    : "جاري الإرسال..."
                  : lang === "English"
                  ? "Send Message"
                  : "أرسال الرسالة"}
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
