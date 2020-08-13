import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import { getCategoriesFull } from '../../repositories/CategoriesRepository';
import Message from '../../components/Message';
import useMessage from '../../hooks/useMessage';

interface DadosVideosInterface {
  cor: string;
  id: number;
  link_extra: {
    text: string;
    url: string;
  };
  titulo: string;
  videos: {
    categoriaId: number;
    description: string;
    id: number;
    titulo: string;
    url: string;
  }[];
}

const Home: React.FC = () => {
  const [dadosVideos, setDadosVideos] = useState<DadosVideosInterface[]>([]);

  const { addMessage, removeMessage, messageObj } = useMessage();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getCategoriesFull();
        setDadosVideos(data);
      } catch (error) {
        addMessage({
          type: 'error',
          message: ['Ocorreu um erro ao retornar os vídeos'],
        });
      }
    };
    getData();
  }, [addMessage]);

  const hasMessage = messageObj.message.length > 0;

  return (
    <>
      <PageDefault paddingAll={0}>
        {hasMessage && (
          <Message messageObj={messageObj} handleClickError={removeMessage} />
        )}
        {dadosVideos.length === 0 && <div>Loading...</div>}

        {dadosVideos.length > 0 && (
          <>
            <BannerMain
              videoTitle={dadosVideos[0].videos[0].titulo}
              url={dadosVideos[0].videos[0].url}
              videoDescription={dadosVideos[0].videos[0].description}
            />
            {dadosVideos.map((video, index) => {
              return (
                <Carousel
                  key={video.id}
                  ignoreFirstVideo={index === 0}
                  category={video}
                />
              );
            })}
          </>
        )}
      </PageDefault>
    </>
  );
};

export default Home;
