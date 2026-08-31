import { fireEvent, render, screen } from "@testing-library/react";
import { ServiceGalleryCard } from "./ServiceGalleryCard";

describe("ServiceGalleryCard", () => {
  it("renders the gallery image label", () => {
    render(
      <ServiceGalleryCard
        label="Drainage"
        image="/images/services/structural_page/drainage.webp"
        imageAlt="Drainage and grading condition at a foundation corner"
      />,
    );

    expect(
      screen.getByRole("img", { name: /drainage and grading condition/i }),
    ).toBeInTheDocument();
    expect(screen.getByText("Drainage")).toBeInTheDocument();
  });

  it("opens an expanded image preview when the image is clicked", () => {
    render(
      <ServiceGalleryCard
        label="Drainage"
        image="/images/services/structural_page/drainage.webp"
        imageAlt="Drainage and grading condition at a foundation corner"
      />,
    );

    fireEvent.click(
      screen.getByRole("button", { name: /view larger drainage/i }),
    );

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getAllByRole("img")).toHaveLength(2);
  });

  it("closes the expanded image preview", () => {
    render(
      <ServiceGalleryCard
        label="Drainage"
        image="/images/services/structural_page/drainage.webp"
        imageAlt="Drainage and grading condition at a foundation corner"
      />,
    );

    fireEvent.click(
      screen.getByRole("button", { name: /view larger drainage/i }),
    );
    fireEvent.keyDown(window, { key: "Escape" });

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
