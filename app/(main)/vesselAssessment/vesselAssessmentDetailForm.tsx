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
  saveTrVesselAssessmentDetail,
  uploadPhoto,
} from "@/services/service_api_vesselAssessmentDetail";
import {
  saveTrVesselAssessmentDetailDto,
  saveTrVesselAssessmentDetailZod,
} from "@/lib/types/TrVesselAssessmentDetail.types";
import { toast } from "@/hooks/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MsShipSection } from "@/lib/types/MsShipSection.types";
import { getMsShipSectionByVslType } from "@/services/service_api_shipSection";
import { MsInterval } from "@/lib/types/MsInterval.types";
import { getMsInterval } from "@/services/service_api_interval";
import { MsGradeCriteria } from "@/lib/types/MsGradeCriteria.types";
import { getMsGradeCriteriaByGrade } from "@/services/service_api_gradeCriteria";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
type DetailData = z.infer<typeof saveTrVesselAssessmentDetailZod>;

interface VesselAssessmentDetailFormProps {
  onClose: () => void;
  onSave: () => void;
  id: number;
  idHeader: number;
  vslType: string;
  mode: string;
}

const VesselAssessmentDetailForm: React.FC<VesselAssessmentDetailFormProps> = ({
  onClose,
  onSave,
  id,
  idHeader,
  vslType,
  mode,
}) => {
  const methods = useForm<saveTrVesselAssessmentDetailDto>({
    resolver: zodResolver(saveTrVesselAssessmentDetailZod),
    defaultValues: {
      id: Number(id),
      vesselAssessmentId: Number(idHeader),
      item: "",
      interval: "",
      shipSection: "",
      grade: 0,
      gradeDescription: "",
      fileName: "",
      smallFileLink: "",
      normalFileLink: "",
      photoDescription: "",
      uploadedBy: "",
      assessedBy: "",
      createdBy: "",
      modifiedBy: "",
      mode: "",
      isDeleted: false,
    },
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [shipSection, setShipSection] = useState<MsShipSection[]>([]);
  const [selectedShipSection, setSelectedShipSection] = useState<
    string | undefined
  >();
  const [interval, setInterval] = useState<MsInterval[]>([]);
  const [selectedInterval, setSelectedInterval] = useState<
    string | undefined
  >();
  const [gradeCriteria, setGradeCriteria] = useState<MsGradeCriteria[]>([]);

  /* const [selectedGradeCriteria, setSelectedGradeCriteria] = useState([]);
   */
  const [selectedGradeCriteria, setSelectedGradeCriteria] = useState<string[]>(
    []
  );
  const [selectedGrade, setSelectedGrade] = useState<number | undefined>();
  const [searchTerms, setSearchTerms] = useState({
    ship: "",
    interval: "",
    criteria: "",
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSearchChange = (type: string, value: string) => {
    setSearchTerms((prev) => ({ ...prev, [type]: value }));
  };

  const applySelection = () => {
    const joinedData = selectedGradeCriteria.join(", ");
    setValue("gradeDescription", joinedData); // Masukkan ke inputan gradedescription
    setIsDialogOpen(false);
  };

  const handleCheckboxChange = (item: string) => {
    setSelectedGradeCriteria((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleValueChange = (value: string) => {
    setSelectedGradeCriteria(
      (prev) =>
        prev.includes(value)
          ? prev.filter((item) => item !== value) // Remove if already selected
          : [...prev, value] // Add if not selected
    );
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setValue("fileName", file.name);
      setValue("photo", file);
      setImagePreview(URL.createObjectURL(file)); // Update the preview when a file is selected
    }
  };

  const {
    setValue,
    control,
    handleSubmit,
    formState: { errors },
  } = methods;

  useEffect(() => {
    const fetchData = async () => {
      if (Number(id) > 0) {
        await getDataById(Number(id));
      } else {
        setValue("mode", "CREATE");

        if (!vslType) {
          console.warn("No vessel type provided for fetching ship sections.");
          return;
        }

        try {
          const shipSections = await getMsShipSectionByVslType(vslType);
          setShipSection(shipSections);
        } catch (error) {
          console.error(
            "Error fetching ship sections for vessel type:",
            vslType,
            error
          );
        }
      }
    };

    fetchInterval();
    fetchData();

    // Async function to fetch data by ID
    async function getDataById(Id: Number) {
      try {
        const data = await getTrVesselAssessmentDetailById(Number(Id));
        setValue("item", data.item ?? "");
        setValue("interval", data.interval ?? "");
        /* if (mode !== "INPUT GRADE") {
          setValue("grade", data.grade ?? 0);
          setValue("gradeDescription", data.gradeDescription ?? "");
        } */

        setValue("grade", data.grade ?? 0);
        setValue("gradeDescription", data.gradeDescription ?? "");

        setValue("fileName", data.fileName ?? "");
        setValue("smallFileLink", data.smallFileLink ?? "");
        setValue("normalFileLink", data.normalFileLink ?? "");
        setValue("photoDescription", data.photoDescription ?? "");
        setValue("vesselAssessmentId", data.vesselAssessmentId ?? 0);
        setValue("shipSection", data.shipSection ?? "");

        if (data.shipSection) {
          setSelectedShipSection(data.shipSection);
        }

        if (data.normalFileLink) {
          setImagePreview(data.normalFileLink);
        }

        if (vslType) {
          try {
            const shipSections = await getMsShipSectionByVslType(vslType);
            setShipSection(shipSections);
          } catch (error) {
            console.error(
              "Error fetching ship sections for vessel type:",
              vslType,
              error
            );
          }
        }

        if (data.shipSection && data.grade) {
          try {
            const gradeCriteria = await getMsGradeCriteriaByGrade(
              data.grade,
              data.shipSection
            );
            setGradeCriteria(gradeCriteria);
          } catch (error) {
            console.error("Error fetching grade criteria:", error);
          }
        }
      } catch (err) {
        console.error("Error fetching data grade criteria:", err);
      }
    }
  }, [
    id,
    vslType,
    setValue,
    /* setSelectedShipSection,
    shipSection,
    interval,
    selectedInterval,
    selectedGrade, */
  ]);

  const fetchGradeCriteria = async (grade: number, shipSection: string) => {
    if (!grade || !shipSection) {
      console.warn(
        "No grade and shipsection provided for fetching ship sections."
      );
      return;
    }

    try {
      const data = await getMsGradeCriteriaByGrade(grade, shipSection);
      setGradeCriteria(data);
    } catch (error) {
      console.error("Error fetching grade criteria:", error);
    }
  };

  const fetchInterval = async () => {
    try {
      const interval = await getMsInterval();
      setInterval(interval);
    } catch (error) {
      console.error("Error fetching interval:", error);
    }
  };

  const onDetailSubmit = async (data: DetailData) => {
    console.log(data);
    setLoading(true);
    data.mode = mode;
    if (data.id === 0) {
      data.vesselAssessmentId = idHeader;
    }
    try {
      if (mode === "UPLOAD PHOTO") {
        const response = await uploadPhoto(data);
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
      } else {
        const ret = await saveTrVesselAssessmentDetail(data);
        if (ret.status === 200) {
          onSave();
          toast({
            description: "Vessel Assessment Detail updated successfully.",
          });
        } else {
          toast({
            variant: "destructive",
            title: "Error",
            description: "Failed to update data",
          });
        }
      }
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Error",
        description:
          "Error updating data: " +
          (err instanceof Error ? err.message : "Unknown error"),
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
        {mode === "DELETE" ? (
          <>
            {" "}
            <Alert>
              <Terminal className="h-4 w-4" />
              <AlertTitle>Delete Data!</AlertTitle>
              <AlertDescription>
                Are you sure you want to delete this data?
              </AlertDescription>
            </Alert>
          </>
        ) : mode === "INPUT GRADE" ? (
          <>
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
                      className="w-full border border-gray-300 bg-gray-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </FormControl>
                  <FormMessage>{errors.item?.message}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              name="interval"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Interval</FormLabel>
                  <FormControl>
                    <Input
                      readOnly
                      placeholder="Interval"
                      {...field}
                      className="w-full border border-gray-300 bg-gray-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </FormControl>
                  <FormMessage>{errors.interval?.message}</FormMessage>
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
                      className="w-full border border-gray-300 bg-gray-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </FormControl>
                  <FormMessage>{errors.shipSection?.message}</FormMessage>
                </FormItem>
              )}
            />
            {imagePreview && (
              <div className="mb-4">
                <img
                  src={imagePreview}
                  alt="Photo Preview"
                  className="w-80 h-60 rounded-md border border-gray-300"
                  width={0}
                  height={0}
                />
              </div>
            )}
            <FormField
              control={control}
              name="grade"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Grade</FormLabel>
                  <Select
                    onValueChange={(value) => {
                      const numericValue = Number(value);
                      setSelectedGrade(numericValue);
                      setValue("grade", numericValue);
                      field.onChange(numericValue);
                      fetchGradeCriteria(
                        numericValue,
                        selectedShipSection ?? ""
                      );
                    }}
                    value={selectedGrade?.toString() || field.value?.toString()}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Grade" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 10 }, (_, index) => {
                        const gradeValue = (index + 1).toString();
                        return (
                          <SelectItem key={gradeValue} value={gradeValue}>
                            {gradeValue}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <FormField
              name="grade"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Grade</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="grade"
                      {...field}
                      onChange={(e) =>
                        field.onChange(
                          e.target.value ? parseFloat(e.target.value) : ""
                        )
                      }
                      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </FormControl>
                  <FormMessage>{errors.grade?.message}</FormMessage>
                </FormItem>
              )}
            /> */}
            {/* <FormField
              control={control}
              name="gradeDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Grade Description</FormLabel>
                  <Select
                    onValueChange={(value) => {
                      handleValueChange(value);
                      setSelectedGradeCriteria(selectedGradeCriteria);
                      setValue(
                        "gradeDescription",
                        selectedGradeCriteria.join(", ")
                      );
                      field.onChange(selectedGradeCriteria); // Update form field
                    }}
                    value={selectedGradeCriteria.join(", ")}
                  >
                    <SelectTrigger>
                      {selectedGradeCriteria.length ? (
                        <span>{selectedGradeCriteria.join(", ")}</span>
                      ) : (
                        <SelectValue placeholder="Select Grade Criteria" />
                      )}
                    </SelectTrigger>
                    <SelectContent>
                      <div className="p-2">
                        <Input
                          type="text"
                          placeholder="Search Grade Criteria..."
                          value={searchTerms.criteria}
                          onChange={(e) =>
                            handleSearchChange("criteria", e.target.value)
                          }
                          className="w-full p-2 border rounded-md"
                        />
                      </div>
                      {gradeCriteria
                        .filter((s) =>
                          s.criteria
                            ?.toLowerCase()
                            .includes(searchTerms.criteria.toLowerCase())
                        )
                        .map((s) => (
                          <SelectItem key={s.id} value={s.criteria}>
                            <CheckboxItem
                              checked={selectedGradeCriteria.includes(
                                s.criteria
                              )}
                              onCheckedChange={() =>
                                handleValueChange(s.criteria)
                              }
                            />
                            {s.criteria}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            /> */}

            <FormField
              name="gradeDescription"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Grade Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Grade Description"
                      {...field}
                      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </FormControl>
                  <Button
                    onClick={() => setIsDialogOpen(true)}
                    className="ml-2 bg-orange-600 hover:bg-orange-400 flex justify-end mt-2"
                    type="button"
                  >
                    Select Criteria
                  </Button>
                  <FormMessage>{errors.gradeDescription?.message}</FormMessage>
                </FormItem>
              )}
            />
          </>
        ) : mode === "UPLOAD PHOTO" ? (
          <>
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

            {/* Ship Section Field */}
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

            {/* Image Preview Section */}
            {imagePreview && (
              <div className="mb-4">
                <img
                  src={imagePreview}
                  alt="Photo Preview"
                  className="w-80 h-60 rounded-md border border-gray-300"
                  width={0}
                  height={0}
                />
              </div>
            )}

            {/* Upload Photo Field */}
            <FormItem>
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
            </FormItem>

            {/* Photo Description Field */}
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
          </>
        ) : (
          <>
            <FormField
              name="item"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Item</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Item Category"
                      {...field}
                      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </FormControl>
                  <FormMessage>{errors.item?.message}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="interval"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Interval</FormLabel>
                  <Select
                    onValueChange={(value) => {
                      setSelectedInterval(value);
                      setValue("interval", value);
                      field.onChange(value);
                    }}
                    value={selectedInterval || field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Interval" />
                    </SelectTrigger>
                    <SelectContent>
                      <div className="p-2">
                        <Input
                          type="text"
                          placeholder="Search Interval..."
                          value={searchTerms.interval}
                          onChange={(e) =>
                            handleSearchChange("interval", e.target.value)
                          }
                          className="w-full p-2 border rounded-md"
                        />
                      </div>
                      {interval
                        .filter((s) =>
                          s.interval
                            ?.toLowerCase()
                            .includes(searchTerms.interval.toLowerCase())
                        )
                        .map((s) => (
                          <SelectItem key={s.id} value={s.interval}>
                            {s.interval}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <FormField
              name="interval"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Interval</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Interval"
                      {...field}
                      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </FormControl>
                  <FormMessage>{errors.interval?.message}</FormMessage>
                </FormItem>
              )}
            /> */}
            {/* <FormField
              name="shipSection"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ship Section</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Ship Section"
                      {...field}
                      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </FormControl>
                  <FormMessage>{errors.shipSection?.message}</FormMessage>
                </FormItem>
              )}
            /> */}
            <FormField
              control={control}
              name="shipSection"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ship Section</FormLabel>
                  <Select
                    onValueChange={(value) => {
                      setSelectedShipSection(value);
                      setValue("shipSection", value);
                      field.onChange(value);
                    }}
                    value={selectedShipSection || field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Ship Section" />
                    </SelectTrigger>
                    <SelectContent>
                      <div className="p-2">
                        <Input
                          type="text"
                          placeholder="Search Ship Section..."
                          value={searchTerms.ship}
                          onChange={(e) =>
                            handleSearchChange("ship", e.target.value)
                          }
                          className="w-full p-2 border rounded-md"
                        />
                      </div>
                      {shipSection
                        .filter((s) =>
                          s.sectionName
                            ?.toLowerCase()
                            .includes(searchTerms.ship.toLowerCase())
                        )
                        .map((s) => (
                          <SelectItem key={s.id} value={s.sectionName}>
                            {s.sectionName}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

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
            disabled={loading} // Disable button when loading
            className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-900 text-base font-medium text-white hover:bg-green-700"
            } sm:ml-3 sm:w-auto sm:text-sm`}
          >
            {loading ? (
              <span className="loading">Saving...</span> // You can replace this with your loading spinner
            ) : (
              "Save"
            )}
          </Button>
        </div>
      </form>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogTitle>Select Criteria</DialogTitle>
          <div>
            {/* <Card className="mb-2">
              <CardHeader>
                <CardTitle>Select Criteria</CardTitle>
              </CardHeader>
            </Card> */}
            <Card>
              <CardContent>
                {gradeCriteria.length > 0 ? (
                  <>
                    {gradeCriteria.map((item) => (
                      <div key={item.id}>
                        <Checkbox
                          checked={selectedGradeCriteria.includes(
                            item.criteria
                          )}
                          onCheckedChange={() =>
                            handleCheckboxChange(item.criteria)
                          }
                          className="mr-2"
                        />
                        <span>{item.criteria}</span>
                      </div>
                    ))}
                  </>
                ) : (
                  <>
                    <p>
                      Data Not Found for Grade {selectedGrade} and Ship Section{" "}
                      {selectedShipSection}{" "}
                    </p>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
          <DialogFooter>
            <Button
              className="bg-green-800 hover:bg-green-500"
              type="button"
              onClick={applySelection}
            >
              Add
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </FormProvider>
  );
};

export default VesselAssessmentDetailForm;
