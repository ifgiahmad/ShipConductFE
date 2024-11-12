import { z } from "zod";
export type MsInterval = {
  id: number;
  interval: string;
  createdBy?: string;
  createdDate?: Date | null;
  modifiedBy?: string;
  modifiedDate?: Date | null;
  isDeleted: boolean;
};

export const saveMsIntervalZod = z.object({
  interval: z.string().min(1, "Interval is required"),
  id: z.number().optional(),
  mode: z.string().optional(),
  isDeleted: z.boolean().optional(),
});

export type saveMsIntervalDto = z.infer<typeof saveMsIntervalZod>;
