import { FC } from 'react';
import { Metadata } from "next";
import { getMetaRacketById } from "@/services/rackets/get-meta-racket-by-id";
import { RacketsDetailsContainer } from './components/RacketsDetailsContainer';

type Props = {
  params: Promise<{ id: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { id } = await params;

  const { data } = await getMetaRacketById({ id });

  if (!data) {
    return {
      title: "Racket Page",
    };
  }

  return {
    title: data.name,
    description: data.description,
  };
};

const RacketsDetailsPage: FC<Props> = async ({ params }) => {
  const { id } = await params;

  return <RacketsDetailsContainer id={id} />;
}

export default RacketsDetailsPage;
