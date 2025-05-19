"use client"

import { Toast, ToastClose, ToastDescription, ToastProvider, ToastViewport, ToastTitle } from "@/components/ui/toast"
import { useToast } from "@/hooks/use-toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, action, ...props }) => (
        <Toast key={id} {...props} duration={3000}>
          <div className="grid gap-1">
            {title && <ToastTitle>{title}</ToastTitle>}
            {description && <ToastDescription>{description}</ToastDescription>}
          </div>
          {action}
          <ToastClose />
        </Toast>
      ))}
      <ToastViewport className="bottom-0 left-0 flex flex-col p-6 sm:bottom-0 sm:left-0 sm:top-auto sm:flex-col md:max-w-[420px]" />
    </ToastProvider>
  )
}

