import {
  useMutation,
  MutationFunction,
  MutationOptions,
} from "@tanstack/react-query";
import { setTokenkeys } from "../services/axios.baseservices/tokenMethods";
import { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";

export const useMutationWhitToast = <T, D>(
  mutationFn: MutationFunction<AxiosResponse<T, D>, D>,
  option?: MutationOptions<AxiosResponse<T, D>>,
  Authset?: boolean
) => {
  return useMutation({
    mutationFn,

    onSuccess: (data: AxiosResponse<T, D>, variables: D, context: unknown) => {
      if (data.data) {
        Authset
          ? setTokenkeys(
              JSON.parse(data.data as string).refreshToken,
              JSON.parse(data.data as string).authToken
            )
          : null;

        toast.success(JSON.parse(data.data as string).message);
        option?.onSuccess?.(data, variables as void, context);
      }
    },
    onError: (error: AxiosError<T, D>) => {
      error.response?.data
        ? toast.error(JSON.parse(error.response?.data as string).message)
        : toast.error(error.message);
    },
  });
};
