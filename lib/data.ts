import { PrismaClient } from "@/prisma/generated/shipconduct";

const prismaShipconduct = new PrismaClient({
  datasources: { dbShipConduct: { url: process.env.DATABASE_SHIPCONDUCT_URL } },
});

export const getAssessmentCategory = async () => {
  try {
    const assessmentCategory =
      await prismaShipconduct.ms_AssessmentCategory.findMany();
    return assessmentCategory;
  } catch (error) {
    throw new Error("Failed to fetch assessmentCategory data");
  }
};

export const getAssessmentCategoryById = async (id: bigint) => {
  try {
    const assessmentCategory =
      await prismaShipconduct.ms_AssessmentCategory.findUnique({
        where: {
          Id: id,
        },
      });

    if (assessmentCategory) {
      return {
        ...assessmentCategory,
        Id: assessmentCategory.Id.toString(), // Convert BigInt Id to string
      };
    }

    return assessmentCategory;
  } catch (error) {
    throw new Error("Failed to fetch assessmentCategory data");
  }
};
