import axios from 'axios';
import Swal from 'sweetalert2';

export const LoginAdmin = async (email: string, password: string) => {
  try {
    const response = await axios.post(`https://https://api-sabi.langitdigital78.com/api/v1/auth`,
      {
        "email": email,
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