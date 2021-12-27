import axios from 'axios';

import { fetchData, apiUrl } from './FetchData';

jest.mock('axios');

describe('fetchData', () => {
    it('fetches successfully data from an API', async () => {
        const input={
            productName:'HeadSet',
            cost:13000
        }
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
        axios.post.mockImplementationOnce((input) => Promise.resolve(data));
        //invocation
        await expect(fetchData(input)).resolves.toEqual(data);
        //test case
        expect(axios.post).toHaveBeenCalledWith(
            `${apiUrl}`,input
        );
    });


});
