"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { errorToast, successToast } from "@/lib/toast-utils";

interface RequestAccessFormProps {
  setShowRequestAccess: React.Dispatch<React.SetStateAction<boolean>>
}

export function RequestAccessForm({ setShowRequestAccess }: RequestAccessFormProps) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  // const [error, setError] = useState("")

  const handleSendOtp = async () => {
    await fetch('/api/request-access', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    }).then((res) => {
      if (res.ok) {
        setIsOtpSent(true);
        // successToast("OTP sent to your email.");
      }
  }).catch((error) => {
    // setError("Error sending OTP.");
    // errorToast("Error sending OTP.");
    console.error(error);
  });
  };

  const handleVerifyOtp = async () => {
    await fetch('/api/verify-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ otp, email }),
    }).then((res) => {
      if (res.ok) {
        setIsOtpVerified(true);
        // successToast("OTP verified successfully.");
      }
    }).catch((error) => {
      // setError("Invalid OTP.");
      // errorToast("Invalid OTP.");
      console.error(error);
    })
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isOtpVerified) {return}

    await fetch('/api/update-username', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, username }),
    }).then((res) => {
      if (res.ok) {
        // successToast("Request submitted successfully.");
        setShowRequestAccess(false);
      }
    }).catch((error) => {
      // setError("Error submitting request.");
      // errorToast("Error submitting request.");
      console.error(error);
    })
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="email">Email address</Label>
        <div className="flex space-x-2">
          <Input
            id="email"
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow bg-white/5 border-white/10 text-foreground dark:text-white placeholder:text-muted-foreground"
            required
          />
          <Button
            variant={"outline"}
            type="button"
            onClick={handleSendOtp}
            disabled={!email}
            className="w-24 hover:bg-primary hover:text-white"
          >
            send otp
          </Button>
        </div>
      </div>
      {isOtpSent && (
        <div className="space-y-2">
          <Label htmlFor="otp">Verification Code</Label>
          <div className="flex space-x-2">
            <Input
              id="otp"
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="flex-grow bg-white/5 border-white/10 text-foreground dark:text-white placeholder:text-muted-foreground"
              required
              disabled={isOtpVerified}
            />
            <Button
              type="button"
              variant={"outline"}
              onClick={handleVerifyOtp}
              disabled={!otp || isOtpVerified}
              className="hover:bg-primary hover:text-white"
            >
              Verify
            </Button>
          </div>
        </div>
      )}
      <div className="space-y-2">
        <Label htmlFor="username">Username</Label>
        <Input
          id="username"
          type="text"
          placeholder="Choose a username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="bg-white/5 border-white/10 text-foreground dark:text-white placeholder:text-muted-foreground"
          required
        />
      </div>
      <div className="flex justify-end space-x-4">
        <Button
          variant={"outline"}
          type="submit"
          className="w-full hover:bg-primary  hover:text-white"
          disabled={!isOtpVerified}
        >
          Submit
        </Button>
      </div>
    </form>
  );
}