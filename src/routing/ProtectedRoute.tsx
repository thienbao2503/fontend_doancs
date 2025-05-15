
import { getToken } from "@/app/utils/tokenServiceClientSide";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { accessToken } = getToken();
  const router = useRouter();

  useEffect(() => {
    if (!accessToken) {
      router.push("/dang-nhap");
    }
  }, [accessToken, router]);

  if (!accessToken) {
    return null; // Or a spinner/loading indicator if you want
  }
  return <>{children}</>;
};

export default ProtectedRoute;
