import axios from 'axios';
import Swal from 'sweetalert2';

export const fetchContentList = async (search: string) => {
  try {
    const response = await axios.post(`https://api-sabi.langitdigital78.com/api/v1/get/data`,
      {
        "query": search,
        "key": "jkfldanwnwn33n4213"
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