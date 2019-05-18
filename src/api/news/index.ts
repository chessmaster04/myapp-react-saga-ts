
import { NewsEntity } from '../../model';
import { news as mockNews } from './mockData';
import { axios } from "../../utils";


const fetchNewsMock = (): Promise<NewsEntity[]> => {
    return Promise.resolve(mockNews);
};

const fetchNewsAsync = (): Promise<NewsEntity[]> => {
    return axios.get("/news")
        .then(({ news }: any): NewsEntity[] => {
            return news;
        })
};

export const newsAPI = {
    fetchNewsMock,
    fetchNewsAsync
};