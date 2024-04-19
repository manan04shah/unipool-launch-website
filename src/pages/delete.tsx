"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import "../app/globals.css";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import Navbar from "./navbar";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Image from "next/image";

const formSchema = z.object({
  email: z.string().min(2, {
    message:
      "Enter the email address associated with the account you would like to delete. We will process the delete request as soon as possible.",
  }),
});

export default function Delete() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const [showAlert, setShowAlert] = useState(false); // Add state for alert visibility

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    setShowAlert(true); // Show the alert when form is submitted
  }

  return (
    <div className="h-dvh w-full flex md:flex-row flex-col">
      <Navbar />
      <div className="left-box bg-white w-full order-1 md:w-1/2 h-full flex flex-col justify-center items-center p-10">
        <h1 className="text-4xl font-extrabold text-text-purple mb-5 md:mt-0 mt-5">
          Delete my data
        </h1>
        <Image
          src="/unipool-main-logo.svg"
          alt="Delete"
          width={500}
          height={500}
          quality={100}
        />
      </div>
      <div className="right-box order-2 bg-main-grey w-full md:w-1/2 h-full flex justify-center items-center p-10">
        {showAlert && ( // Render the alert if showAlert is true
          <Alert className="mb-4 absolute w-[65vw] md:w-[20vw] bottom-2 md:top-2 md:bottom-auto right-2">
            <AlertTitle>Request Submitted</AlertTitle>
            <AlertDescription>Your form has been submitted. We shall process your delete request soon.</AlertDescription>
          </Alert>
        )}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="email" {...field} />
                  </FormControl>
                  <FormDescription>
                    Enter the email address associated with the account you
                    would like to delete. We will process the delete request as
                    soon as possible.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="bg-text-purple">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}