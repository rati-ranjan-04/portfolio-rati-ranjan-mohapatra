import { describe, expect, it, vi } from "vitest";
import type { TrpcContext } from "./_core/context";

const { getCertifications } = vi.hoisted(() => ({
  getCertifications: vi.fn(),
}));

vi.mock("./db", () => ({
  getCertifications,
}));

import { appRouter } from "./routers";

const context: TrpcContext = {
  user: null,
  req: {} as TrpcContext["req"],
  res: {} as TrpcContext["res"],
};

describe("certifications.list", () => {
  it("returns the featured IIRS record before the Cisco records", async () => {
    getCertifications.mockResolvedValue([
      {
        id: 1,
        title: "AI/ML for Geodata Analytics",
        isFeatured: 1,
        type: "workshop",
      },
      {
        id: 2,
        title: "Cisco Ethical Hacker",
        isFeatured: 0,
        type: "certificate",
      },
      {
        id: 3,
        title: "Cisco Introduction to Cybersecurity",
        isFeatured: 0,
        type: "certificate",
      },
    ]);

    const result = await appRouter.createCaller(context).certifications.list();

    expect(getCertifications).toHaveBeenCalledOnce();
    expect(result.map((record) => record.title)).toEqual([
      "AI/ML for Geodata Analytics",
      "Cisco Ethical Hacker",
      "Cisco Introduction to Cybersecurity",
    ]);
    expect(result[0]?.isFeatured).toBe(1);
  });
});
