import pb from "../../api/pocketbase.config";
import { useQuery } from "react-query";
// import { useState, useEffect } from "react";
export default function useVerified() {
    const id = pb.authStore.model?.id;
    async function checkVerified(args) {
        console.log(args);
        // const userData = await pb.collection("users").getOne(id);
        const userData = await pb.collection("users").getOne(args.queryKey[1]);
        console.log(userData);
        return userData.verified;
    }
    return useQuery({
        queryFn: checkVerified,
        queryKey: ["check-verified", id],
        enabled: !!id,
    })
}

export async function requestVerification() {
    const email = pb.authStore.model?.email;
    const res = await pb.collection("users").requestVerification(email);
    if (res) {
      alert("Verification email sent");
    }
  }
