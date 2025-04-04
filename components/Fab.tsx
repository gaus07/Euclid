"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Shield,
  MessageSquare,
  Send,
  LogOut,
  UserCog2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import LoginPage from "./auth/login";
import { getUser } from "@/actions/actions";
import { SessionData } from "@/lib/sessionOptions";
import { useRouter, useSearchParams } from "next/navigation";
import validator from "validator"

type View = "admin" | "contact" | "profile";

const adminSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  contactno: z.string().refine(validator.isMobilePhone),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentView, setCurrentView] = useState<View>("contact");
  const [session, setSession] = useState<SessionData | undefined>();
  const [accessKey, setAccessKey] = useState<string>("abcd");
  const [show, setShow] = useState<boolean>(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const keyParam = searchParams.get("access_key");

    if (keyParam && keyParam === accessKey) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [searchParams, accessKey]);

  useEffect(() => {
    const fetchData = async () => {
      const user = await getUser();
      setSession(user);
    };
    fetchData();
  }, [router]);

  // const copyAccessKey = () => {
  //   navigator.clipboard.writeText(`${window.location.origin}?access_key=${accessKey}`);
  //   alert("Access URL copied to clipboard!");
  // };

  const getHeaderIcon = () => {
    switch (currentView) {
      case "admin":
        return <Shield className="size-8 text-primary" />;
      case "contact":
        return <MessageSquare className="size-8 text-primary" />;
    }
  };

  const handleLogout = async () => {
    const isLogout = await fetch("/api/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (isLogout.ok) {
      setIsOpen(false);
      setSession(undefined);
      setCurrentView("admin");
      router.replace("/");
    }
  };

  const ProfileView = () => (
    <div className="p-4 space-y-6">
      <div className="text-center space-y-2">
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
            <UserCog2 className="size-12 text-primary" />
          </div>
        </div>
        <h2 className="text-2xl font-semibold">
          Welcome,
          <span className="text-xl text-black font-semibold">
            {session?.username}!
          </span>
        </h2>
        <p className="text-sm text-muted-foreground">
          You're logged in as an administrator
        </p>
      </div>

      <div className="space-y-4">
        <Button
          variant="destructive"
          className="w-full bg-primary text-white"
          onClick={handleLogout}
        >
          <LogOut className="size-4 mr-2" />
          Logout
        </Button>
      </div>
    </div>
  );

  const AdminView = () => {
    const form = useForm<z.infer<typeof adminSchema>>({
      resolver: zodResolver(adminSchema),
      defaultValues: {
        username: "",
        password: "",
      },
    });

    function onSubmit(values: z.infer<typeof adminSchema>) {
      console.log(values);
    }

    return (
      <div className="p-6 space-y-4">
        <LoginPage />
        {/* {show && (
          <div className="mt-4 p-3 bg-primary/5 rounded-lg border border-primary/10">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Key className="h-4 w-4 text-primary" />
                <span className="text-xs text-muted-foreground">Admin Access Key</span>
              </div>
              <button
                onClick={copyAccessKey}
                className="text-xs text-primary hover:text-primary/80 underline"
              >
                Copy URL
              </button>
            </div>
          </div>
        )} */}
      </div>
    );
  };

  const ContactView = () => {
    const form = useForm<z.infer<typeof contactSchema>>({
      resolver: zodResolver(contactSchema),
      defaultValues: {
        name: "",
        email: "",
        contactno: "",
        message: "",
      },
    });

    async function onSubmit(values: z.infer<typeof contactSchema>) {
      await fetch("/api/services", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      }
      )
      .then((ok) => {
        if(ok.ok) console.log("successfully submitted");
      })
      .catch((err) => console.log(err))
    }

    return (
      <div className="p-4 space-y-4">
        <h2 className="text-xl font-semibold">Contact Us</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Work Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contactno"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Number</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Your message..."
                      className="min-h-[100px] resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </Form>
      </div>
    );
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end z-50">
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.95,
              transformOrigin: "bottom right",
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1],
              },
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.95,
              transition: {
                duration: 0.2,
                ease: [0.4, 0, 1, 1],
              },
            }}
            className="mb-4 w-[380px] rounded-lg bg-background shadow-md flex flex-col bg-gradient-to-b from-[var(--gradient-start)] to-background/80 opacity-90 overflow-hidden"
            role="dialog"
            aria-label="Chat window"
          >
            {/* Header with animated icon */}
            <motion.div
              className="h-20 text-primary-foreground flex items-center justify-center relative overflow-hidden"
              initial={false}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentView}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.3,
                      ease: [0.4, 0, 0.2, 1],
                    },
                  }}
                  exit={{
                    y: -20,
                    opacity: 0,
                    transition: {
                      duration: 0.2,
                      ease: [0.4, 0, 1, 1],
                    },
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  {getHeaderIcon()}
                </motion.div>
              </AnimatePresence>

              {/* Animated background circles */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={false}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.2, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-foreground/10 to-transparent rounded-full blur-xl" />
              </motion.div>
            </motion.div>

            {/* Content Area */}
            <motion.div
              className="flex-grow overflow-auto max-h-[600px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {currentView === "admin" && show && <AdminView />}
              {currentView === "contact" && <ContactView />}
              {session && currentView === "profile" && <ProfileView />}
            </motion.div>

            {/* Bottom Navigation */}
            <motion.div
              className="mt-auto bg-muted/10 p-2 grid grid-cols-2 gap-2"
              style={{ gridTemplateColumns: show || session ? "1fr 1fr" : "1fr" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Button
                variant="ghost"
                className={`flex flex-col items-center gap-1 py-3 h-auto rounded-lg hover:bg-primary hover:text-primary-foreground
                  ${
                    currentView === "contact"
                      ? "bg-primary text-primary-foreground"
                      : ""
                  }`}
                onClick={() => setCurrentView("contact")}
              >
                <MessageSquare className="size-5" />
                <span className="text-xs font-medium">Contact Us</span>
              </Button>
              { (show || session) && (
              <Button
                variant="ghost"
                className={`flex flex-col items-center gap-1 py-3 h-auto rounded-lg hover:bg-primary hover:text-primary-foreground
                  ${
                    currentView === "admin" || currentView === "profile"
                      ? "bg-primary text-primary-foreground"
                      : ""
                  }`}
                onClick={() => setCurrentView(session ? "profile" : "admin")}
                disabled={!show && !session}
              >
                {session ? (
                  <>
                    <UserCog2 className="size-5" />
                    <span className="text-xs font-medium">Profile</span>
                  </>
                ) : (
                  <>
                    <Shield className="size-5" />
                    <span className="text-xs font-medium">Admin Access</span>
                  </>
                )}
              </Button>
        )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={false}
        animate={{
          rotate: isOpen ? 360 : 0,
          scale: isOpen ? 0.9 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <Button
          className="rounded-full size-14 p-0 shadow-lg relative overflow-hidden group flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-haspopup="dialog"
          aria-label={isOpen ? "Close chat" : "Open chat"}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />

          {isOpen ? (
            <ChevronDown className="size-6 relative z-10" />
          ) : (
            <Send className="size-6 relative z-10" />
          )}
        </Button>
      </motion.div>
    </div>
  );
}