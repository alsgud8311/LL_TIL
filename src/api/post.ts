import { AxiosResponse } from 'axios';

import client from '.';

// Post 구조 정의
interface Post {
  id: number;
  track: string;
  detail: string;
  passwd: string;
  author: string;
}

// 응답 구조 정의
interface GetPostsResponse {
  data: Post[];
}

function postApi() {
  // getPosts 함수
  const getPosts = async (track: string): Promise<Post[] | undefined> => {
    try {
      const response: AxiosResponse<string> = await client.post('/api/post', {
        track,
      });
      const parsedResponse = JSON.parse(response.data) as GetPostsResponse;
      return parsedResponse.data;
    } catch (error) {
      console.error('client error:', error);
      return undefined;
    }
  };

  const newPost = async (
    author: string,
    detail: string,
    passwd: string,
    track: string,
  ) => {
    try {
      await client.post(
        '/api/post/new',
        { author, detail, passwd, track }, // 쿼리 파라미터를 올바르게 전달
      );
      return true;
    } catch (error) {
      console.error('client error:', error);
      return undefined; // 오류를 처리하는 방법 선택 가능
    }
  };

  return {
    getPosts,
    newPost,
  };
}

export default postApi();
