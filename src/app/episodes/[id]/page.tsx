import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Spinner } from "@/components/ui/spinner";
import { graphqlClient } from "@/lib/graphql-request";
import { GET_EPISODE_DETAILS } from "@/lib/queries";
import { formatDate } from "@/lib/utils";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const { episode } = await graphqlClient.request(GET_EPISODE_DETAILS, {
    id,
  });

  return (
    <Suspense fallback={<Spinner />}>
      <ScrollArea className="mb-10">
        <div className="flex w-screen flex-col items-center gap-10">
          <h3 className="text-3xl font-semibold">{episode?.name}</h3>
          <div className="flex flex-col gap-10 rounded-lg bg-card px-8 py-4">
            <div className="flex min-w-[600px] items-center justify-between gap-10">
              <div className="flex flex-col">
                <div className="text-foreground">ID</div>
                <div className="text-2xl font-semibold capitalize">
                  {episode?.id}
                </div>
              </div>
              <div className="flex flex-col text-right">
                <div className="text-foreground">Code</div>
                <div className="text-2xl font-semibold capitalize">
                  {episode?.episode}
                </div>
              </div>
            </div>
            <div className="flex min-w-[600px] items-center justify-between gap-10">
              <div className="flex flex-col">
                <div className="text-foreground">Created</div>
                <div className="text-2xl font-semibold capitalize">
                  {episode?.created ? formatDate(episode?.created) : "Unknown"}
                </div>
              </div>
              <div className="flex flex-col text-right">
                <div className="text-foreground">Air Date</div>
                <div className="text-2xl font-semibold capitalize">
                  {episode?.air_date}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex min-w-[700px] flex-col gap-5 ">
            <div className="text-2xl text-foreground">Characters</div>
            <ScrollArea className="pr-5">
              <div className="flex max-h-[800px] flex-col gap-5">
                {episode?.characters.map((character) => (
                  <Link
                    href={`/characters/${character?.id}`}
                    key={character?.id}>
                    <div className="flex items-center gap-4 rounded border-2 bg-card p-4 hover:border-muted-foreground hover:bg-accent">
                      {character?.image && (
                        <Image
                          src={character?.image}
                          alt="character-image"
                          width={150}
                          height={250}
                        />
                      )}
                      <div className="flex w-full flex-col">
                        <div className="py-2 text-2xl font-bold text-primary">
                          {character?.name}
                        </div>
                        <div className="flex w-full justify-between ">
                          <div className="flex flex-col">
                            <div className="text-muted-foreground">Species</div>
                            <div className="text-xl font-semibold">
                              {character?.species}
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <div className="text-right text-muted-foreground">
                              Status
                            </div>
                            <div className="text-xl font-semibold">
                              {character?.status}
                            </div>
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
    </Suspense>
  );
}
