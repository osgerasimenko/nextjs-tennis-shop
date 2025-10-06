import { FC } from 'react';
import { notFound } from 'next/navigation';
import { getRacketById } from "@/services/rackets/get-racket-by-id";
import { RacketsDetails } from './RacketsDetails';


type Props = {
  id: string;
};

export const RacketsDetailsContainer: FC<Props> = async ({ id } ) => {
  const { data } = await getRacketById({ id });

  if (!data) {
    return notFound();
  }

  return (
    <RacketsDetails data={data} />
  );
}
