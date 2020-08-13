import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import { WatchContainer, WatchComponent } from './styles';

interface RouteParams {
  videoid: string;
}
const Watch: React.FC = () => {
  const { params } = useRouteMatch<RouteParams>();
  return (
    <PageDefault>
      <div style={{ margin: 'auto', maxWidth: '800px' }}>
        <WatchContainer>
          <WatchComponent
            title="Iframe title"
            id="ytplayer"
            src={`http://www.youtube.com/embed/${params.videoid}?autoplay=1`}
            frameBorder="0"
            allowFullScreen
          />
        </WatchContainer>
      </div>
    </PageDefault>
  );
};

export default Watch;
