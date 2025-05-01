import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from "js-cookie";

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
      icon: "info",
      title: "Info",
      text: e?.response?.data?.message || e.message,
      timer: 2000,
      showConfirmButton: false,
    });
  }
};

export const fetchContentHistories = async () => {
  try {
    const token = Cookies.get("token");

    const response = await axios.post(`https://api-sabi.langitdigital78.com/api/v1/history/all-search`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = response.data.data.data;
    return data;
  } catch (e: any) {
    Swal.fire({
      icon: "info",
      title: "Info",
      text: e?.response?.data?.message || e.message,
      timer: 2000,
      showConfirmButton: false,
    });
  }
};