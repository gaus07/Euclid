"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Shield, MessageSquare, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import LoginPage from './auth/login';

type View = "admin" | "contact"

const adminSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentView, setCurrentView] = useState<View>("contact")

  const getHeaderIcon = () => {
    switch (currentView) {
      case "admin":
        return <Shield className="size-8 text-primary" />
      case "contact":
        return <MessageSquare className="size-8 text-primary" />
    }
  }

  const AdminView = () => {
    const form = useForm<z.infer<typeof adminSchema>>({
      resolver: zodResolver(adminSchema),
      defaultValues: {
        username: "",
        password: "",
      },
    })

    function onSubmit(values: z.infer<typeof adminSchema>) {
      console.log(values)
    }

    return (
      <div className="p-6 space-y-4">
        <LoginPage />
      </div>
    )
  }

  const ContactView = () => {
    const form = useForm<z.infer<typeof contactSchema>>({
      resolver: zodResolver(contactSchema),
      defaultValues: {
        name: "",
        email: "",
        message: "",
      },
    })

    function onSubmit(values: z.infer<typeof contactSchema>) {
      console.log(values)
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
                  <FormLabel>Name</FormLabel>
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Your email" {...field} />
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
                    <Textarea placeholder="Your message..." className="min-h-[100px] resize-none" {...field} />
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
    )
  }

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
              {currentView === "admin" && <AdminView />}
              {currentView === "contact" && <ContactView />}
            </motion.div>

            {/* Bottom Navigation */}
            <motion.div
              className="mt-auto bg-muted/10 p-2 grid grid-cols-2 gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Button
                variant="ghost"
                className={`flex flex-col items-center gap-1 py-3 h-auto rounded-lg hover:bg-primary hover:text-primary-foreground
                  ${currentView === "contact" ? "bg-primary text-primary-foreground" : ""}`}
                onClick={() => setCurrentView("contact")}
              >
                <MessageSquare className="size-5" />
                <span className="text-xs font-medium">Contact Us</span>
              </Button>
              <Button
                variant="ghost"
                className={`flex flex-col items-center gap-1 py-3 h-auto rounded-lg hover:bg-primary hover:text-primary-foreground
                  ${currentView === "admin" ? "bg-primary text-primary-foreground" : ""}`}
                onClick={() => setCurrentView("admin")}
              >
                <Shield className="size-5" />
                <span className="text-xs font-medium">Admin Access</span>
              </Button>
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
          className="rounded-full size-14 p-0 shadow-lg relative overflow-hidden group"
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

          {isOpen ? <ChevronDown className="size-6 relative z-10" /> : <Send className="size-6 relative z-10" /> }
          
        </Button>
      </motion.div>
    </div>
  )
}

