import axios from 'axios';
import Swal from 'sweetalert2';


export const fetchContentList = async (search: string) => {
  try {
    const response = await axios.get(`https://dummyjson.com/users/search?q=${search}`);
    const data = response.data.data;
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