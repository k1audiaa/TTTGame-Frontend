import { mount } from '@vue/test-utils';
import { createRouter, createMemoryHistory } from 'vue-router';
import { describe, it, expect, vi } from 'vitest';
import WinView from "../../views/WinView.vue";

globalThis.fetch = async () => ({ json: async () => ({ points: 42 }) });

describe('WinView.vue', () => {
    it('fetches points and displays the Win Lost view', async () => {
        const history = createMemoryHistory();
        const router = createRouter({ history, routes: [] });

        const wrapper = mount(WinView, {
            global: {
                plugins: [router],
            },
        });

        await wrapper.vm.$nextTick();

        expect(wrapper.find('.gameWon').text()).toContain('GAME WON');
        expect(wrapper.find('.points').text()).toContain('100');
    });
});
