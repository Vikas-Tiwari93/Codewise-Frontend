import { useMutation, MutationFunction } from "@tanstack/react-query";
import { setTokenkeys } from "../services/axios.baseservices/tokenMethods";
import { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const useMutationWhitToastAndNavigation = <T, D>(
  mutationFn: MutationFunction<AxiosResponse<T, D>, D>,
  navigation?: string,
  isAuth?: boolean
) => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn,

    onSuccess: (data: AxiosResponse<T, D>) => {
      if (data.data) {
        isAuth
          ? setTokenkeys(
              JSON.parse(data.data as string).refreshToken,
              JSON.parse(data.data as string).authToken
            )
          : null;

        toast.success(JSON.parse(data.data as string).message);

        navigation ? navigate(navigation) : null;
      }
    },
    onError: (error: AxiosError<T, D>) => {
      error.response?.data
        ? toast.error(JSON.parse(error.response?.data as string).message)
        : toast.error(error.message);
    },
  });
};
