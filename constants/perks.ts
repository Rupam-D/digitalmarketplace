import { Send, BadgeCheck, Sprout } from "lucide-react";
export interface PERKS {
  name: string;
  icon: any;
  desc: string;
}
export const perks = [
  {
    name: "Instant Delivery",
    icon: Send,
    desc: "Get your assests delivered in your email in seconds",
  },
  {
    name: "Guaranteed Quality",
    icon: BadgeCheck,
    desc: "Every assets on our platform is verified by team to ensure highest quality",
  },
  {
    name: "For the Planet",
    icon: Sprout,
    desc: "We've pledged 1% of sales to the preservation and restoration of nature",
  },
];
