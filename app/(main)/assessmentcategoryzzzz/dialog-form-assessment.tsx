import { useState, useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MsAssessmentCategory } from "../../../lib/type";
import {
  getMsAssessmentCategoryById,
  saveMsAssessmentCategory,
} from "@/services/service_api";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

// Zod schema validation for form fields
const schema = z.object({
  vslType: z.string().min(1, "Vessel Type is required"),
  item: z.string().min(1, "Item is required"),
  interval: z.string().min(1, "Interval is required"),
  shipSection: z.string().min(1, "Ship Section is required"),
});

// Define props type for the form
interface AssessmentCategoryFormProps {
  onAddItem: (/* newItem: MsAssessmentCategory */) => void;
  onClose: () => void;
  Id: number;
}

const AssessmentCategoryForm: React.FC<AssessmentCategoryFormProps> = ({
  onAddItem,
  onClose,
  Id,
}) => {
  const [formData, setFormData] = useState<MsAssessmentCategory>({
    vslType: "",
    item: "",
    interval: "",
    id: 0,
    shipSection: "",
    createdBy: "",
    modifiedBy: "",
    mode: "",
    deleted: false,
  });

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: formData,
  });

  useEffect(() => {
    if (Id > 0) {
      getDataById(Id);
    }

    async function getDataById(Id: number) {
      try {
        const data = await getMsAssessmentCategoryById(Id);
        setFormData(data);
        form.reset(data); // Reset form values with fetched data
      } catch (err) {
        console.error(err);
      }
    }
  }, [Id, form]);

  // Handle form submission
  const onSubmit = async (data: MsAssessmentCategory) => {
    if (data.id > 0) {
      data.mode = "EDIT";
    } else {
      data.modifiedDate = undefined; // If creating, don't pass modifiedDate
      data.mode = "CREATE";
    }
    try {
      const ret = await saveMsAssessmentCategory(data);
      console.log(ret);
      if (ret.status === 200) {
        onAddItem(/* data */);
      } else {
        toast.error("Failed to save data");
        throw new Error("Failed to save data");
      }
    } catch (err) {
      toast.error("Error saving data:");
      console.error("Error saving data:", err);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="vslType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Vessel Type</FormLabel>
              <FormControl>
                <Input placeholder="Enter vessel type" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="item"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Item</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter item" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="interval"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Interval</FormLabel>
              <FormControl>
                <Input placeholder="Enter interval" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="shipSection"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ship Section</FormLabel>
              <FormControl>
                <Input placeholder="Enter ship section" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <Button type="submit" className=" sm:ml-3 sm:w-auto sm:text-sm">
            Save
          </Button>
          <Button
            type="button"
            onClick={onClose}
            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Close
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AssessmentCategoryForm;
