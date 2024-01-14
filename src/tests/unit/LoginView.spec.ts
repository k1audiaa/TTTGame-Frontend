import { mount } from '@vue/test-utils';
import LoginView from '../../views/LoginView.vue';
import { createRouter, createMemoryHistory } from 'vue-router';
import { describe, it, expect, vi } from 'vitest';
import jest from 'jest-mock';

describe('LoginView.vue', () => {
    it('allows the user to play the game and exit', async () => {
        const history = createMemoryHistory();
        const router = createRouter({ history, routes: [] });

        const wrapper = mount(LoginView, {
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

        await wrapper.find('.input-field').setValue('testUser');

        await wrapper.vm.$nextTick();

        expect(wrapper.find('.custom-button').text()).toContain("Let's TTT");

        await wrapper.find('.custom-button').trigger('click');

        await wrapper.vm.$nextTick();

        mockFetch.mockRestore();
    });
});












