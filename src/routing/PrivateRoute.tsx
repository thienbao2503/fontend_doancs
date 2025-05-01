"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { jwtDecode } from "jwt-decode";
interface IProps {
  children: React.ReactNode;
}

interface IToken {
  exp: number;
}
interface IAuthKeys {
  accessToken: string;
  refreshToken: string;
}

const AUTH_KEYS = {
  accessToken: "accessToken",
  refreshToken: "refreshToken",
};

const PrivateRoutes = (props: IProps) => {
  const { children } = props;
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);
  console.log("localStorage.getItem('accessToken')", localStorage.getItem("accessToken"));


  useEffect(() => {
    const validateAuth = () => {
      // Get all required tokens at once
      const { accessToken, refreshToken } = Object.keys(AUTH_KEYS).reduce(
        (tokens, key) => ({
          ...tokens,
          [key.trim()]: localStorage.getItem(AUTH_KEYS[key as keyof IAuthKeys]),
        }),
        {},
      ) as IAuthKeys;

      // Check for access token
      // if (!accessToken) {
      //   handleAuthError("No access token");
      //   return false;
      // }

      return true;

      // try {
      //   // Validate refresh token
      //   const decodedToken = jwtDecode(refreshToken) as { exp: number };;
      //   const isTokenExpired = decodedToken.exp < Date.now() / 1000;

      //   if (isTokenExpired) {
      //     handleAuthError("Token expired");
      //     localStorage.clear();
      //     return false;
      //   }

      //   return true;
      // } catch (error) {
      //   handleAuthError(`Token validation error: ${error}`);
      //   return false;
      // }
    };

    const handleAuthError = (
      errorMessage: string,
    ) => {
      toast.error(errorMessage);
      router.push("/login");
    };

    const isValid = validateAuth();
    setIsAuthorized(isValid);
  }, [router]);

  // Show nothing while checking authorization
  if (!isAuthorized) return null;

  return children;
};

export default PrivateRoutes;
