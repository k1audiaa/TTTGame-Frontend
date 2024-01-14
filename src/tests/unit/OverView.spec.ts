import { mount } from '@vue/test-utils';
import OverView from '../../views/OverView.vue';
import { createRouter, createMemoryHistory } from 'vue-router';
import { describe, it, expect, vi } from 'vitest';

globalThis.fetch = async () => ({ json: async () => ({ exists: true, userId: 1 }) });

describe('OverView.vue', () => {
    it('renders Overview view after successful login', async () => {
        const history = createMemoryHistory();
        const router = createRouter({ history, routes: [] });

        const wrapper = mount(OverView, {
            global: {
                plugins: [router],
            },
        });

        localStorage.setItem('username', 'TestUser');

        await wrapper.vm.$nextTick();

        expect(wrapper.find('.points').text()).toContain('100');
        expect(wrapper.find('.custom-button').text()).toContain('PLAY');
    });
});





