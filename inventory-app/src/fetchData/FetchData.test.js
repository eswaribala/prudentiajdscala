import axios from 'axios';

import { fetchData, apiUrl } from './FetchData';

jest.mock('axios');

describe('fetchData', () => {
    it('fetches successfully data from an API', async () => {
        const data = {
            data: {
                hits: [
                    {
                        productName: 'TV',
                        cost: 2946752,
                    },
                    {
                        productName: 'Laptop',
                        cost: 80000,
                    },
                ],
            },
        };
        //setup
        axios.get.mockImplementationOnce(() => Promise.resolve(data));
        //invocation
        await expect(fetchData()).resolves.toEqual(data);
        //test case
        expect(axios.get).toHaveBeenCalledWith(
            `${apiUrl}`,
        );
    });


});
