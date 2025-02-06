import { LoginForm } from "@/components/ui/login-form";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-4 bg-card rounded-lg">
        <LoginForm />
      </div>
    </div>
  );
}