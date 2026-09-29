import { render } from "@testing-library/react";
import { SiteJsonLd } from "./SiteJsonLd";

describe("SiteJsonLd", () => {
  it("marks the apex URL as the business website", () => {
    const { container } = render(<SiteJsonLd />);
    const script = container.querySelector('script[type="application/ld+json"]');
    const data = JSON.parse(script?.textContent ?? "{}") as {
      url: string;
      name: string;
    };

    expect(data.name).toBe("Texas Covenant Home Inspections");
    expect(data.url).toBe("https://txcovenanthomeinspections.com/");
  });
});
