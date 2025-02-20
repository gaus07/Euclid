import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import otpGenerator from "otp-generator";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateOTP = () => {
  return otpGenerator.generate(6, {
    digits: true,
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });
};

// export const sendEmail = async (email: string, token: string) => {
//   const transporter = nodemailer.createTransport({
//     host: process.env.SMTP_HOST,
//     port: Number(process.env.SMTP_PORT),
//     secure: process.env.SMTP_SECURE === "true",
//     auth: {
//       user: process.env.SMTP_USER,
//       pass: process.env.SMTP_PASS,
//     },  
//   })

//   await transporter.sendMail({
//     from: '"testingdev" <testingdev619@gmail.com>',
//     to: email,
//     subject: "Your OTP for admin access",
//     text: `Your OTP is ${token}`,
//   })
// }
