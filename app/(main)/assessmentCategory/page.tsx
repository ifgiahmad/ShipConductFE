"use client";
import React, { useEffect, useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { MsAssessmentCategory } from "@/lib/types/MsAssessmentCategory.types";
import { getMsAssessmentCategory } from "@/services/service_api";
import DataTableAssessmentCategory from "@/components/Data-Table/data-table-assessmentCategory";
import AssessmentCategoryForm from "./assessmentCategoryForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const columns: ColumnDef<MsAssessmentCategory>[] = [
  { header: "Vessel Type", accessorKey: "vslType" },
  { header: "Item", accessorKey: "item" },
  { header: "Interval", accessorKey: "interval" },
  { header: "Ship Section", accessorKey: "shipSection" },
];

const AssessmentCategoryPage: React.FC = () => {
  const [data, setData] = useState<MsAssessmentCategory[]>([]);

  const handleSaveDetail = () => {
    fetchData();
  };

  useEffect(() => {
    /* async function fetchData() {
      const result = await getMsAssessmentCategory();
      setData(result);
    } */
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await getMsAssessmentCategory();
    setData(result);
  };

  return (
    <div style={{ height: "80vh", overflowY: "auto" }}>
      <Card className="mb-2">
        <CardHeader>
          <CardTitle>List Data Assessment Category</CardTitle>
        </CardHeader>
      </Card>
      <Card>
        <CardContent>
          <DataTableAssessmentCategory
            data={data}
            columns={columns}
            modalContent={
              <AssessmentCategoryForm
                onClose={function (): void {
                  throw new Error("Function not implemented.");
                }}
                onSave={function (): void {
                  throw new Error("Function not implemented.");
                }}
                id={0}
                mode=""
              />
            }
            onSaveData={() => handleSaveDetail()}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default AssessmentCategoryPage;
