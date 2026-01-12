import axios, { AxiosError } from "axios";
import Swal from "sweetalert2";

interface ApiErrorResponse {
  message?: string;
  errors?: Array<{ field: string; message: string }>;
}

export type TypedAxiosError = AxiosError<ApiErrorResponse>;

export const showApiError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as TypedAxiosError;
    const errorMessage =
      axiosError.response?.data?.errors?.[0]?.message ||
      axiosError.response?.data?.message ||
      "Something went wrong. Please try again.";
    const errorTitle = axiosError.response?.data?.errors?.[0]?.field || "Error";

    Swal.fire({
      icon: "error",
      title: errorTitle,
      text: errorMessage,
      confirmButtonText: "Try Again",
      customClass: {
        popup: "rounded-xl shadow-lg p-6 max-w-md mx-auto",
        confirmButton:
          "bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded-full",
      },
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Unexpected Error",
      text: "Something went wrong. Please try again.",
      confirmButtonText: "Try Again",
      customClass: {
        popup: "rounded-xl shadow-lg p-6 max-w-md mx-auto",
        confirmButton:
          "bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded-full",
      },
    });
  }
};

export const showSuccess = (
  title: string = "Success!",
  text: string = "Operation completed successfully."
) => {
  Swal.fire({
    icon: "success",
    title,
    text,
    timer: 2000,
    showConfirmButton: false,
    customClass: {
      popup: "rounded-xl shadow-lg p-6 max-w-md mx-auto",
    },
  });
};
