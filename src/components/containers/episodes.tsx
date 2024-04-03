"use client";
import { EnterIcon, TrashIcon } from "@radix-ui/react-icons";
import { ColumnDef } from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import { useMemo } from "react";

import { Episode } from "@/__generated__/graphql";
import { PaginatedTable } from "@/components/paginated-table";
import { Button } from "@/components/ui/button";
import { GET_EPISODES } from "@/lib/queries";

export const EpisodesList = () => {
  const { push } = useRouter();

  const columns: ColumnDef<Episode>[] = useMemo(
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
        accessorKey: "episode",
        header: "Episode",
      },
      {
        accessorKey: "air_date",
        header: "Air Date",
      },
      {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => (
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => push(`/episodes/${row.original.id}`)}>
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
      query={GET_EPISODES}
      queryName="episodes"
    />
  );
};
