"use client";
import BackButton from "@/components/backbutton";
import { DataTable } from "@/components/datatable";
import { columns } from "./columns";
import { useEffect, useState } from "react";
import { getMsAssessmentCategory } from "@/services/service_api";
import { MsAssessmentCategory } from "@/lib/type";
import AssessmentCategoryForm from "./dialog-form-assessment";
const AssessmentCategory = () => {
  const [items, setItems] = useState<MsAssessmentCategory[]>([]);
  const [refresh, setRefresh] = useState(false);

  const handleAddUser = (/* newUser: MsAssessmentCategory */) => {
    /* setItems((prev) => [...prev, newUser]); */
    setRefresh(!refresh);
  };

  useEffect(() => {
    async function fetchData() {
      const data = await getMsAssessmentCategory();
      setItems(data);
    }
    fetchData();
  }, [refresh]);
  return (
    <>
      <BackButton text="Back" link="/" />
      <div className="container mx-auto py-10">
        <DataTable
          columns={columns}
          data={items}
          onAddItem={handleAddUser}
          modalTitle="Add Assessment Category"
          modalContent={
            <AssessmentCategoryForm
              onAddItem={
                function (/* newItem: MsAssessmentCategory */): void {
                  throw new Error("Function not implemented.");
                }
              }
              onClose={function (): void {
                throw new Error("Function not implemented.");
              }}
              Id={0}
            />
          }
        />
      </div>
    </>
  );
};

export default AssessmentCategory;
