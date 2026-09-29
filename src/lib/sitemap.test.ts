import { SERVICES } from "./services";
import { getSitemapEntries, getSitemapPaths } from "./sitemap";

describe("getSitemapPaths", () => {
  it("lists every public page on the apex domain with trailing slashes", () => {
    const paths = getSitemapPaths();

    expect(paths).toEqual([
      "/",
      "/about/",
      "/services/",
      ...SERVICES.map((service) => `/services/${service.slug}/`),
      "/preferred-vendors/",
      "/contact/",
      "/privacy/",
    ]);
  });

  it("does not include the www host or a GitHub Pages path", () => {
    const paths = getSitemapPaths();

    expect(paths.some((path) => path.includes("www."))).toBe(false);
    expect(paths.some((path) => path.includes("github.io"))).toBe(false);
  });

  it("builds absolute apex URLs for the sitemap", () => {
    const entries = getSitemapEntries("https://txcovenanthomeinspections.com");

    expect(entries[0]?.url).toBe("https://txcovenanthomeinspections.com/");
    expect(entries.map((entry) => entry.url)).toContain(
      "https://txcovenanthomeinspections.com/services/electrical/",
    );
  });
});
