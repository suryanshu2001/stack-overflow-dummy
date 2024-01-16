import { getAllQuestionsApi,getAllAnswersOfQuestionApi } from "./Constants/APIs";

export const getAllQuestionsHandler =async () => {
    try {
      const response = await fetch(`${getAllQuestionsApi}`);
    //   if (!response.ok) {
    //     throw new Error('Network response was not ok');
    //   }
      const result = await response?.json();
      const items = result?.items;
      const count = result?.items?.length;
      return {result,items,count};
    } catch (error) {
      throw error;
    }
  };
  export const getAllAnswersToAQuestionHandler =async (question_id) => {
    try {
      const response = await fetch(`https://api.stackexchange.com/2.3/questions/${question_id}/answers?order=desc&sort=activity&site=stackoverflow&filter=withbody`);
    //   if (!response.ok) {
    //     throw new Error('Network response was not ok');
    //   }
      const result = await response?.json();
    const items = result?.items;
    const count = result?.items?.length;
      return {result,count,items};
    } catch (error) {
      throw error;
    }
  };
  export const getAllQuestionToSearchHandler =async (search) => {
    try {
      const response = await fetch(`https://api.stackexchange.com/2.3/similar?order=desc&sort=activity&title=${search}&site=stackoverflow&filter=withbody`);
    //   if (!response.ok) {
    //     throw new Error('Network response was not ok');
    //   }
      const result = await response?.json();
    const items = result?.items;
    const count = result?.items?.length;
      return {result,count,items};
    } catch (error) {
      throw error;
    }
  };