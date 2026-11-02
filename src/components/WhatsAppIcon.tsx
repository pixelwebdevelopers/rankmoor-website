import React from "react";
import { FaWhatsapp } from "react-icons/fa6";

export function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return <FaWhatsapp className={className} aria-hidden="true" />;
}
