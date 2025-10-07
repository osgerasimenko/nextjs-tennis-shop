import { getUser } from "@/services/user/get-user";
import { UserProvider } from "@/app/providers/user-provider";
import { FC, PropsWithChildren } from "react";
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';

const AppLayout: FC<PropsWithChildren> = async ({ children }) => {
  const { data } = await getUser();

  return (
    <UserProvider user={data}>
      <Header/>
        {children}
      <Footer/>
    </UserProvider>
  );
};

export default AppLayout;
