"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";

type Props = {};

const formSchema = z.object({
  username: z.string().min(2).max(50),
  password: z.string().min(8).max(16),
});

export default function Login({}: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (value: z.infer<typeof formSchema>) => {
    console.log(value);
  };

  return (
    <main className="place-content-center">
      <div className="flex flex-col p-5 gap-4 " >
        <div className="flex flex-col gap-3">
          <img className="mx-auto my-0" src="/images/logo/purple.png" width={120} alt="Mankucha" />
          <h1 className="text-center text-2xl text-foreground">Mankucha Dashboard</h1>
        </div>
        <div className="flex justify-center">
          <Form {...form}>
            <form className="flex flex-col gap-6 w-[380px] max-sm:w-[250px] " onSubmit={form.handleSubmit(onSubmit)}>

              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>

                    <FormControl>
                      <Input type="text" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button type="submit">Log In</Button>
            </form>
          </Form>
        </div>
      </div>
    </main>
  );
}
