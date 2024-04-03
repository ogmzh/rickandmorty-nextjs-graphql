"use client";
import { EnterIcon, TrashIcon } from "@radix-ui/react-icons";
import { ColumnDef } from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import { useMemo } from "react";

import { Location } from "@/__generated__/graphql";
import { PaginatedTable } from "@/components/paginated-table";
import { Button } from "@/components/ui/button";
import { GET_LOCATIONS } from "@/lib/queries";

export const Locations = () => {
  const { push } = useRouter();

  const columns: ColumnDef<Location>[] = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
      },
      {
        accessorKey: "name",
        header: "Name",
      },
      {
        accessorKey: "type",
        header: "Type",
      },
      {
        accessorKey: "dimension",
        header: "Dimension",
      },
      {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => (
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => push(`/locations/${row.original.id}`)}>
              <EnterIcon className="h-5 w-5" />
            </Button>
            <Button variant="destructive" size="icon" disabled>
              <TrashIcon className="h-5 w-5" />
            </Button>
          </div>
        ),
      },
    ],
    [push]
  );

  return (
    <PaginatedTable
      columns={columns}
      query={GET_LOCATIONS}
      queryName="locations"
    />
  );
};
