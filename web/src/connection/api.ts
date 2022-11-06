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


// export const dallePost =async (file:FileList  ) => {
//   console.log('file:', file[0])
//   const kms = new FormData()
//   kms.append('thing', file[0])
//   const response = await axios.post("http://localhost:8000/api/dalle", {
//     file: kms
//   });
//   return response
  
// }

export const dalleGet = async (prompt:string) => {
  const response = await axios.post("http://localhost:8000/api/dalle", prompt);
  return response
}



export default gpt3Get;