import api from "@/lib/api";
import { TrVesselAssessmentDetail } from "@/lib/types/TrVesselAssessmentDetail.types";
import { AxiosResponse } from "axios";

export const getTrVesselAssessmentDetailForCrew = async (
  id: number
): Promise<TrVesselAssessmentDetail[]> => {
  const response = await api.get<TrVesselAssessmentDetail[]>(
    `api/vesselAssessmentForCrew/GetVesselAssessmentDetail?Id=${id}`
  );
  return response.data;
};

export const getTrVesselAssessmentDetailByIdForCrew = async (
  id: number
): Promise<TrVesselAssessmentDetail> => {
  const response = await api.get<TrVesselAssessmentDetail>(
    `api/vesselAssessmentForCrew/getVesselAssessmentDetailById?Id=${id}`
  );
  return response.data;
};

export const saveTrVesselAssessmentDetailForCrew = async (
  item: Partial<TrVesselAssessmentDetail>
): Promise<AxiosResponse<TrVesselAssessmentDetail>> => {
  try {
    console.log(item);
    const response = await api.post<TrVesselAssessmentDetail>(
      `api/vesselAssessmentForCrew/saveVesselAssessmentDetail`,
      item
    );
    return response;
  } catch (error) {
    console.error("Error saving Vessel Assessment Detail:", error);
    throw error;
  }
};

export const uploadPhotoForCrew = async (
  item: Partial<TrVesselAssessmentDetail>
): Promise<AxiosResponse<TrVesselAssessmentDetail>> => {
  const formData = new FormData();

  if (item.photo) formData.append("file", item.photo);
  if (item.id) formData.append("id", item.id.toString());
  if (item.photoDescription)
    formData.append("photoDescription", item.photoDescription.toString());
  console.log(formData);

  try {
    const response = await api.post(
      `api/vesselAssessmentForCrew/savephoto`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error uploading photo:", error);
    throw error;
  }
};
