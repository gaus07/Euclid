"use client";

import type React from "react";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RequestAccessForm } from "@/components/RequestAccessForm";
import { AcceptRequest } from "@/lib/adminQuery";
// import { sendEmail } from "@/lib/utils";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [showRequestAccess, setShowRequestAccess] = useState(false);
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);


  useEffect(() => {
    const send = async () => {
      // await fetch("/api/send-email", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     email: "testingdev9594@gmail.com",
      //     subject: "Your OTP for admin access",
      //     text: `Your OTP is ${123456}`,
      //   }),
      // });
    };
    send();
  }, []);

  const handleSendOtp = async () => {
    // TODO: Implement OTP sending logic here
    await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    })
      .then((res) => {
        if (res.ok) setIsOtpSent(true);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  const handleVerifyOtp = async () => {
    await fetch("/api/authorize-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ otp: otp, email: email }),
    })
      .then((res) => {
        if (res.ok) setIsOtpVerified(true);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isOtpVerified) {
      return;
    }

    await fetch("/api/update-username", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, username: username }),
    })
      .then((res) => {
        if (res.ok) {
          setShowRequestAccess(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("Logging in with email:", email);
  };

  const handleRequestAccessSubmit = () => {
    // Handle request access logic here
    console.log("Requesting access for email:", email);
    setShowRequestAccess(false);
  };

  return (
    // <div className="w-full mt-20 flex items-center justify-center">
    //   <div className="w-full max-w-md p-8 mx-4 bg-white/10 backdrop-filter backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold tracking-tight text-foreground">
              {showRequestAccess ? "Request Access" : "Log In"}
            </h1>
            {!showRequestAccess ? (
              <p className="text-muted-foreground">
                Not admin yet?{" "}
                <button
                  onClick={() => setShowRequestAccess(true)}
                  className="text-primary hover:text-primary/80 underline"
                >
                  Request access
                </button>
              </p>
            ) : (
              <p className="text-muted-foreground">
                Already have admin access?{" "}
                <button
                  onClick={() => setShowRequestAccess(false)}
                  className="text-primary hover:text-primary/80 underline"
                >
                  Login
                </button>
              </p>
            )}
          </div>

          {showRequestAccess ? (
            <RequestAccessForm
              setShowRequestAccess={setShowRequestAccess}
              onSubmit={handleRequestAccessSubmit}
            />
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <div className="flex space-x-2">
                  <Input
                    id="email"
                    type="email"
                    placeholder="Use company email address"
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
          )}
        </div>
    //   </div>
    // </div>
  );
}
