import Image from "next/image";
import Link from "next/link";

import { ScrollArea } from "@/components/ui/scroll-area";
import { graphqlClient } from "@/lib/graphql-request";
import { formatDate } from "@/lib/utils";
import { GET_CHARACTER_DETAILS } from "@/lib/queries";


export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const { character } = await graphqlClient.request(GET_CHARACTER_DETAILS, {
    id,
  });
  return (
    <ScrollArea className="mb-10">
      <div className="flex h-screen w-screen flex-col items-center gap-10">
        <Image
          alt="character-photo"
          src={character?.image ?? ""}
          width={300}
          height={500}
        />
        <div className="flex min-w-[800px] items-center justify-between gap-10">
          <div className="flex flex-col">
            <div className="text-foreground">Name</div>
            <div className="text-2xl font-semibold capitalize">
              {character?.name}
            </div>
          </div>
          <div className="flex flex-col text-right">
            <div className="text-foreground">Status</div>
            <div className="text-2xl font-semibold capitalize">
              {character?.status}
            </div>
          </div>
        </div>
        <div className="flex min-w-[800px] items-center justify-between gap-10">
          <div className="flex flex-col">
            <div className="text-foreground">Species</div>
            <div className="text-2xl font-semibold capitalize">
              {character?.species}
            </div>
          </div>
          <div className="flex flex-col text-right">
            <div className="text-foreground">Type</div>
            <div className="text-2xl font-semibold capitalize">
              {character?.type || "Unknown"}
            </div>
          </div>
        </div>

        <div className="flex min-w-[800px] items-center justify-between gap-10">
          <div className="flex flex-col">
            <div className="text-foreground">Origin Name</div>
            <div className="text-2xl font-semibold capitalize">
              {character?.origin?.name ?? "Unknown"}
            </div>
          </div>
          <div className="flex flex-col text-right">
            <div className="text-foreground">Origin Dimension</div>
            <div className="text-2xl font-semibold capitalize">
              {character?.origin?.dimension ?? "Unknown"}
            </div>
          </div>
        </div>
        <div className="flex min-w-[800px] items-center justify-between gap-10">
          <div className="flex flex-col">
            <div className="text-foreground">Location Name</div>
            <div className="text-2xl font-semibold capitalize">
              {character?.location?.name}
            </div>
          </div>
          <div className="flex flex-col text-right">
            <div className="text-foreground">Location Dimension</div>
            <div className="text-2xl font-semibold capitalize">
              {character?.location?.dimension ?? "Unknown"}
            </div>
          </div>
        </div>

        <div className="mt-10 flex min-w-[800px] flex-col gap-5 ">
          <div className="text-2xl text-foreground">Episodes</div>
          <ScrollArea className="pr-5">
            <div className="flex max-h-[800px] flex-col gap-5">
              {character?.episode?.map((episode) => (
                <Link href={`/episodes/${episode?.id}`} key={episode?.id}>
                  <div className="flex flex-col rounded bg-card p-4 border-2 hover:bg-accent hover:border-muted-foreground">
                    <div className="py-2 text-2xl font-bold text-primary">
                      {episode?.name}
                    </div>
                    <div className="flex w-full justify-between ">
                      <div className="flex flex-col">
                        <div className="text-muted-foreground">Air Date</div>
                        <div className="text-xl font-semibold">
                          {episode?.air_date}
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <div className="text-right text-muted-foreground">
                          Created
                        </div>
                        <div className="text-xl font-semibold">
                          {episode?.created
                            ? formatDate(episode.created)
                            : "Unknown"}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </ScrollArea>
  );
}
