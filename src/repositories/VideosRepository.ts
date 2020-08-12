import BASE_URL from '../config';
import { VideosInterface } from '../types/video';

export const createVideo = (videoData: VideosInterface): Promise<boolean> => {
  const postData = async () => {
    const response = await fetch(`${BASE_URL}/videos`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(videoData),
    });

    return response.ok;
  };
  return postData();
};
