import DataTableColumnHeader from "@/components/DataTable/DataTableColumnHeader";
import DataTableRowActions from "@/components/DataTable/DataTableRowActions";
import { TrVesselAssessment } from "@/lib/type";
import { ColumnDef } from "@tanstack/react-table";

interface VesselAssessmentColumnsProps {
  onEdit: (vesselAssessment: TrVesselAssessment) => void;
  onDelete: (vesselAssessment: TrVesselAssessment) => void;
}

export const getVesselAssessmentColumns = ({
  onEdit,
  onDelete,
}: VesselAssessmentColumnsProps): ColumnDef<TrVesselAssessment>[] => [
  {
    accessorKey: "vslName",
    header: ({ column }) => (
      <DataTableColumnHeader
        className="text-right"
        column={column}
        title="Vessel Name"
      />
    ),
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("vslName")}</div>
    ),
  },
  {
    accessorKey: "periodDate",
    header: ({ column }) => (
      <DataTableColumnHeader
        className="text-right"
        column={column}
        title="Period Date"
      />
    ),
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("periodDate")}</div>
    ),
  },
  {
    accessorKey: "finalDate",
    header: ({ column }) => (
      <DataTableColumnHeader
        className="text-right"
        column={column}
        title="Final Date"
      />
    ),
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("finalDate")}</div>
    ),
  },
  {
    accessorKey: "gradeTotal",
    header: ({ column }) => (
      <DataTableColumnHeader
        className="text-right"
        column={column}
        title="Grade Total"
      />
    ),
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("gradeTotal")}</div>
    ),
  },
  {
    accessorKey: "gradeTotal",
    header: ({ column }) => (
      <DataTableColumnHeader
        className="text-right"
        column={column}
        title="Grade Total"
      />
    ),
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("gradeTotal")}</div>
    ),
  },
  {
    accessorKey: "linkShared",
    header: ({ column }) => (
      <DataTableColumnHeader
        className="text-right"
        column={column}
        title="Link Shared"
      />
    ),
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("linkShared")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader
        className="text-right"
        column={column}
        title="Status"
      />
    ),
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <DataTableRowActions row={row} onEdit={onEdit} onDelete={onDelete} />
    ),
    size: 50,
  },
];
