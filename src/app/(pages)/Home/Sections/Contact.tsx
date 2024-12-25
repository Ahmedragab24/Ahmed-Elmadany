"use client";

import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/providers/LanguageContextProvider";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const { lang } = useLanguage();

  return (
    <section className="section border-none" id="Contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="sectionTitle"
        >
          {lang == "English" ? "Contact Me" : "تواصل معي"}
        </motion.div>
        <div className="container mx-auto px-5">
          <div className="mb-12 flex w-full flex-col text-center">
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mx-auto text-base leading-relaxed lg:w-1/2"
            >
              {lang == "English"
                ? "Feel free to contact me! Whether you have a question, comment, or collaboration suggestion, I&apos;d love to hear from you."
                : "لا تتردد في الاتصال بي! سواء كان لديك سؤال أو تعليق أو اقتراح للتعاون، يسعدني أن أسمع منك."}
            </motion.div>
          </div>

          <div className="mx-auto md:w-2/3 lg:w-1/2">
            <div className="-m-2 flex flex-wrap">
              {/* <!-- form --> */}
              <div className="w-1/2 p-2">
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="relative"
                >
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="peer w-full rounded border border-primary bg-secondary bg-opacity-40 py-1 px-3 text-base leading-8 text-muted-foreground placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-primary focus:bg-input focus:ring-2 focus:ring-primary"
                    placeholder={lang == "English" ? "Name" : "الأسم"}
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-primary transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary"
                  >
                    {lang == "English" ? "Name" : "الأسم"}
                  </label>
                </motion.div>
              </div>

              <div className="w-1/2 p-2">
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="relative"
                >
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="peer w-full rounded border border-primary bg-secondary bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-primary focus:bg-input focus:ring-2 focus:ring-primary"
                    placeholder={
                      lang == "English" ? "Email" : "البريد الإلكتروني"
                    }
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-primary transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary"
                  >
                    {lang == "English" ? "Email" : "البريد الإلكتروني"}
                  </label>
                </motion.div>
              </div>

              <div className="mt-4 w-full p-2">
                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="relative"
                >
                  <textarea
                    id="message"
                    name="message"
                    className="peer h-32 w-full resize-none rounded border border-primary bg-secondary  bg-opacity-40 py-1 px-3 text-base leading-6 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-primary focus:bg-input focus:ring-2 focus:ring-primary"
                    placeholder={lang == "English" ? "Massage" : "الرسالة"}
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-primary transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary"
                  >
                    {lang == "English" ? "Massage" : "الرسالة"}
                  </label>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="mx-auto p-2"
              >
                <Button size={"lg"}>
                  {lang == "English" ? "Send Massage" : "أرسال الرسالة"}
                </Button>
              </motion.div>

              {/* <!-- footer --> */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-8 w-full border-t border-gray-700 p-2 pt-8 text-center"
              >
                <p className="my-3  leading-normal">
                  <span className="text-primary">
                    {lang == "English" ? "Ahmed Elmadany" : "أحمد المدني"}
                  </span>
                  <br />
                  {lang == "English"
                    ? "Front-end Developer"
                    : "مطور الوجهات الامامية"}
                </p>
                <div className="inline-flex space-x-3">
                  <Link
                    href="https://www.facebook.com/EngAhmedRagab24/"
                    target="_blank"
                  >
                    <FacebookOutlinedIcon className="text-muted-foreground duration-200 hover:duration-200 hover:text-primary hover:translate-y-[-2px]" />
                  </Link>

                  <Link
                    href="https://api.whatsapp.com/send?phone=201228317491&text=Hello, more information!"
                    target="_blank"
                  >
                    <WhatsAppIcon className="text-muted-foreground duration-200 hover:duration-200 hover:text-primary hover:translate-y-[-2px]" />
                  </Link>

                  <Link
                    href="https://www.linkedin.com/in/ahmed-ragab-558a31209"
                    target="_blank"
                  >
                    <LinkedInIcon className="text-muted-foreground duration-200 hover:duration-200 hover:text-primary hover:translate-y-[-2px]" />
                  </Link>

                  <Link href="https://github.com/Ahmedragab24" target="_blank">
                    <GitHubIcon className="text-muted-foreground duration-200 hover:duration-200 hover:text-primary hover:translate-y-[-2px]" />
                  </Link>

                  <Link
                    href="mailto:ahmedkavo17@gmail.com?subject=Subject%20Here&body=Message%20content%20here"
                    target="_blank"
                  >
                    <EmailIcon className="text-muted-foreground duration-200 hover:duration-200 hover:text-primary hover:translate-y-[-2px]" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
