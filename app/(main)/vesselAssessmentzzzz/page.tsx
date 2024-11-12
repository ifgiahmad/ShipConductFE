import DataTable from "@/components/DataTable/DataTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getVesselAssessmentColumns } from "./vesselAssessmentColumn";
import { getTrVesselAssessment } from "@/services/service_api_vesselAssessment";
import { TrVesselAssessment } from "@/lib/type";
import { useCallback, useMemo, useState } from "react";
import VesselAssessmentForm from "./vesselAssessmentForm";
import { toast } from "sonner";
import { useMediaQuery } from "@custom-react-hooks/use-media-query";
import { queryKeys } from "@/services/query.Key.factory";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { saveMsAssessmentCategory } from '../../../services/service_api';

const VesselAssessment = () => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [selectedVesselAssessment, setSelectedVesselAssessment] =
    useState<TrVesselAssessment | null>(null);
  const queryClient = useQueryClient();
  const { data: vesselAssessment, isFetching } = useQuery({
    queryKey: queryKeys.fetchVesselAssessment.all,
    queryFn: () => getTrVesselAssessment(),
    initialData: [],
  });

  const deleteMutation = useMutation({
    mutationFn: saveMsAssessmentCategory,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: queryKeys.fetchVesselAssessment.all,
      });
    },
  });

  const onDelete = useCallback((vesselAssessment: TrVesselAssessment) => {
    deleteMutation.mutate(vesselAssessment.Id, {
      onSuccess: () => {
        toast({ description: "Bank account was deleted successfully." });
      },
      onError: () => {
        toast({
          variant: "destructive",
          title: "Uh Oh! Something went wrong!",
          description: "There was a problem with your request.",
        });
      },
    });
  }, []);

  const onEdit = useCallback((bankAccount: BankAccount) => {
    setSelectedBankAccount(bankAccount);
    setIsDialogOpen(true);
  }, []);

  const columns = useMemo(
    () => getVesselAssessmentColumns({ onEdit, onDelete }),
    []
  );
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Bank Accounts</CardTitle>
        <div className="flex justify-between">
          <div />
          <div className="flex-nowrap">
            <VesselAssessmentForm
              isOpen={isDialogOpen}
              bankAccount={selectedVesselAssessment}
              onOpenChange={(value) => {
                setIsDialogOpen(value);
                if (!value) {
                  setSelectedVesselAssessment(null);
                }
              }}
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {isFetching && <span>Loading</span>}
        {!isFetching && <DataTable data={bankAccounts} columns={columns} />}
      </CardContent>
    </Card>
  );
};

export default VesselAssessment;
