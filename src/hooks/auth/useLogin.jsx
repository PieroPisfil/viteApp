import { useMutation } from "react-query";
import pb from "../../api/pocketbase.config";
export default function useLogin() {
  async function login({ email, password }) {
      // const authData =
      await pb.collection("users").authWithPassword(email, password);
  }
  return useMutation({mutationFn: login})
}
