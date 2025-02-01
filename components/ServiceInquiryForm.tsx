"use client"

import { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { toast } from "sonner"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB

const phoneRegex = /^(\+91[-\s]?)?[0]?(91)?[789]\d{9}$/

const schema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  workEmail: z.string().email("Invalid email address"),
  contactNumber: z.string().regex(phoneRegex, "Invalid phone number"),
  serviceRequired: z.enum([
    "Blockchain Consulting",
    "DApp Development",
    "Security Audit",
    "Enterprise Training",
    "Joint Research",
  ]),
  projectType: z.enum(["Public Blockchain", "Private Blockchain", "Consortium Blockchain", "Hybrid Solution"]),
  projectTitle: z.string().min(2, "Project title is required"),
  technicalRequirements: z.string().min(10, "Technical requirements must be at least 10 characters"),
  technicalDocument: z
    .instanceof(FileList)
    .refine((files) => files.length > 0, "Technical document is required")
    .refine((files) => files[0]?.size <= MAX_FILE_SIZE, "Max file size is 5MB")
    .refine(
      (files) =>
        [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ].includes(files[0]?.type),
      "Only PDF, DOC, and DOCX files are allowed",
    ),
  estimatedBudget: z.enum(["₹10L - ₹25L", "₹25L - ₹50L", "₹50L - ₹1Cr", "1Cr+"]),
  projectTimeline: z.enum(["1-3 Months", "3-6 Months", "6-12 Months"]),
})

type FormData = z.infer<typeof schema>

export function ServiceInquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/services", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Submission failed")
      }

      toast.success("Form submitted successfully!")
    } catch (error) {
      toast.error("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 px-4 py-6 sm:px-6 bg-card">
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Personal Information</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <Label htmlFor="fullName" className="block text-sm font-medium text-card-foreground mb-1">
              Full Name
            </Label>
            <Input
              id="fullName"
              {...register("fullName")}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-background"
            />
            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
          </div>
          <div>
            <Label htmlFor="workEmail" className="block text-sm font-medium text-card-foreground mb-1">
              Work Email
            </Label>
            <Input
              id="workEmail"
              type="email"
              {...register("workEmail")}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-background"
            />
            {errors.workEmail && <p className="text-red-500 text-sm mt-1">{errors.workEmail.message}</p>}
          </div>
          <div>
            <Label htmlFor="contactNumber" className="block text-sm font-medium text-card-foreground mb-1">
              Contact Number
            </Label>
            <Input
              id="contactNumber"
              {...register("contactNumber")}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-background"
            />
            {errors.contactNumber && <p className="text-red-500 text-sm mt-1">{errors.contactNumber.message}</p>}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Service Details</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <Label htmlFor="serviceRequired" className="block text-sm font-medium text-card-foreground mb-1">
              Service Required
            </Label>
            <Controller
              name="serviceRequired"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-background">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Blockchain Consulting">Blockchain Consulting</SelectItem>
                    <SelectItem value="DApp Development">DApp Development</SelectItem>
                    <SelectItem value="Security Audit">Security Audit</SelectItem>
                    <SelectItem value="Enterprise Training">Enterprise Training</SelectItem>
                    <SelectItem value="Joint Research">Joint Research</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.serviceRequired && <p className="text-red-500 text-sm mt-1">{errors.serviceRequired.message}</p>}
          </div>
          <div>
            <Label htmlFor="projectType" className="block text-sm font-medium text-card-foreground mb-1">
              Project Type
            </Label>
            <Controller
              name="projectType"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-background">
                    <SelectValue placeholder="Select a project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Public Blockchain">Public Blockchain</SelectItem>
                    <SelectItem value="Private Blockchain">Private Blockchain</SelectItem>
                    <SelectItem value="Consortium Blockchain">Consortium Blockchain</SelectItem>
                    <SelectItem value="Hybrid Solution">Hybrid Solution</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.projectType && <p className="text-red-500 text-sm mt-1">{errors.projectType.message}</p>}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Project Specifications</h2>
        <div className="space-y-6">
          <div>
            <Label htmlFor="projectTitle" className="block text-sm font-medium text-card-foreground mb-1">
              Project Title
            </Label>
            <Input
              id="projectTitle"
              {...register("projectTitle")}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-background"
            />
            {errors.projectTitle && <p className="text-red-500 text-sm mt-1">{errors.projectTitle.message}</p>}
          </div>
          <div>
            <Label htmlFor="technicalRequirements" className="block text-sm font-medium text-card-foreground mb-1">
              Technical Requirements
            </Label>
            <Textarea
              id="technicalRequirements"
              {...register("technicalRequirements")}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-background"
            />
            {errors.technicalRequirements && (
              <p className="text-red-500 text-sm mt-1">{errors.technicalRequirements.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="technicalDocument" className="block text-sm font-medium text-card-foreground mb-1">
              Upload Technical Document
            </Label>
            <Input
              id="technicalDocument"
              type="file"
              accept=".pdf,.doc,.docx"
              {...register("technicalDocument")}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-background"
            />
            {errors.technicalDocument && (
              <p className="text-red-500 text-sm mt-1">{errors.technicalDocument.message}</p>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Additional Information</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <Label htmlFor="estimatedBudget" className="block text-sm font-medium text-card-foreground mb-1">
              Estimated Budget
            </Label>
            <Controller
              name="estimatedBudget"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-background">
                    <SelectValue placeholder="Select a budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="₹10L - ₹25L">₹10L - ₹25L</SelectItem>
                    <SelectItem value="₹25L - ₹50L">₹25L - ₹50L</SelectItem>
                    <SelectItem value="₹50L - ₹1Cr">₹50L - ₹1Cr</SelectItem>
                    <SelectItem value="1Cr+">1Cr+</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.estimatedBudget && <p className="text-red-500 text-sm mt-1">{errors.estimatedBudget.message}</p>}
          </div>
          <div>
            <Label htmlFor="projectTimeline" className="block text-sm font-medium text-card-foreground mb-1">
              Project Timeline
            </Label>
            <Controller
              name="projectTimeline"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-background">
                    <SelectValue placeholder="Select a timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-3 Months">1-3 Months</SelectItem>
                    <SelectItem value="3-6 Months">3-6 Months</SelectItem>
                    <SelectItem value="6-12 Months">6-12 Months</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.projectTimeline && <p className="text-red-500 text-sm mt-1">{errors.projectTimeline.message}</p>}
          </div>
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-2 px-4 rounded-md transition-colors duration-300"
      >
        {isSubmitting ? "Submitting..." : "Submit Inquiry"}
      </Button>
    </form>
  )
}

