import { mount } from '@vue/test-utils';
import LostView from '../../views/LostView.vue';
import { createRouter, createMemoryHistory } from 'vue-router';
import { describe, it, expect, vi } from 'vitest';

describe('LostView.vue', () => {
    it('fetches points and displays the Game Lost view', async () => {
          global.fetch = async () => ({ json: async () => ({ points: 100 }) });

        const history = createMemoryHistory();
        const router = createRouter({ history, routes: [] });

        const wrapper = mount(LostView, {
            global: {
                plugins: [router],
            },
        });

        await wrapper.vm.$nextTick();

        expect(wrapper.find('.gameLost').text()).toContain('GAME LOST');
        expect(wrapper.find('.points').text()).toContain('0');
    });
});





