import { mount } from '@vue/test-utils';
import GameView from '../../views/GameView.vue';
import { createRouter, createMemoryHistory } from 'vue-router';
import {describe, it, expect, vi} from 'vitest';
import jest from "jest-mock";

describe('GameView.vue', () => {
    it('allows the user to play the game and exit', async () => {
        const history = createMemoryHistory();
        const router = createRouter({ history, routes: [] });

        const wrapper = mount(GameView, {
            global: {
                plugins: [router],
            },
        });

        const mockFetch = jest.spyOn(globalThis, 'fetch');
        mockFetch.mockResolvedValueOnce({
            status: 200,
            json: async () => ({
                id: 1,
                username: 'testUser',
                points: 100,
                level: 1,
            }),
        });

        await wrapper.vm.$nextTick();

        await wrapper.findAll('.cell').at(0).trigger('click');

        await wrapper.vm.$nextTick();

        expect(wrapper.findAll('.cell').at(0).text()).toContain('X');

        const routerPushSpy = vi.spyOn(router, 'push');

        await wrapper.find('.custom-button').trigger('click');

        await wrapper.vm.$nextTick();

        expect(routerPushSpy).toHaveBeenCalledWith('/overview');

        mockFetch.mockRestore();
    });
});

