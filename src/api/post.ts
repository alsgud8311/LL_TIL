import { AxiosResponse } from 'axios';

import client from '.'; // 올바르게 Axios 인스턴스를 가져오도록 확인

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

// getPosts 함수
const getPosts = async (track: string): Promise<Post[] | undefined> => {
  try {
    const response: AxiosResponse<GetPostsResponse> = await client.post(
      '/api/post',
      { track }, // 쿼리 파라미터를 올바르게 전달
    );
    return JSON.parse(response.data).data;
  } catch (error) {
    console.error('client error:', error);
    return undefined; // 오류를 처리하는 방법 선택 가능
  }
};

export default getPosts; // ESLint 경고를 해결하기 위해 기본 내보내기로 변경
