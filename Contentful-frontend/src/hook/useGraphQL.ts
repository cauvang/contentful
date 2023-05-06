import { ISuccessStory } from "@/interface/ISuccessStory";
import axios from "axios";
import { useQuery, UseQueryResult } from "react-query";

export function useSuccessStories(): UseQueryResult<ISuccessStory[]> {
  return useQuery(["success-story"], async () => {
    const { data } = await axios.get<ISuccessStory[]>(
      `${process.env.NEXT_PUBLIC_API_URL}/using-GraphQL/successStories`
    );
    return data;
  });
}

export function useHomelessDogNumber(): UseQueryResult<number> {
  return useQuery(["homeless-dog-amount"], async () => {
    const { data } = await axios.get<number>(
      `${process.env.NEXT_PUBLIC_API_URL}/using-GraphQL/homelessDog`
    );

    return data;
  });
}
