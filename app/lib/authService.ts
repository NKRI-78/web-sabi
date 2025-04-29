import axios from "axios";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

export const LoginAdmin = async (val: string, password: string) => {
  try {
    const response = await axios.post(`https://api-sabi.langitdigital78.com/api/v1/auth`,
      {
        "email": val,
        "password": password
      }
    );
    const data = response.data;
    return data;
  } catch (e: any) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: e?.response?.data?.message || e.message,
      timer: 2000,
      showConfirmButton: false,
    });
  }
};

export const UpdatePassword = async (password: string) => {
  try {
    const token = Cookies.get("token");

    const response = await axios.post(`https://api-sabi.langitdigital78.com/api/v1/profile/update-password`,
      {
        password
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Berhasil mengubah kata sandi",
      timer: 2000,
      showConfirmButton: false,
    });

    const data = response.data;
    return data;
  } catch (e: any) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: e?.response?.data?.message || e.message,
      timer: 2000,
      showConfirmButton: false,
    });
  }
};