import { FC } from 'react';
import { RacketsDetailsPage as RacketsDetailsPageComponent } from './RacketsDetailsPage';

type Props = {
  params: Promise<{ id: string }>;
};

export const generateStaticParams = () => {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
};

const RacketsDetailsPage: FC<Props> = async ({ params }) => {
  const { id } = await params;
  return <RacketsDetailsPageComponent id={id} />;
}

export default RacketsDetailsPage;
