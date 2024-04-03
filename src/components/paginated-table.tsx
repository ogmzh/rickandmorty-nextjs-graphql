"use client";
import { TypedDocumentNode, useQuery } from "@apollo/client";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  PaginationState,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Exact } from "../__generated__/graphql";
import { ScrollArea } from "./ui/scroll-area";
import { Spinner } from "./ui/spinner";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

// i'd still want to have inferred from GetCharactersQuery | GetEpisodesQuery but typescript is hard
// and this allows me to use any paginated GQL response shape
interface QueryResult<T> {
  [key: string]: {
    results: T[];
    info?: {
      pages?: number | null;
      next?: number | null;
      prev?: number | null;
      count?: number | null;
    };
  };
}

interface PaginatedTableProps<Q, T> {
  query: TypedDocumentNode<Q, Exact<{ page: number }>>;
  queryName: keyof QueryResult<T>;
  columns: ColumnDef<T>[];
}

export const PaginatedTable = <Q, T>({
  query,
  queryName,
  columns,
}: PaginatedTableProps<Q, T>) => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 1,
    pageSize: 20,
  });

  const { loading, error, data } = useQuery<QueryResult<T>>(query, {
    variables: { page: pagination.pageIndex },
  });

  const table = useReactTable({
    data: data ? data[queryName]?.results : [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (loading)
    return (
      <div className="flex flex-1 items-center justify-center">
        <Spinner />
      </div>
    );

  if (error) return <p>Error: {error.message}</p>;

  const handlePrevious = () =>
    setPagination((prev) => ({
      ...prev,
      pageIndex: Math.max(0, prev.pageIndex - 1),
    }));

  const handleNext = () =>
    setPagination((prev) => ({
      ...prev,
      pageIndex: prev.pageIndex + 1,
    }));

  return (
    <div className="mb-10 flex h-screen flex-col gap-5 overflow-auto">
      <ScrollArea>
        <div className="flex rounded-md border">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id} className="text-lg font-bold">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>

            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className="text-lg">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center">
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </ScrollArea>
      <Pagination className="flex w-full items-center justify-between ">
        <div className="ml-2 flex w-[200px] items-center gap-1.5 ">
          Showing
          <div className="font-semibold">
            {data?.[queryName]?.info?.next
              ? pagination.pageSize * pagination.pageIndex
              : Math.max(
                  (pagination.pageSize * pagination.pageIndex,
                  data?.[queryName]?.info?.count ?? 0)
                )}
          </div>
          of
          <div className="font-semibold">{data?.[queryName]?.info?.count}</div>
        </div>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={handlePrevious}
              disabled={pagination.pageIndex === 1}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink>{pagination.pageIndex}</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              onClick={handleNext}
              disabled={!data?.[queryName]?.info?.next}
            />
          </PaginationItem>
        </PaginationContent>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex w-[200px] cursor-default justify-end gap-1.5">
                Page size:
                <div className="font-semibold">{pagination.pageSize}*</div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Page size property not supported by the API</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Pagination>
    </div>
  );
};
