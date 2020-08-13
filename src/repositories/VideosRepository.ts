import BASE_URL from '../config';
import { VideosInterface } from '../types/video';

export const createVideo = async (
  videoData: VideosInterface,
): Promise<boolean> => {
  const response = await fetch(`${BASE_URL}/videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(videoData),
  });
  return response.ok;
};
