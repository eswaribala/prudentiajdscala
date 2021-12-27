import axios from 'axios';

import { fetchData, apiUrl } from './FetchData';

jest.mock('axios');

describe('fetchData', () => {
    it('fetches successfully data from an API', async () => {
        const data = {
            data: {
                hits: [
                    {
                        objectID: '1',
                        title: 'a',
                    },
                    {
                        objectID: '2',
                        title: 'b',
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
