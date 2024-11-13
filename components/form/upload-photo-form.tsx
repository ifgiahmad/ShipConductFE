import React, { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  getTrVesselAssessmentDetailById,
  uploadPhoto,
} from "@/services/service_api_vesselAssessmentDetail";
import {
  uploadPhotoTrVesselAssessmentDetailDto,
  UploadPhotoTrVesselAssessmentDetailZod,
} from "@/lib/types/TrVesselAssessmentDetail.types";
import { toast } from "@/hooks/use-toast";
import { getTrVesselAssessmentDetailByIdForCrew, uploadPhotoForCrew } from "@/services/service_api_vesselAssessmentForCrew";

type DetailData = z.infer<typeof UploadPhotoTrVesselAssessmentDetailZod>;

interface UploadPhotoFormProps {
  onClose: () => void;
  onSave: () => void;
  id: number;
  idHeader: number;
}

const UploadPhotoForm: React.FC<UploadPhotoFormProps> = ({
  onClose,
  onSave,
  id,
  idHeader,
}) => {
  const methods = useForm<uploadPhotoTrVesselAssessmentDetailDto>({
    resolver: zodResolver(UploadPhotoTrVesselAssessmentDetailZod),
    defaultValues: {
      id: Number(id),
      item: "",
      shipSection: "",
      fileName: "",
      smallFileLink: "",
      normalFileLink: "",
      photoDescription: "",
      photo: null,
    },
  });

  const {
    setValue,
    control,
    handleSubmit,
    formState: { errors },
  } = methods;

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (id > 0) {
      getDataById(id);
    }

    async function getDataById(id: number) {
      try {
        const data = await getTrVesselAssessmentDetailByIdForCrew(id);
        setValue("item", data.item ?? "");
        setValue("shipSection", data.shipSection ?? "");
        setValue("fileName", data.fileName ?? "");
        setValue("smallFileLink", data.smallFileLink ?? "");
        setValue("normalFileLink", data.normalFileLink ?? "");
        setValue("photoDescription", data.photoDescription ?? "");
        setValue("id", data.id ?? 0);

        if (data.normalFileLink) {
          setImagePreview(data.normalFileLink);
        } else {
          console.log("B");
        }
      } catch (err) {
        console.error("Failed to fetch data by ID:", err);
      }
    }
  }, [id, setValue]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setValue("fileName", file.name);
      setValue("photo", file);
      setImagePreview(URL.createObjectURL(file)); // Update the preview when a file is selected
    }
  };

  const onDetailSubmit = async (data: DetailData) => {
    setLoading(true); // Start loading
    try {
      const response = await uploadPhotoForCrew(data);
      if (response.status === 200) {
        onSave();
        toast({
          description: "Photo Assessment Detail updated successfully.",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to upload photo.",
        });
      }
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Error",
        description: `Error uploading photo: ${
          err instanceof Error ? err.message : "Unknown error"
        }`,
      });
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onDetailSubmit)}
        className="grid grid-cols-1 gap-6"
      >
        <FormField
          name="item"
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Item</FormLabel>
              <FormControl>
                <Textarea
                  readOnly
                  placeholder="Item Category"
                  {...field}
                  className="w-full border border-gray-300 bg-gray-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-not-allowed"
                />
              </FormControl>
              <FormMessage>{errors.item?.message}</FormMessage>
            </FormItem>
          )}
        />

        <FormField
          name="shipSection"
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ship Section</FormLabel>
              <FormControl>
                <Input
                  readOnly
                  placeholder="Ship Section"
                  {...field}
                  className="w-full border border-gray-300 bg-gray-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-not-allowed"
                />
              </FormControl>
              <FormMessage>{errors.shipSection?.message}</FormMessage>
            </FormItem>
          )}
        />

        {imagePreview && (
          <div className="mb-4 flex justify-center">
            {" "}
            <img
              src={imagePreview}
              alt="Photo Preview"
              className="rounded-md border border-gray-300"
              style={{ maxWidth: "620px", height: "auto" }}
            />
          </div>
        )}

        {/* <FormItem>
          <FormLabel>Upload Photo</FormLabel>
          <FormControl>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </FormControl>
          <FormMessage>{errors.fileName?.message}</FormMessage>
        </FormItem> */}
        <FormItem>
          <FormLabel>Upload Photo</FormLabel>
          <FormControl>
            <input
              type="file"
              accept="image/*"
              capture="environment" // Opens camera directly
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </FormControl>
          <FormMessage>{errors.fileName?.message}</FormMessage>
        </FormItem>

        <FormField
          name="photoDescription"
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Photo Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Photo Description"
                  {...field}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </FormControl>
              <FormMessage>{errors.photoDescription?.message}</FormMessage>
            </FormItem>
          )}
        />

        <div className="flex justify-end mt-4">
          <Button
            type="button"
            onClick={onClose}
            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Close
          </Button>
          <Button
            type="submit"
            disabled={loading}
            className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-900 text-base font-medium text-white hover:bg-green-700"
            } sm:ml-3 sm:w-auto sm:text-sm`}
          >
            {loading ? <span className="loading">saving...</span> : "Save"}
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default UploadPhotoForm;
