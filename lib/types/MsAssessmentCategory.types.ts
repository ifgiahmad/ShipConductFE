import { z } from "zod";

export type MsAssessmentCategory = {
  id: number;
  vslType: string;
  item: string;
  interval: string;
  shipSection: string;
  createdBy?: string;
  createdDate?: Date | null;
  modifiedBy?: string;
  modifiedDate?: Date | null;
  mode?: string;
  deleted: boolean;
};

export const saveMsAssessmentCategoryZod = z.object({
  vslType: z.string().min(1, "Vessel Type is required"),
  item: z.string().min(1, "Item is required"),
  interval: z.string().min(1, "Interval is required"),
  shipSection: z.string().min(1, "Ship Section is required"),
  id: z.number().optional(),
  mode: z.string().optional(),
  deleted: z.boolean().optional(),
});

export type saveMsAssessmentCategoryDto = z.infer<
  typeof saveMsAssessmentCategoryZod
>;
