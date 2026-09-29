import { canonicalPath, getSiteUrl, pageMetadata } from "./site";

describe("getSiteUrl", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("uses the production domain when no env var is set", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "");

    expect(getSiteUrl()).toBe("https://txcovenanthomeinspections.com");
  });

  it("uses NEXT_PUBLIC_SITE_URL without a trailing slash", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "https://txcovenanthomeinspections.com/");

    expect(getSiteUrl()).toBe("https://txcovenanthomeinspections.com");
  });
});

describe("canonicalPath", () => {
  it("keeps the homepage as a single slash", () => {
    expect(canonicalPath("/")).toBe("/");
  });

  it("adds a trailing slash so canonicals match the live URLs", () => {
    expect(canonicalPath("/about")).toBe("/about/");
    expect(canonicalPath("/services/electrical")).toBe("/services/electrical/");
  });
});

describe("pageMetadata", () => {
  it("points canonical and Open Graph URLs at the apex path", () => {
    const metadata = pageMetadata({
      path: "/contact",
      title: "Contact",
      description: "Get in touch.",
    });

    expect(metadata.alternates).toEqual({ canonical: "/contact/" });
    expect(metadata.openGraph).toMatchObject({
      url: "/contact/",
      title: "Contact",
      description: "Get in touch.",
    });
  });
});
