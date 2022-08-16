import { _baseURL } from "../config";
import { IData, IRanking } from "../types";

export async function getRanking(): Promise<IRanking[] | undefined> {
  try {
    const ranking = await _baseURL
      .get<IData<IRanking[] | undefined>>("/ranking")
      .then((response) => {
        if (response.data.error) {
          throw new Error(response.data.msg || "failed to ranking");
        }
        return response.data.data;
      });
    return ranking;
  } catch (error: any) {
    throw new Error(error.message || "failed to ranking");
  }
}
