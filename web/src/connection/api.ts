import axios from "axios";

// axios
//       .post("http://localhost:8000/api/gpt3", {
//         prompt: "Write a python script to add 2 numbers",
//       })
//       .then((res) => {
//         console.log(res.data);
//       })
//       .catch((err) => console.log(err));

const gpt3Get = async (prompt: string) => {
  console.log('gpt3Get');
  const response = await axios.post("http://localhost:8000/api/gpt3", {
    prompt: prompt,
  });
  console.log('wooo', response)
  return response;
}



export default gpt3Get;