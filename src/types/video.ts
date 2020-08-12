export interface CategoriasInterface {
  id: number;
  titulo: string;
  descricao: string;
  cor: string;
  link_extra?: {
    text: string;
    url: string;
  };
}

export interface VideosInterface {
  id?: number;
  categoriaId: number;
  description: string;
  titulo: string;
  url: string;
}

export interface DadosVideosInterface {
  cor: string;
  id: number;
  link_extra: {
    text: string;
    url: string;
  };
  titulo: string;
  videos: VideosInterface[];
}
