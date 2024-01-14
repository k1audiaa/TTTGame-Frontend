import { mount } from '@vue/test-utils';
import DrawView from '../../views/DrawView.vue';
import { createRouter, createMemoryHistory } from 'vue-router';
import { describe, it, expect, vi } from 'vitest';

describe('DrawView.vue', () => {
    it('fetches points and displays the Draw view', async () => {
        global.fetch = async () => ({ json: async () => ({ points: 50 }) });

        const history = createMemoryHistory();
        const router = createRouter({ history, routes: [] });

        const wrapper = mount(DrawView, {
            global: {
                plugins: [router],
            },
        });

        await wrapper.vm.$nextTick();

        expect(wrapper.find('.gameDraw').text()).toContain('GAME DRAW');
        expect(wrapper.find('.points').text()).toContain('0');
    });
});
