import { isNavItemActive, NAV_ITEMS } from "./navigation";

describe("navigation", () => {
  const servicesItem = NAV_ITEMS.find((item) => item.label === "Services");

  it("includes links to each service detail page", () => {
    const structural = servicesItem?.children?.find(
      (child) => child.label === "Structural",
    );

    expect(structural?.href).toBe("/services/structural");
    expect(structural?.children).toBeUndefined();
  });

  it("includes a child link for every service", () => {
    const serviceChildren = servicesItem?.children ?? [];

    expect(serviceChildren).toHaveLength(5);
    for (const service of serviceChildren) {
      expect(service.href).toMatch(/^\/services\//);
      expect(service.children).toBeUndefined();
    }
  });

  it("includes a link to the preferred vendors page", () => {
    const vendorsItem = NAV_ITEMS.find((item) => item.label === "Vendors");

    expect(vendorsItem?.href).toBe("/preferred-vendors");
    expect(vendorsItem?.children).toBeUndefined();
  });
});

describe("isNavItemActive", () => {
  function item(label: string) {
    const found = NAV_ITEMS.find((navItem) => navItem.label === label);
    if (!found) {
      throw new Error(`Missing nav item ${label}`);
    }
    return found;
  }

  it.each([
    ["/", "Home"],
    ["/about", "About"],
    ["/about/", "About"],
    ["/services", "Services"],
    ["/services/", "Services"],
    ["/services/structural/", "Services"],
    ["/preferred-vendors", "Vendors"],
    ["/preferred-vendors/", "Vendors"],
    ["/contact", "Contact"],
    ["/contact/", "Contact"],
  ])("treats %s as the active %s tab", (pathname, label) => {
    expect(isNavItemActive(pathname, item(label))).toBe(true);
  });

  it("does not mark other tabs active on a trailing-slash page", () => {
    expect(isNavItemActive("/about/", item("Home"))).toBe(false);
    expect(isNavItemActive("/contact/", item("Vendors"))).toBe(false);
    expect(isNavItemActive("/preferred-vendors/", item("Contact"))).toBe(false);
  });
});
