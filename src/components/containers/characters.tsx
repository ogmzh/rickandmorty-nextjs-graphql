"use client";
import { EnterIcon, TrashIcon } from "@radix-ui/react-icons";
import { ColumnDef } from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import { useMemo } from "react";

import { Character } from "@/__generated__/graphql";
import { PaginatedTable } from "@/components/paginated-table";
import { Button } from "@/components/ui/button";
import { GET_CHARACTERS } from "@/lib/queries";

export const Characters = () => {
  const { push } = useRouter();

  const columns: ColumnDef<Character>[] = useMemo(
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
        accessorKey: "gender",
        header: "Gender",
      },

      {
        accessorKey: "status",
        header: "Status",
      },
      {
        accessorKey: "species",
        header: "Species",
      },
      {
        accessorKey: "type",
        header: "Type",
      },
      {
        accessorKey: "origin.name",
        header: "Origin",
      },
      {
        accessorKey: "location.name",
        header: "Location",
      },
      {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => (
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => push(`/characters/${row.original.id}`)}>
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
      query={GET_CHARACTERS}
      queryName="characters"
    />
  );
};
