import { render, screen } from "@testing-library/react";
import { ServiceAreaHero } from "./ServiceAreaHero";
import { getServiceAreaBySlug } from "@/lib/service-areas";

describe("ServiceAreaHero", () => {
  it("renders the city headline and supporting description", () => {
    const area = getServiceAreaBySlug("kingwood");
    expect(area).toBeDefined();

    render(<ServiceAreaHero area={area!} />);

    expect(
      screen.getByRole("heading", { name: /home inspector in kingwood, tx/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/service area/i)).toBeInTheDocument();
    expect(screen.getByText(area!.description)).toBeInTheDocument();
  });
});
