import { FC } from 'react';
import {RacketsDetailsClientPage} from './RacketsDetailsClientPage';

type Props = {
  params: Promise<{ id: string }>;
};

export const generateStaticParams = () => {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
};

const RacketsDetailsPage: FC<Props> = async ({ params }) => {
  const { id } = await params;
  return <RacketsDetailsClientPage id={id} />;
}

export default RacketsDetailsPage;