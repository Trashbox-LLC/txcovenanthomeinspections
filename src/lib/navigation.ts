import { SERVICES } from "@/lib/services";

export interface NavChildItem {
  label: string;
  href: string;
  children?: NavChildItem[];
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChildItem[];
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: SERVICES.map((service) => ({
      label: service.title,
      href: `/services/${service.slug}`,
    })),
  },
  { label: "Vendors", href: "/preferred-vendors" },
  { label: "Contact", href: "/contact" },
];

function normalizePathname(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }

  return pathname;
}

export function isNavItemActive(pathname: string, item: NavItem): boolean {
  const current = normalizePathname(pathname);
  const href = normalizePathname(item.href);

  if (item.children) {
    return current === href || current.startsWith(`${href}/`);
  }

  return current === href;
}
