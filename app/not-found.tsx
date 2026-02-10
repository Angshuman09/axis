"use client";
import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-[#FAFAFA] text-[#121212]">
      <div className="text-center max-w-md">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full border border-[#D4AF37]/30 bg-white shadow-sm">
            <Compass className="w-8 h-8 text-[#D4AF37]" />
          </div>
        </div>

        {/* 404 Text */}
        <h1 className="text-6xl font-bold tracking-tight mb-2">404</h1>
        <p className="text-lg text-[#121212]/70 mb-6">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Divider */}
        <div className="w-16 h-px bg-[#D4AF37] mx-auto mb-6" />

        {/* Button */}
        <Button variant={"ghost"} onClick={() => router.push("/")}>
          <ArrowLeft size={16} />
          Back to Home
        </Button>
      </div>
    </div>
  );
}
