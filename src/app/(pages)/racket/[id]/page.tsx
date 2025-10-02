import { FC } from 'react';
import { getRacketById } from "@/services/rackets/get-racket-by-id";
import { RacketsDetailsPage as RacketsDetailsPageComponent } from './RacketsDetailsPage';

type Props = {
  params: Promise<{ id: string }>;
};

const RacketsDetailsPage: FC<Props> = async ({ params }) => {
  const { id } = await params;

  const { data } = await getRacketById({ id });
  return <RacketsDetailsPageComponent data={data} />;
}

export default RacketsDetailsPage;
