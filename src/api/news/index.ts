
import { NewsEntity, NewsEntities } from '../../model';
import { news as mockNews, newsItem as mockNewsItem } from './mockData';
import { axios } from "../../utils";
import { any } from 'prop-types';


const fetchNewsMock = (): Promise<NewsEntities> => {
    return Promise.resolve(mockNews);
};

const delNewsMock = (): Promise<NewsEntity> => {
    return Promise.resolve(mockNewsItem);
};

const fetchNewsAsync = async (): Promise<NewsEntities> => {
    return axios.get("/news")
        .then(({ news }: any): NewsEntities => {
            return news;
        })
};

const delNewsAsync = async (id: number): Promise<NewsEntity> => {
    return axios.delete(`/news/${id}`)
        .then(({ newsItem }: any): NewsEntity => {
            return newsItem;
        })
};

export const newsAPI = {
    fetchNewsMock,
    fetchNewsAsync,
    delNewsAsync,
    delNewsMock
};