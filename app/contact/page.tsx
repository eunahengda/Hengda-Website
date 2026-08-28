import type { Metadata } from "next";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get a quotation from H&D Hengda Industries Sdn Bhd. Call, WhatsApp, or email us, or visit our workshop in Tanah Tampoi, Johor Bahru.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactContent />;
}
